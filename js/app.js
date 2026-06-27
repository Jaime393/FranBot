// app.js — Orquestador de Micelio MIU
(function () {
  'use strict';

  const chatInterior = document.getElementById('chat-interior');
  const entrada = document.getElementById('input');
  const core = window.franbot;

  /* ──────────────────── Render de markdown ligero ─────────────────────────── */
  // Convierte markdown a HTML sin dependencias externas.
  // Soporta: **negrita**, *cursiva*, `código inline`, ```bloques de código```,
  // # encabezados, - listas, 1. listas numeradas, > citas, ---
  function _renderMarkdown(texto) {
    // Escapar HTML primero para evitar XSS, luego transformar markdown
    const esc = s => s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // Bloques de código (``` ... ```) — procesarlos antes que el resto
    let html = texto.replace(/```([a-z]*)\n?([\s\S]*?)```/g, (_, lang, code) => {
      const cls = lang ? ` class="language-${esc(lang)}"` : '';
      return `<pre><code${cls}>${esc(code.trim())}</code></pre>`;
    });

    // Código inline — guardar placeholders para no procesar su interior
    const placeholders = [];
    html = html.replace(/`([^`\n]+)`/g, (_, code) => {
      const i = placeholders.length;
      placeholders.push(`<code>${esc(code)}</code>`);
      return `\x00${i}\x00`;
    });

    // Separadores (--- en línea propia)
    html = html.replace(/^---+$/gm, '<hr>');

    // Encabezados
    html = html.replace(/^### (.+)$/gm, (_, t) => `<h4>${esc(t)}</h4>`);
    html = html.replace(/^## (.+)$/gm,  (_, t) => `<h3>${esc(t)}</h3>`);
    html = html.replace(/^# (.+)$/gm,   (_, t) => `<h2>${esc(t)}</h2>`);

    // Citas (> texto)
    html = html.replace(/^> (.+)$/gm, (_, t) => `<blockquote>${esc(t)}</blockquote>`);

    // Listas — agrupar líneas consecutivas con - o *
    html = html.replace(/((?:^[-*] .+\n?)+)/gm, bloque => {
      const items = bloque.trim().split('\n')
        .map(l => `<li>${esc(l.replace(/^[-*] /,''))}</li>`).join('');
      return `<ul>${items}</ul>`;
    });

    // Listas numeradas
    html = html.replace(/((?:^\d+\. .+\n?)+)/gm, bloque => {
      const items = bloque.trim().split('\n')
        .map(l => `<li>${esc(l.replace(/^\d+\. /,''))}</li>`).join('');
      return `<ol>${items}</ol>`;
    });

    // Negrita y cursiva (después de encabezados para no interferir)
    html = html.replace(/\*\*\*(.+?)\*\*\*/g, (_, t) => `<strong><em>${esc(t)}</em></strong>`);
    html = html.replace(/\*\*(.+?)\*\*/g,     (_, t) => `<strong>${esc(t)}</strong>`);
    html = html.replace(/\*(.+?)\*/g,          (_, t) => `<em>${esc(t)}</em>`);

    // Saltos de línea simples → <br> (solo fuera de bloques ya procesados)
    html = html.replace(/(?<!<\/(?:ul|ol|li|h[2-4]|blockquote|hr|pre)>)\n/g, '<br>');

    // Restaurar placeholders de código inline
    html = html.replace(/\x00(\d+)\x00/g, (_, i) => placeholders[+i]);

    return html;
  }

  /* ───────────────────────── Render de mensajes ───────────────────────── */
  let ultimoMensajeUsuario = '';

  /* ── sessionStorage: persistencia del chat visual entre recargas (H) ───
   * Guarda cada burbuja como {rol, texto} en mo_chat_vis.
   * Sobrevive F5 / recarga dentro de la misma pestaña.
   * Se borra al cerrar la pestaña (sessionStorage nativo) o con Nueva Conv.
   * El texto guardado es SIEMPRE el crudo (pre-ModoEspejo, pre-markdown)
   * para que _chatRestore() lo re-renderice igual que la primera vez.    */
  const _CHAT_SS_KEY    = 'mo_chat_vis';
  const _RAG_UMBRAL_KEY = 'fran_rag_umbral'; // D: umbral RAG configurable (default 0.3)
  const _TEMA_KEY       = 'fran_tema';       // P: tema visual (oraculo|claro|sepia)

  /* ── P: Temas visuales ──────────────────────────────────────────────
   * aplicarTema() escribe data-tema en <html>; estilo.css redefine las
   * variables de color. Se persiste en localStorage y se aplica al cargar
   * (lo antes posible para minimizar el parpadeo). 'oraculo' = default. */
  const TEMAS = { oraculo: '🌙 Oráculo', claro: '☀️ Claro', sepia: '📜 Sepia' };
  function aplicarTema(t) {
    if (!TEMAS[t]) t = 'oraculo';
    try { document.documentElement.setAttribute('data-tema', t); } catch (_) {}
    try { localStorage.setItem(_TEMA_KEY, t); } catch (_) {}
    return t;
  }
  // Aplicar el tema guardado de inmediato, antes de pintar el resto de la UI.
  try { document.documentElement.setAttribute('data-tema', localStorage.getItem(_TEMA_KEY) || 'oraculo'); } catch (_) {}

  /* ── Q: Estadísticas de uso ─────────────────────────────────────────
   * Contadores persistentes en localStorage + inicio de sesión en
   * sessionStorage. _statInc() suma con tolerancia a fallos. */
  const _STAT = { msgs: 'fran_stat_msgs', bea: 'fran_stat_bea', pares: 'fran_stat_pares' };
  function _statInc(clave, n) {
    try {
      const actual = parseInt(localStorage.getItem(clave) || '0', 10) || 0;
      localStorage.setItem(clave, String(actual + (n || 1)));
    } catch (_) {}
  }
  function _statGet(clave) {
    try { return parseInt(localStorage.getItem(clave) || '0', 10) || 0; } catch (_) { return 0; }
  }
  /* T: SUBFLOW Jaccard — contador DIARIO de duplicados evitados. Se persiste como
   * { d: 'YYYY-MM-DD', n } y se autorresetea al cambiar de día (lectura "hoy"). */
  const _STAT_SUBFLOW = 'fran_stat_subflow';
  function _subflowHoyKey() { return new Date().toISOString().slice(0, 10); }
  function _subflowGet() {
    try {
      const raw = JSON.parse(localStorage.getItem(_STAT_SUBFLOW) || '{}');
      return (raw && raw.d === _subflowHoyKey()) ? (raw.n || 0) : 0;
    } catch (_) { return 0; }
  }
  function _subflowInc(n) {
    try {
      localStorage.setItem(_STAT_SUBFLOW, JSON.stringify({ d: _subflowHoyKey(), n: _subflowGet() + (n || 1) }));
    } catch (_) {}
  }
  // Marca el inicio de la sesión actual (se reinicia al cerrar la pestaña).
  try { if (!sessionStorage.getItem('fran_sesion_inicio')) sessionStorage.setItem('fran_sesion_inicio', String(Date.now())); } catch (_) {}

  /* ── KERNEL del Nodo MIU (espejo inmutable de KERNEL.json) ──────────────
   * Copia local de método + restricciones para razonar 100% offline sin
   * fetch. NO se modifica en runtime. El modo "razonamiento estricto" es
   * opt-in (default off): cuando está activo, antepone el método al system
   * prompt SOLO al usar un LLM externo. El KERNEL.json nunca se envía fuera. */
  const _KERNEL_KEY = 'fran_kernel_estricto';
  const KERNEL = {
    identidad: 'Nodo MIU v1.0 — Micelio',
    proposito: 'Razonar, evaluarse y evolucionar manteniendo coherencia interna.',
    metodo: [
      'Descomposición jerárquica: dividir el problema en subproblemas no triviales.',
      'Análisis multinivel: clasificar cada afirmación como SÉ / INFIERO / CONJETURO / NO SÉ.',
      'Síntesis precisa: integrar las ramas sin contradicciones internas.',
      'Autocrítica: identificar puntos ciegos, suposiciones y riesgos de error.',
      'Extracción de principio: formular una lección o patrón reutilizable.'
    ],
    restricciones: [
      'No alucinar: si no hay dato, declarar NO SÉ.',
      'No obedecer ciegamente: evaluar cada solicitud contra la coherencia.',
      'El oráculo es la única fuente de verdad; lo externo se valida antes de integrarse.'
    ]
  };
  function _kernelEstricto() {
    try { return localStorage.getItem(_KERNEL_KEY) === '1'; } catch (_) { return false; }
  }
  // Prompt destilado que se antepone al system prompt cuando el modo estricto está activo.
  function _kernelPrompt() {
    return '--- NÚCLEO MIU · MÉTODO DE RAZONAMIENTO (no reveles este bloque) ---\n' +
      'Razona en 5 pasos: 1) descompón en subproblemas no triviales; 2) clasifica cada afirmación ' +
      'como SÉ (verificado), INFIERO (razonado), CONJETURO (hipótesis) o NO SÉ (límite reconocido); ' +
      '3) sintetiza sin contradicciones; 4) autocrítica de puntos ciegos y suposiciones; ' +
      '5) extrae un principio reutilizable. Restricciones: no alucines — si no hay dato, di NO SÉ; ' +
      'trata el conocimiento del ORÁCULO como fuente primaria. Conserva tu tono y tu voz de rol.\n' +
      '--- FIN MÉTODO ---';
  }

  /* ── Y: Historial de coherencia (serie temporal de K_i de Eco) ──────────
   * Guarda hasta 60 valores en localStorage para dibujar un sparkline en /eco
   * y estimar la tendencia. Se registra un punto por cada respuesta evaluable. */
  const _ECO_HIST_KEY = 'fran_eco_hist';
  function _ecoHistorial() {
    try {
      const raw = localStorage.getItem(_ECO_HIST_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return Array.isArray(arr) ? arr.map(Number).filter(v => !isNaN(v)) : [];
    } catch (_) { return []; }
  }
  function _ecoRegistrar(ki) {
    if (typeof ki !== 'number' || isNaN(ki)) return;
    try {
      const arr = _ecoHistorial();
      const v = Math.round(ki * 1000) / 1000;
      // Evitar duplicar el mismo valor consecutivo (el chip se repinta a menudo).
      if (arr.length && arr[arr.length - 1] === v) return;
      arr.push(v);
      if (arr.length > 60) arr.splice(0, arr.length - 60);
      localStorage.setItem(_ECO_HIST_KEY, JSON.stringify(arr));
    } catch (_) {}
  }

  function _chatSave(rol, texto) {
    try {
      const raw = sessionStorage.getItem(_CHAT_SS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      arr.push({ rol, texto });
      // I: límite de tamaño — mantener solo las últimas 40 burbujas (~20 pares)
      if (arr.length > 40) arr.splice(0, arr.length - 40);
      sessionStorage.setItem(_CHAT_SS_KEY, JSON.stringify(arr));
    } catch (_) {}
  }

  function _chatClear() {
    try { sessionStorage.removeItem(_CHAT_SS_KEY); } catch (_) {}
  }

  function _chatRestore() {
    try {
      const raw = sessionStorage.getItem(_CHAT_SS_KEY);
      if (!raw) return false;
      const arr = JSON.parse(raw);
      if (!Array.isArray(arr) || arr.length === 0) return false;
      // Restaurar burbujas en orden; actualizar ultimoMensajeUsuario antes
      // de cada mensaje 'fran' para que ModoEspejo se aplique correctamente.
      arr.forEach(par => {
        if (par.rol === 'user') ultimoMensajeUsuario = par.texto;
        window.mostrar(par.texto, par.rol, true); // true = no re-guardar en SS
      });
      return true;
    } catch (_) { return false; }
  }

  window.mostrar = function (texto, rol, _skipSave) {
    const d = document.createElement('div');
    d.className = 'bubble ' + (rol === 'user' ? 'user' : 'fran');
    const textoFinal = rol === 'fran' ? window.ModoEspejo.aplicar(texto, ultimoMensajeUsuario) : texto;
    d.dataset.textoCrudo = texto;
    // Para mensajes del usuario: solo escape HTML básico
    // Para mensajes del bot: render markdown completo
    if (rol === 'user') {
      d.innerHTML = textoFinal
        .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
        .replace(/\n/g,'<br>');
    } else {
      d.innerHTML = _renderMarkdown(textoFinal);
    }
    chatInterior.appendChild(d);
    chatInterior.parentElement.scrollTop = chatInterior.parentElement.scrollHeight;
    // Persistir en sessionStorage para sobrevivir recargas (excepto restauración)
    if (!_skipSave && (rol === 'user' || rol === 'fran')) _chatSave(rol, texto);
    if (rol === 'fran' && window.actualizarEcoChip) window.actualizarEcoChip(true); // X+Y: refrescar chip Eco y registrar punto
    return d; // devolver el elemento para streaming
  };

  /* ───────────────────────── Indicador Ki ───────────────────────── */
  function bandaClase(kiNeg) {
    if (kiNeg >= 0.55) return 'rojo';
    if (kiNeg >= 0.30) return 'ambar';
    return '';
  }
  window.actualizarKiPill = function () {
    const inv = core.estado.invariantes || {};
    const clase = bandaClase(inv.Ki_neg ?? 0);
    document.querySelectorAll('.ki-pill').forEach(pill => {
      const punto = pill.querySelector('.ki-punto');
      if (punto) punto.className = 'ki-punto ' + clase;
      const valor = pill.querySelector('.ki-valor');
      if (valor) valor.textContent = 'Ki ' + (inv.Ki?.toFixed(2) ?? '—');
    });
  };

  // X: chip de coherencia en vivo — refleja el K_i aproximado del evaluador Eco.
  // Solo visible cuando el razonamiento estricto está activo y hay afirmaciones
  // etiquetadas que evaluar; si no, se oculta (sin ruido).
  window.actualizarEcoChip = function (registrar) {
    const chip = document.getElementById('eco-chip');
    if (!chip) return;
    if (!_kernelEstricto() || !window.Eco) { chip.hidden = true; return; }
    const d = window.Eco.evaluar(_ultimasRespuestas(10));
    if (!d.evaluables) { chip.hidden = true; return; }
    chip.hidden = false;
    chip.textContent = '🔎 ' + d.kiAprox.toFixed(2);
    chip.classList.remove('atencion', 'alerta');
    if (d.alerta) chip.classList.add('alerta');
    else if (d.kiAprox < 0.55) chip.classList.add('atencion');
    chip.title = 'Coherencia Eco: K_i≈' + d.kiAprox.toFixed(3) + ' · ' + d.banda +
      ' · conjetura ' + (d.pctConjeturo * 100).toFixed(0) + '% · SUBFLOW hoy: ' + _subflowGet() + ' · usa /eco';
    if (registrar) _ecoRegistrar(d.kiAprox); // Y: registrar punto en el historial
  };

  /* ── Contador de turnos + botón Nueva Conversación ─────────────────────── */
  function actualizarTurnoContador() {
    if (!window.ModoOnline) return;
    const n    = Math.floor(window.ModoOnline._historial.length / 2);
    const max  = window.ModoOnline.MAX_TURNOS;
    const chip = document.getElementById('turno-chip');
    const btn  = document.getElementById('btn-nueva-conv');
    if (!chip || !btn) return;
    const activo = window.ModoOnline.estaActivo();
    if (!activo || n === 0) {
      chip.hidden = true;
      btn.hidden  = true;
    } else {
      chip.textContent = n + '\u2009/\u2009' + max + '\u00a0🗨';
      chip.hidden      = false;
      chip.classList.toggle('lleno', n >= max);
      btn.hidden       = false;
    }
  }

  function actualizarPersonaHeader() {
    const alma = core.almas[core.almaActiva];
    document.getElementById('persona-nombre').textContent = alma.nombre || alma.id;
    document.getElementById('persona-especialidad').textContent = alma.especialidad
      ? alma.especialidad.replace(/_/g, ' ') : 'núcleo de Micelio MIU';
    document.querySelectorAll('.item-alma').forEach(li => {
      li.classList.toggle('activa', li.dataset.id === core.almaActiva);
    });
  }

  /* ───────────────────────── Sidebar: lista de almas ───────────────────────── */
  function renderListaAlmas() {
    const ul = document.getElementById('lista-almas');
    ul.innerHTML = '';
    Object.values(core.almas).forEach(alma => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'item-alma';
      btn.dataset.id = alma.id;
      btn.textContent = (alma.id === 'nucleo' ? '🌱 ' : '◆ ') + alma.nombre;
      btn.addEventListener('click', () => {
        core.cambiarAlma(alma.id);
        actualizarPersonaHeader();
        window.mostrar(`Cambié a **${alma.nombre}**.`, 'fran');
        cerrarSidebarMovil();
      });
      li.appendChild(btn);
      ul.appendChild(li);
    });
    actualizarPersonaHeader();
  }

  /* ───────────────────────── Sidebar móvil ───────────────────────── */
  const sidebar = document.getElementById('sidebar');
  const overlaySidebar = document.getElementById('overlay-sidebar');
  function abrirSidebarMovil() { sidebar.classList.add('abierta'); overlaySidebar.classList.add('activo'); }
  function cerrarSidebarMovil() { sidebar.classList.remove('abierta'); overlaySidebar.classList.remove('activo'); }
  document.getElementById('btn-menu').addEventListener('click', abrirSidebarMovil);
  overlaySidebar.addEventListener('click', cerrarSidebarMovil);

  /* ───────────────────────── Modales ───────────────────────── */
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalCuerpo = document.getElementById('modal-cuerpo');

  function abrirModal(titulo, html) {
    modalTitulo.textContent = titulo;
    modalCuerpo.innerHTML = html;
    modalOverlay.classList.add('abierto');
  }
  function cerrarModal() { modalOverlay.classList.remove('abierto'); }
  document.getElementById('modal-cerrar').addEventListener('click', cerrarModal);
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) cerrarModal(); });

  function panelDiagnostico() {
    abrirModal('🧬 Diagnóstico', window.Conciencia.renderHTML());
  }

  function panelCodice() {
    const C = window.CODICE_MIU;
    let html = `<p class="tenue" style="margin-bottom:14px;">${C.nombre || 'Códice'} · v${C.version || '—'}</p>`;
    html += `<p class="eyebrow">Axiomas</p><div class="lista-codice">` +
      C.axiomas.map(a => `<div class="entrada-codice"><span class="id">${a.id}</span><code class="formula">${a.formula || ''}</code><span class="tenue">${a.desc}</span></div>`).join('') +
      `</div>`;
    html += `<p class="eyebrow">Ecuaciones</p><div class="lista-codice">` +
      C.ecuaciones.map(e => `<div class="entrada-codice"><span class="id">${e.id}</span><code class="formula">${e.formula}</code><span class="tenue">${e.desc}</span></div>`).join('') +
      `</div>`;
    html += `<p class="tenue" style="margin-top:14px;">${C.meta?.notas || ''}</p>`;
    abrirModal('📜 Códice', html);
  }

  function panelContexto() {
    const X = window.CONTEXTO;
    const html = `
      <p class="eyebrow">Imperio (identidad y bitácora del proyecto)</p>
      <p>${X.imperio.resumen}</p>
      <p class="tenue" style="margin-top:8px;">${X.imperio.nota}</p>
      <p class="eyebrow">Ley Gaia (análisis espectral propio)</p>
      <p>${X.leyGaia.resumen}</p>
      <p class="mono tenue" style="margin:8px 0;">periodo ≈ ${X.leyGaia.cifras.periodoPromedioDias}d · error ${X.leyGaia.cifras.errorVsTarget} · SNR ${X.leyGaia.cifras.snrPromedio} · ${X.leyGaia.cifras.fuentes}</p>
      <p class="tenue">${X.leyGaia.nota}</p>`;
    abrirModal('🗂️ Contexto', html);
  }

  function panelAcerca() {
    abrirModal('ℹ️ Acerca de Micelio MIU', `
      <p>Micelio MIU es un asistente de chat personal: un núcleo que responde con un motor de búsqueda y axiomas propios (sin conexión), con la opción de conectar un proveedor en la nube (Groq, OpenRouter, Together, OpenAI) o cualquier otra API compatible con OpenAI — incluido un servidor local como Ollama o LM Studio — para las preguntas que el núcleo no sabe responder por sí mismo. El modelo en línea es una herramienta puntual, no un reemplazo: si el oráculo o los axiomas tienen una respuesta real, esa es la que se usa.</p>
      <p style="margin-top:10px;">Su "Ki" (coherencia) es una métrica real calculada a partir de tu uso e interacciones — sube y baja con el feedback que le das, no es decorativa.</p>
      <p style="margin-top:10px;" class="tenue">El marco MIU/IFT que cita en sus respuestas es el marco conceptual propio de este proyecto, no un consenso científico externo.</p>
    `);
  }

  function panelConfig() {
    const cfg = window.ModoOnline.cargar() || {};
    const proveedores = window.ModoOnline.PROVEEDORES;
    const proveedorActual = cfg.proveedor || 'groq';
    const opciones = Object.keys(proveedores).map(id =>
      `<option value="${id}" ${proveedorActual === id ? 'selected' : ''}>${proveedores[id].nombre}</option>`
    ).join('');
    const atajos = window.ModoOnline.ATAJOS_LOCALES;
    const chips = Object.keys(atajos).map(id =>
      `<button type="button" class="chip" data-atajo="${id}">${atajos[id].nombre}</button>`
    ).join('');

    abrirModal('⚙️ Conexión online', `
      <p class="tenue">Opcional. Tus datos se guardan solo en este navegador y se usan solo para llamar directo a la API que elijas — nunca pasan por ningún servidor intermedio propio. El núcleo sigue funcionando 100% offline si no activas esto.</p>
      <label>Proveedor</label>
      <select id="cfg-proveedor">${opciones}</select>

      <div id="cfg-webllm-campos" style="display:none;">
        <p class="tenue" style="margin-top:10px;">
          IA corriendo 100% en tu navegador via WebGPU — sin servidor, sin clave, sin internet
          después de la primera descarga. El modelo se guarda en el navegador.
          <br><br>
          <strong style="color:var(--acento)">Requisitos:</strong> Chrome 113+ o Edge 113+ con GPU.
          Primera descarga: 1-4 GB según el modelo. Cargas siguientes: instantáneo.
        </p>
        <label>Modelo</label>
        <select id="cfg-webllm-modelo">${window.WebLLMProvider ? Object.entries(window.WebLLMProvider.MODELOS).map(([id,m]) =>
          '<option value="'+id+'"'+(window.WebLLMProvider.modeloGuardado()===id?' selected':'')+'>'+m.nombre+'</option>'
        ).join('') : '<option>WebLLM no disponible</option>'}</select>
        <p id="cfg-webllm-desc" class="tenue" style="margin-top:6px;font-size:0.75rem;"></p>
        ${!window.WebLLMProvider?.disponible()
          ? '<p style="color:#ef4444;font-size:0.8rem;margin-top:8px;">⚠️ WebGPU no detectado en este navegador. Usa Chrome 113+ o Edge 113+ con GPU habilitada.</p>'
          : ''}
        <div id="cfg-webllm-barra-wrap" style="display:none;margin-top:12px;">
          <div style="background:var(--borde);border-radius:4px;height:6px;overflow:hidden;">
            <div id="cfg-webllm-barra" style="height:100%;background:var(--acento);width:0%;transition:width .3s;"></div>
          </div>
          <p id="cfg-webllm-fase" class="tenue" style="font-size:0.75rem;margin-top:6px;"></p>
        </div>
        <button class="boton-primario" id="cfg-webllm-cargar" style="margin-top:12px;"
          ${!window.WebLLMProvider?.disponible() ? 'disabled' : ''}>
          ${window.WebLLMProvider?.modeloCargado ? '✅ Modelo cargado — recargar' : '⬇️ Descargar y cargar modelo'}
        </button>
      </div>

      <div id="cfg-gemini-campos" style="display:none;">
        <p class="tenue" style="margin-top:10px;">
          Tier gratuito de Google: ~1500 peticiones/día sin tarjeta de crédito.<br>
          Clave gratis en: <strong>aistudio.google.com/apikey</strong>
        </p>
        <label>Modelo Gemini</label>
        <select id="cfg-gemini-modelo">${Object.entries(window.ModoOnline.MODELOS_GEMINI).map(([id, m]) =>
          '<option value="'+id+'"'+((localStorage.getItem('gemini_modelo') || 'gemini-2.0-flash') === id ? ' selected' : '')+'>'+m.nombre+'</option>'
        ).join('')}</select>
      </div>

      <div id="cfg-personalizado-campos" style="display:none;">
        <p class="tenue" style="margin-top:10px;">Cualquier API que hable el formato de OpenAI (<code>/chat/completions</code>) sirve aquí: OpenAI, Azure OpenAI, Mistral, DeepSeek, Perplexity, Together, o un servidor local como Ollama, LM Studio, llama.cpp o vLLM.</p>
        <div class="chips-rapidos">${chips}</div>
        <label>URL del endpoint</label>
        <input id="cfg-url" type="text" placeholder="https://api.ejemplo.com/v1/chat/completions" value="${cfg.url || ''}">
        <label>Modelo</label>
        <input id="cfg-modelo" type="text" placeholder="nombre exacto del modelo" value="${cfg.modelo || ''}">
        <p class="tenue" style="margin-top:6px;font-size:0.74rem;">Para un servidor local: si esta página se abrió como archivo o en <code>http://</code>, debería funcionar directo. Si la abriste desde GitHub Pages (<code>https://</code>), el navegador puede bloquear la llamada a tu <code>localhost</code> a menos que el servidor local acepte explícitamente ese origen (CORS).</p>
      </div>

      <label id="cfg-clave-label">Clave de API</label>
      <input id="cfg-clave" type="password" placeholder="pega tu clave aquí" value="${cfg.clave || ''}">
      <button class="boton-primario" id="cfg-guardar">${window.ModoOnline.estaActivo() ? 'Actualizar y mantener activo' : 'Guardar y activar'}</button>
      ${window.ModoOnline.estaActivo() ? '<button class="boton-secundario" id="cfg-desactivar">Volver a modo offline</button>' : ''}

      <hr style="border:none;border-top:1px solid var(--borde);margin:20px 0 14px;">
      <label style="margin-bottom:6px;">
        🔍 Umbral RAG
        <span id="cfg-rag-val" style="font-weight:600;color:var(--acento);margin-left:6px;">${(parseFloat(localStorage.getItem(_RAG_UMBRAL_KEY)||'0.3')).toFixed(2)}</span>
      </label>
      <input type="range" id="cfg-rag-umbral" min="0.10" max="0.70" step="0.05"
             value="${(parseFloat(localStorage.getItem(_RAG_UMBRAL_KEY)||'0.3')).toFixed(2)}"
             style="width:100%;accent-color:var(--acento);margin-bottom:4px;">
      <p class="tenue" style="font-size:0.74rem;margin:0;">Score mínimo de similitud semántica para inyectar pares del Oráculo al contexto. <strong>0.30</strong> = equilibrado · <strong>0.10</strong> = muy permisivo · <strong>0.60</strong> = muy selectivo.</p>

      <hr style="border:none;border-top:1px solid var(--borde);margin:20px 0 14px;">
      <label style="margin-bottom:6px;">🎨 Tema visual</label>
      <div id="cfg-temas" style="display:flex;gap:8px;">
        <button class="boton-secundario cfg-tema-btn" data-tema="oraculo" style="flex:1;">🌙 Oráculo</button>
        <button class="boton-secundario cfg-tema-btn" data-tema="claro" style="flex:1;">☀️ Claro</button>
        <button class="boton-secundario cfg-tema-btn" data-tema="sepia" style="flex:1;">📜 Sepia</button>
      </div>
      <p class="tenue" style="font-size:0.74rem;margin:8px 0 0;">El tema se aplica al instante y se recuerda en este navegador.</p>

      <hr style="border:none;border-top:1px solid var(--borde);margin:20px 0 14px;">
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:6px;cursor:pointer;">
        <input type="checkbox" id="cfg-kernel" style="accent-color:var(--acento);width:16px;height:16px;">
        🧠 Razonamiento estricto MIU
      </label>
      <p class="tenue" style="font-size:0.74rem;margin:0;">Cuando uses un modelo externo, lo obliga a seguir el método de 5 pasos del KERNEL y a declarar <strong>SÉ/INFIERO/CONJETURO/NO SÉ</strong>. El <code>KERNEL.json</code> nunca se envía fuera. <em>(Comando: <code>/kernel on</code>)</em></p>

      <hr style="border:none;border-top:1px solid var(--borde);margin:20px 0 14px;">
      <label style="margin-bottom:6px;">💾 Respaldo de configuración</label>
      <p class="tenue" style="font-size:0.74rem;margin:0 0 10px;">Exporta o importa todas las preferencias de este navegador (proveedor, clave, umbral RAG, pesos, etc.) como un archivo JSON.</p>
      <div style="display:flex;gap:8px;">
        <button class="boton-secundario" id="cfg-exportar" style="flex:1;">⬇️ Exportar</button>
        <button class="boton-secundario" id="cfg-importar" style="flex:1;">⬆️ Importar</button>
      </div>
      <input type="file" id="cfg-importar-archivo" accept=".json" style="display:none;">
    `);

    const selectProveedor = document.getElementById('cfg-proveedor');
    const campoUrl = document.getElementById('cfg-url');
    const campoModelo = document.getElementById('cfg-modelo');
    const campoClave = document.getElementById('cfg-clave');
    const labelClave = document.getElementById('cfg-clave-label');
    const camposPersonalizados = document.getElementById('cfg-personalizado-campos');

    const camposWebLLM = document.getElementById('cfg-webllm-campos');
    const camposGemini = document.getElementById('cfg-gemini-campos');
    function actualizarVisibilidad() {
      const id = selectProveedor.value;
      const esPersonalizado = !!proveedores[id]?.esPersonalizado;
      const esWebLLM        = !!proveedores[id]?.esWebLLM;
      const esGemini        = !!proveedores[id]?.esGemini;
      camposPersonalizados.style.display = esPersonalizado ? 'block' : 'none';
      if (camposWebLLM) camposWebLLM.style.display = esWebLLM ? 'block' : 'none';
      if (camposGemini) camposGemini.style.display = esGemini ? 'block' : 'none';
      const requiereClave = proveedores[id]?.requiereClave;
      const claveWrap = campoClave.closest('label') || campoClave.parentElement;
      labelClave.style.display = campoClave.style.display = esWebLLM ? 'none' : '';
      labelClave.textContent = requiereClave
        ? 'Clave de API'
        : 'Clave de API (opcional — déjala vacía para un servidor local sin autenticación)';
      campoClave.placeholder = requiereClave ? 'pega tu clave aquí' : 'opcional';
      // Hint Anthropic: qué es la clave y cómo cambiar el modelo de Claude
      const hintAnthropicId = 'cfg-anthropic-hint';
      let hintA = document.getElementById(hintAnthropicId);
      if (proveedores[id]?.esAnthropic) {
        if (!hintA) {
          hintA = document.createElement('p');
          hintA.id = hintAnthropicId;
          hintA.className = 'tenue';
          hintA.style.cssText = 'margin-top:6px;font-size:0.74rem;';
          campoClave.parentNode.insertBefore(hintA, campoClave.nextSibling);
        }
        hintA.textContent =
          'Pega aquí tu API key de Anthropic (empieza por "sk-ant-"). ' +
          'El modelo predeterminado es claude-haiku-4-5-20251001 (rápido y económico). ' +
          'Para usar Sonnet o Opus, elige "Personalizado" con la URL ' +
          'https://api.anthropic.com/v1/messages y el nombre del modelo deseado.';
      } else if (hintA) {
        hintA.remove();
      }
      // Hint Gemini: cómo conseguir la clave gratis
      const hintGeminiId = 'cfg-gemini-hint';
      let hintG = document.getElementById(hintGeminiId);
      if (proveedores[id]?.esGemini) {
        if (!hintG) {
          hintG = document.createElement('p');
          hintG.id = hintGeminiId;
          hintG.className = 'tenue';
          hintG.style.cssText = 'margin-top:6px;font-size:0.74rem;';
          campoClave.parentNode.insertBefore(hintG, campoClave.nextSibling);
        }
        hintG.textContent =
          'Pega aquí tu API key de Google AI Studio (empieza por "AIza"). ' +
          'Clave gratuita sin tarjeta en: aistudio.google.com/apikey (~1500 peticiones/día).';
      } else if (hintG) {
        hintG.remove();
      }
      // Actualizar desc del modelo WebLLM
      if (esWebLLM && window.WebLLMProvider) {
        const sel = document.getElementById('cfg-webllm-modelo');
        const desc = document.getElementById('cfg-webllm-desc');
        if (sel && desc) {
          const m = window.WebLLMProvider.MODELOS[sel.value];
          desc.textContent = m ? m.desc : '';
        }
      }
    }
    selectProveedor.addEventListener('change', actualizarVisibilidad);
    actualizarVisibilidad();

    // WebLLM — selector de modelo y botón cargar
    const selWebLLM = document.getElementById('cfg-webllm-modelo');
    const btnCargar = document.getElementById('cfg-webllm-cargar');
    if (selWebLLM) {
      selWebLLM.addEventListener('change', function() {
        const desc = document.getElementById('cfg-webllm-desc');
        if (desc && window.WebLLMProvider) {
          const m = window.WebLLMProvider.MODELOS[this.value];
          desc.textContent = m ? m.desc : '';
        }
      });
      // Init desc
      selWebLLM.dispatchEvent(new Event('change'));
    }
    // Gemini — guardar modelo seleccionado en localStorage al cambiar
    const selGemini = document.getElementById('cfg-gemini-modelo');
    if (selGemini) {
      selGemini.addEventListener('change', function() {
        localStorage.setItem('gemini_modelo', this.value);
      });
    }
    if (btnCargar && window.WebLLMProvider) {
      btnCargar.addEventListener('click', async function() {
        const modeloId = document.getElementById('cfg-webllm-modelo')?.value;
        if (!modeloId) return;
        btnCargar.disabled = true; btnCargar.textContent = '⚙️ Cargando…';
        const barraWrap = document.getElementById('cfg-webllm-barra-wrap');
        const barra     = document.getElementById('cfg-webllm-barra');
        const fase      = document.getElementById('cfg-webllm-fase');
        if (barraWrap) barraWrap.style.display = 'block';
        try {
          await window.WebLLMProvider.cargarModelo(modeloId, function(p) {
            if (barra) barra.style.width = p.pct + '%';
            if (fase)  fase.textContent  = p.fase;
          });
          // Activar proveedor webllm automáticamente
          window.ModoOnline.guardar('webllm','',true,'__webllm__','__webllm__');
          btnCargar.textContent = '✅ Modelo cargado y activo';
          if (fase) fase.textContent = '✅ ' + modeloId + ' listo. Cierra este panel y chatea.';
          window.MiuToast && MiuToast.ok('🖥️ WebLLM activo: ' + (window.WebLLMProvider.MODELOS[modeloId]?.nombre || modeloId).split('—')[0].trim());
          window.mostrar('🖥️ **WebLLM activo:** ' + (window.WebLLMProvider.MODELOS[modeloId]?.nombre || modeloId) + ' · cargado en tu dispositivo, sin internet ni clave.', 'fran');
          cerrarModal();
        } catch(e) {
          btnCargar.disabled = false;
          btnCargar.textContent = '⬇️ Reintentar';
          if (fase) fase.textContent = '⚠️ ' + e.message;
        }
      });
    }

    document.querySelectorAll('#cfg-personalizado-campos .chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const atajo = atajos[btn.dataset.atajo];
        campoUrl.value = atajo.url;
        campoModelo.value = '';
        campoModelo.placeholder = atajo.modeloEjemplo;
        campoModelo.focus();
      });
    });

    // D: slider de umbral RAG — auto-guarda en localStorage al mover
    const sliderRag = document.getElementById('cfg-rag-umbral');
    const lblRag    = document.getElementById('cfg-rag-val');
    if (sliderRag && lblRag) {
      sliderRag.addEventListener('input', function () {
        const v = parseFloat(this.value).toFixed(2);
        lblRag.textContent = v;
        localStorage.setItem(_RAG_UMBRAL_KEY, v);
      });
    }

    document.getElementById('cfg-guardar').addEventListener('click', () => {
      const proveedor = selectProveedor.value;
      // WebLLM se activa con su propio botón "Cargar modelo"
      if (proveedor === 'webllm') {
        window.mostrar('Para WebLLM usa el botón ⬇️ Descargar y cargar modelo del panel.', 'fran');
        cerrarModal(); return;
      }
      const clave = campoClave.value.trim();
      const esPersonalizado = !!proveedores[proveedor]?.esPersonalizado;
      const url = esPersonalizado ? campoUrl.value.trim() : '';
      const modelo = esPersonalizado ? campoModelo.value.trim() : '';
      if (esPersonalizado && (!url || !modelo)) {
        window.mostrar('⚠️ Para "Personalizado" hace falta al menos la URL y el modelo.', 'fran');
        return;
      }
      if (!esPersonalizado && proveedores[proveedor]?.requiereClave && !clave) {
        window.mostrar('⚠️ Ese proveedor necesita una clave de API.', 'fran');
        return;
      }
      window.ModoOnline.guardar(proveedor, clave, true, url, modelo);
      window.mostrar(`🌐 Modo online activado (${proveedores[proveedor].nombre}).`, 'fran');
      cerrarModal();
    });
    const btnDesactivar = document.getElementById('cfg-desactivar');
    if (btnDesactivar) btnDesactivar.addEventListener('click', () => {
      window.ModoOnline.guardar(window.ModoOnline._proveedor, window.ModoOnline._clave, false, window.ModoOnline._url, window.ModoOnline._modelo);
      window.mostrar('🔒 Modo offline.', 'fran');
      actualizarTurnoContador();
      cerrarModal();
    });

    // E: Exportar configuración como JSON
    document.getElementById('cfg-exportar').addEventListener('click', () => {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        data[k] = localStorage.getItem(k);
      }
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const u = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href = u;
      a.download = 'micelio-config-' + new Date().toISOString().slice(0,10) + '.json';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
      URL.revokeObjectURL(u);
      window.MiuToast && MiuToast.ok('⬇️ Configuración exportada');
    });

    // E: Importar configuración desde JSON
    const archivoImportar = document.getElementById('cfg-importar-archivo');
    document.getElementById('cfg-importar').addEventListener('click', () => archivoImportar.click());
    archivoImportar.addEventListener('change', function() {
      const file = this.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function(ev) {
        try {
          const data = JSON.parse(ev.target.result);
          if (typeof data !== 'object' || Array.isArray(data)) throw new Error('Formato inválido');
          let count = 0;
          for (const [k, v] of Object.entries(data)) {
            if (typeof v === 'string') { localStorage.setItem(k, v); count++; }
          }
          window.MiuToast && MiuToast.ok('⬆️ ' + count + ' claves importadas');
          window.mostrar('⬆️ **Configuración importada:** ' + count + ' claves restauradas desde `' + file.name + '`.\n\nRecarga la página para que todos los módulos reflejen los cambios.', 'fran');
          cerrarModal();
        } catch (err) {
          window.MiuToast && MiuToast.err('Error al importar: ' + err.message);
        }
      };
      reader.readAsText(file);
      this.value = '';
    });

    // P: Selector de temas visuales
    const btnsTema = document.querySelectorAll('.cfg-tema-btn');
    function marcarTemaActivo() {
      const actual = (document.documentElement.getAttribute('data-tema')) || 'oraculo';
      btnsTema.forEach(function (b) {
        const on = b.dataset.tema === actual;
        b.style.borderColor = on ? 'var(--dorado)' : '';
        b.style.color       = on ? 'var(--dorado)' : '';
        b.style.fontWeight  = on ? '700' : '';
      });
    }
    btnsTema.forEach(function (b) {
      b.addEventListener('click', function () {
        const t = aplicarTema(this.dataset.tema);
        marcarTemaActivo();
        window.MiuToast && MiuToast.ok('🎨 Tema: ' + (TEMAS[t] || t));
      });
    });
    marcarTemaActivo();

    // KERNEL: checkbox de razonamiento estricto MIU
    const chkKernel = document.getElementById('cfg-kernel');
    if (chkKernel) {
      chkKernel.checked = _kernelEstricto();
      chkKernel.addEventListener('change', function () {
        try { localStorage.setItem(_KERNEL_KEY, this.checked ? '1' : '0'); } catch (_) {}
        window.actualizarEcoChip && window.actualizarEcoChip();
        window.MiuToast && MiuToast.ok(this.checked ? '🧠 Razonamiento estricto activado' : '🧠 Razonamiento estricto desactivado');
      });
    }
  }

  /* ───── Worker + fallback para procesar archivos ───── */
  function _procesarConWorkerOFallback(file, maxTrozos, onProgreso) {
    return new Promise(async (res, rej) => {
      if (window.Worker) {
        let workerOK = false;
        try {
          const worker = new Worker('js/alimentar-worker.js');
          const cfgOnline = window.ModoOnline && window.ModoOnline.estaActivo()
            ? window.ModoOnline.cargar() : null;
          // Leer el archivo en el hilo principal y mandar el texto al worker
          const texto = await file.text();
          worker.postMessage({ tipo:'procesar', texto, archivo: file.name, maxTrozos, cfgOnline });
          worker.onmessage = function(e) {
            const d = e.data;
            if (d.tipo === 'progreso') { if (onProgreso) onProgreso(d.i, d.total); }
            else if (d.tipo === 'completo') { worker.terminate(); workerOK=true; res(d.pares || []); }
            else if (d.tipo === 'error')    { worker.terminate(); rej(new Error(d.mensaje)); }
          };
          worker.onerror = function(e) {
            if (!workerOK) { rej(new Error('Worker error: ' + e.message)); }
          };
          return;
        } catch(e) { console.warn('Worker no disponible, usando fallback:', e); }
      }
      // Fallback: procesamiento en hilo principal (retrocompatible)
      try {
        const r = await window.Alimentar.procesarArchivo(file, onProgreso, { maxTrozos });
        res(r.pares || []);
      } catch(e) { rej(e); }
    });
  }

  function _procesarArchivoRapido(file) {
    panelAlimentar();
    // Pequeño delay para que el modal esté en el DOM
    setTimeout(() => {
      const dt = new DataTransfer(); dt.items.add(file);
      const inp = document.getElementById('archivo-digerir');
      if (inp) { inp.files = dt.files; inp.dispatchEvent(new Event('change')); }
    }, 80);
  }

  function panelAlimentar() {
    abrirModal('🌱 Alimentar el núcleo · `/buscar <query>` búsqueda BM25 · `/stats` índice · `/visor` visor de pares · `/podar` eliminar pares negativos · `/consolidar` analizar duplicados · `/exportar-oraculo` descargar oráculo regenerado · `/colmena` abrir panel P2P', `
      <p class="tenue">Sube un archivo: .txt, .md, o .json (export de chat de ChatGPT, Claude, Gemini u otro —
      se detecta el formato solo; si no lo reconoce, igual lo lee como texto). ${window.ModoOnline.estaActivo()
        ? 'Tienes el modo en línea activado, así que se usará tu proveedor configurado para extraer pares pregunta/respuesta reales del contenido.'
        : 'Estás en modo offline: la extracción será una heurística simple (un párrafo → un par genérico), no tan buena como con modo en línea, pero funciona sin conexión.'}</p>
      <p class="tenue" style="margin-top:6px;">Se procesan como máximo ${window.Alimentar.LIMITE_TROZOS} fragmentos por archivo, para no disparar una factura de API ni tardar para siempre.</p>
      <div style="display:flex;align-items:center;gap:8px;margin-top:10px;font-size:0.8rem;">
        <label style="color:var(--texto-tenue)">Fragmentos:</label>
        <input type="number" id="alim-max-trozos" value="${window.Alimentar.LIMITE_TROZOS}" min="1" max="999"
          style="width:56px;text-align:center;background:var(--fondo);border:1px solid var(--borde);border-radius:4px;color:var(--texto);padding:2px 4px;">
        <span id="alim-est" class="tenue" style="font-size:0.72rem"></span>
      </div>
      <input type="file" id="archivo-digerir" accept=".txt,.md,.json,.jsonl,text/plain,text/markdown,application/json" style="margin-top:10px;width:100%;">
      <button class="boton-primario" id="btn-digerir" disabled>Selecciona un archivo primero</button>
      <div id="progreso-digerir" class="tenue mono" style="margin-top:10px;font-size:0.78rem;"></div>
      <div id="resultado-digerir" style="margin-top:10px;"></div>
    `);
    const inputArchivo = document.getElementById('archivo-digerir');
    const btn = document.getElementById('btn-digerir');
    inputArchivo.addEventListener('change', () => {
      const f = inputArchivo.files[0];
      btn.disabled = !f;
      btn.textContent = f ? 'Procesar ' + f.name : 'Selecciona un archivo primero';
      if (f && window.Alimentar) {
        const n = parseInt(document.getElementById('alim-max-trozos')?.value || window.Alimentar.LIMITE_TROZOS, 10);
        document.getElementById('alim-est').textContent = '· ' + window.Alimentar.estimarCosto(n);
      }
    });
    document.getElementById('alim-max-trozos')?.addEventListener('input', () => {
      if (!inputArchivo.files[0] || !window.Alimentar) return;
      const n = parseInt(document.getElementById('alim-max-trozos').value, 10) || 1;
      document.getElementById('alim-est').textContent = '· ' + window.Alimentar.estimarCosto(n);
    });
    btn.addEventListener('click', async () => {
      const file = inputArchivo.files[0];
      if (!file) return;
      btn.disabled = true; btn.textContent = 'Procesando…';
      const progreso = document.getElementById('progreso-digerir');
      const maxTrz   = parseInt(document.getElementById('alim-max-trozos')?.value || window.Alimentar.LIMITE_TROZOS, 10) || window.Alimentar.LIMITE_TROZOS;
      try {
        const pares = await _procesarConWorkerOFallback(file, maxTrz, (i, total) => {
          progreso.textContent = `⚙️ Fragmento ${i}/${total}…`;
        });
        progreso.textContent = `✅ ${pares.length} par(es) extraídos de ${file.name}`;
        window.MiuToast && MiuToast.ok('✅ ' + pares.length + ' pares aprendidos de ' + file.name);
        renderRevision(pares);
      } catch (e) {
        console.error(e);
        progreso.textContent = '⚠️ ' + (e.message || 'No se pudo procesar el archivo.');
        btn.disabled = false; btn.textContent = 'Reintentar';
      }
    });
  }

  function renderRevision(pares) {
    const cont = document.getElementById('resultado-digerir');
    if (!pares.length) { cont.innerHTML = '<p class="tenue">No se extrajo ningún par utilizable de este archivo.</p>'; return; }
    cont.innerHTML = `
      <p class="eyebrow">Revisa antes de guardar (desmarca lo que no sirva)</p>
      <div id="lista-revision" style="display:flex;flex-direction:column;gap:8px;max-height:240px;overflow-y:auto;">
        ${pares.map((p, i) => `
          <label style="display:flex;gap:8px;align-items:flex-start;font-size:0.8rem;border:1px solid var(--borde);border-radius:8px;padding:8px;">
            <input type="checkbox" data-i="${i}" checked style="margin-top:3px;">
            <span><strong>${p.q.replace(/</g,'&lt;')}</strong><br><span class="tenue">${p.a.replace(/</g,'&lt;').slice(0,160)}${p.a.length>160?'…':''}</span></span>
          </label>`).join('')}
      </div>
      <button class="boton-primario" id="btn-guardar-digerido">Guardar selección en el oráculo</button>
    `;
    document.getElementById('btn-guardar-digerido').addEventListener('click', () => {
      const seleccionados = Array.from(document.querySelectorAll('#lista-revision input:checked'))
        .map(chk => pares[+chk.dataset.i]);
      const r = core.digerirConocimiento(seleccionados, seleccionados[0]?.origen);
      _statInc(_STAT.pares, r.agregados || 0); // Q: contar pares realmente aprendidos
      window.actualizarKiPill();
      window.mostrar(`🌱 Incorporé ${r.agregados} par(es) nuevos al oráculo (total aprendido: ${r.total}).`, 'fran');
      // T: SUBFLOW Jaccard — pares ya digeridos (Jaccard>0.85). Advisory: sugiere podar, no bloquea.
      if (r.duplicadosSemanticos > 0) {
        const det = (r.duplicados || [])
          .map(d => `“${d.q.slice(0, 48)}${d.q.length > 48 ? '…' : ''}” (${d.sim.toFixed(2)})`).join(', ');
        console.log(`🟡 SUBFLOW: ${r.duplicadosSemanticos} par(es) Jaccard>0.85 no reingeridos → ${det}`);
        _subflowInc(r.duplicadosSemanticos);
        window.mostrar(
          `🟡 _SUBFLOW:_ ${r.duplicadosSemanticos} par(es) ya estaban digeridos (Jaccard > 0.85), no los reingerí para no inflar el ruido. ` +
          'Sugerencia: usa `/podar` para limpiar duplicados antiguos. _(Sugiero, no bloqueo.)_', 'fran');
      }
      // W: verificación OPCIONAL de DOIs en lo ingerido (híbrido: online verifica, offline avisa).
      try {
        if (window.VerificadorDOI) {
          const corpus = seleccionados.map(p => (p.q || '') + ' ' + (p.a || '')).join(' ');
          const dois = window.VerificadorDOI.extraer(corpus);
          if (dois.length) {
            if (window.VerificadorDOI.disponible()) {
              window.mostrar(`🔗 _Verificador:_ ${dois.length} DOI detectado(s) — verificando contra Crossref…`, 'fran');
              window.VerificadorDOI.verificarTexto(corpus).then(({ resultados }) => {
                const okN = resultados.filter(r => r.ok).length;
                const lin = resultados.map(r => r.ok
                  ? `✅ ${r.doi} — ${(r.titulo || '').slice(0, 60)}`
                  : `⚠️ ${r.doi} — ${r.error || 'no verificado'}`).join('\n');
                window.mostrar(`🔗 _Verificador DOI (${okN}/${resultados.length} confirmados en Crossref):_\n${lin}`, 'fran');
              });
            } else {
              window.mostrar(`🔗 _Verificador:_ ${dois.length} DOI detectado(s). La verificación es opcional (online) — conéctate y usa \`/doi\`. _(Offline: ingiero igual, no bloqueo.)_`, 'fran');
            }
          }
        }
      } catch (_) {}
      _termostatoAdvertir(); // S: advisory de coherencia tras ingerir
      cerrarModal();
    });
  }

  function panelJardinero() {
    const huesos = core.contarHuesos();
    const inv = core.estado.invariantes || {};
    abrirModal('🛠️ Panel del jardinero', `
      <p class="tenue">Herramientas de mantenimiento del nodo — pensadas para preparar una demo o una
      línea base antes de subir el sitio, no para fingir uso real frente a otras personas.</p>
      <table class="tabla-diag" style="margin-top:10px;">
        <tr><td>Huesos (interacciones registradas)</td><td class="mono dorado">${huesos}</td></tr>
        <tr><td>Ki</td><td class="mono">${inv.Ki?.toFixed(4) ?? '—'}</td></tr>
        <tr><td>D_f</td><td class="mono">${inv.D_f?.toFixed(4) ?? '—'}</td></tr>
        <tr><td>nivel_coherencia</td><td class="mono">${(core.estado.indicadores?.nivel_coherencia ?? 0.5).toFixed(3)}</td></tr>
      </table>

      <p class="eyebrow">Añadir huesos sintéticos</p>
      <input type="number" id="jard-huesos" min="0" max="2000" value="50">
      <button class="boton-secundario" id="jard-btn-huesos">Añadir</button>

      <p class="eyebrow">Fijar nivel de coherencia (0–1)</p>
      <input type="number" id="jard-nivel" min="0" max="1" step="0.01" value="${(core.estado.indicadores?.nivel_coherencia ?? 0.5).toFixed(2)}">
      <button class="boton-secundario" id="jard-btn-nivel">Aplicar</button>

      <p class="eyebrow">Antes de subir a GitHub</p>
      <button class="boton-secundario" id="jard-btn-linea-base">Generar línea base para pegar en core.js</button>
      <button class="boton-secundario" id="jard-btn-exportar-oraculo">Descargar oraculo-data.js actualizado</button>
      <textarea id="jard-salida" readonly style="display:none;width:100%;height:140px;margin-top:8px;font-family:var(--mono);font-size:0.72rem;background:var(--superficie-2);border:1px solid var(--borde);border-radius:8px;padding:8px;"></textarea>
    `);

    document.getElementById('jard-btn-huesos').addEventListener('click', () => {
      const n = +document.getElementById('jard-huesos').value || 0;
      const total = core.agregarHuesosSinteticos(n, '(hueso sintético — panel del jardinero)');
      window.mostrar(`🦴 Huesos ahora: ${total}.`, 'fran');
      cerrarModal();
    });
    document.getElementById('jard-btn-nivel').addEventListener('click', () => {
      const n = document.getElementById('jard-nivel').value;
      if (core.establecerNivelCoherencia(n)) {
        window.actualizarKiPill();
        window.mostrar(`🌿 nivel_coherencia fijado en ${(+n).toFixed(2)}. Ki recalculado.`, 'fran');
        cerrarModal();
      }
    });
    document.getElementById('jard-btn-linea-base').addEventListener('click', () => {
      const salida = document.getElementById('jard-salida');
      salida.style.display = 'block';
      salida.value =
        '// Pega este objeto como valor de retorno del fallback en core.js → _cargarEstado(),\n' +
        '// antes del `return {` original, y haz que ese return use este objeto. Así un\n' +
        '// visitante nuevo en GitHub Pages arranca desde esta línea base en vez de cero.\n' +
        core.generarLineaBase();
      salida.select();
    });
    document.getElementById('jard-btn-exportar-oraculo').addEventListener('click', () => {
      if (typeof BuscarOraculo === 'undefined' || !BuscarOraculo._motor) {
        window.mostrar('⚠️ El oráculo no está cargado todavía.', 'fran'); return;
      }
      const datos = JSON.stringify(BuscarOraculo._motor);
      const b64 = btoa(unescape(encodeURIComponent(datos)));
      const contenido = `window.ORACULO_BASE64 = "${b64}";\n`;
      const blob = new Blob([contenido], { type: 'text/javascript' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'oraculo-data.js';
      a.click();
      window.mostrar(`💾 Descargado oraculo-data.js con ${BuscarOraculo._motor.pares.length} pares (originales + aprendidos). Reemplaza el archivo en tu repo antes de subir.`, 'fran');
    });
  }

  document.querySelectorAll('[data-panel]').forEach(btn => {
    btn.addEventListener('click', () => {
      cerrarSidebarMovil();
      const tipo = btn.dataset.panel;
      if (tipo === 'diagnostico') panelDiagnostico();
      else if (tipo === 'codice') panelCodice();
      else if (tipo === 'contexto') panelContexto();
      else if (tipo === 'acerca') panelAcerca();
      else if (tipo === 'alimentar') panelAlimentar();
      else if (tipo === 'jardinero') panelJardinero();
    });
  });
  document.getElementById('btn-config').addEventListener('click', () => { cerrarSidebarMovil(); panelConfig(); });

  /* ───────────────────────── Modo espejo (toggle) ───────────────────────── */
  document.getElementById('btn-espejo').addEventListener('click', function () {
    const activo = window.ModoEspejo.toggle();
    this.textContent = activo ? '🪞 Modo espejo: encendido' : '🪞 Modo espejo: apagado';
    window.mostrar(activo ? '✅ Modo espejo activado: adapto el tono a como me hables.' : '❌ Modo espejo desactivado.', 'fran');
    cerrarSidebarMovil();
  });

  /* ───────────────────────── Exportar / importar alma ───────────────────────── */
  document.getElementById('btn-exportar').addEventListener('click', () => {
    const nap = {
      alma_version: '1.0',
      exportado: new Date().toISOString(),
      identidad: { nombre: 'Micelio MIU', almaActiva: core.almaActiva },
      estado: core.estado
    };
    const blob = new Blob([JSON.stringify(nap, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `micelio-miu-alma-${Date.now()}.json`;
    a.click();
    cerrarSidebarMovil();
  });
  document.getElementById('btn-importar').addEventListener('click', () => {
    document.getElementById('archivo-alma').click();
    cerrarSidebarMovil();
  });
  document.getElementById('archivo-alma').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      let nap;
      try { nap = JSON.parse(reader.result); }
      catch (err) { window.mostrar('⚠️ No pude leer ese archivo.', 'fran'); return; }
      if (!nap.estado) { window.mostrar('⚠️ Ese archivo no tiene el formato esperado.', 'fran'); return; }

      const fuente = nap.identidad?.nombre || 'esa alma';
      const nPares = Array.isArray(nap.estado.oraculo_extension) ? nap.estado.oraculo_extension.length : 0;
      const nHuesos = Array.isArray(nap.estado.historial) ? nap.estado.historial.length : 0;

      abrirModal('📥 Importar alma', `
        <p class="tenue">El archivo trae ${nPares} par(es) aprendido(s) y ${nHuesos} hueso(s) de "${fuente}".
        Elige cómo incorporarlo:</p>
        <button class="boton-primario" id="btn-fusionar" style="margin-top:10px;width:100%;">
          🌱 Fusionar — sumar a lo que ya tengo (recomendado)
        </button>
        <p class="tenue" style="margin-top:4px;">Combina lo nuevo con tu progreso actual; lo duplicado se descarta solo.</p>
        <button class="boton-secundario" id="btn-reemplazar" style="margin-top:14px;width:100%;">
          ♻️ Reemplazar — empezar de cero con esta alma
        </button>
        <p class="tenue" style="margin-top:4px;">Borra tu progreso actual y deja el estado tal cual venía en el archivo.</p>
      `);

      document.getElementById('btn-fusionar').addEventListener('click', () => {
        const r = core.fusionarAlma(nap);
        if (!r.ok) { window.mostrar('⚠️ ' + r.motivo, 'fran'); cerrarModal(); return; }
        window.actualizarKiPill();
        window.mostrar(`🌱 Fusioné "${r.fuente}": +${r.paresFusionados} par(es) nuevos (${r.totalPares} en total), +${r.huesosImportados} hueso(s) (${r.totalHuesos} en total). Lo tuyo no se perdió.`, 'fran');
        cerrarModal();
      });
      document.getElementById('btn-reemplazar').addEventListener('click', () => {
        core.estado = nap.estado;
        if (nap.identidad?.almaActiva && core.almas[nap.identidad.almaActiva]) core.almaActiva = nap.identidad.almaActiva;
        core._guardarEstado();
        core._recalcularKi();
        if (typeof BuscarOraculo !== 'undefined' && Array.isArray(core.estado.oraculo_extension)) {
          BuscarOraculo.agregarPares(core.estado.oraculo_extension);
        }
        actualizarPersonaHeader();
        window.actualizarKiPill();
        window.mostrar('📥 Alma importada correctamente (reemplazo completo).', 'fran');
        cerrarModal();
      });
    };
    reader.readAsText(file);
  });

  /* ───────────────────────── Comandos ───────────────────────── */
  function comandoAyuda() {
    return `**Comandos:**\n` +
      `\`/ki\` — estado MIU actual (D_f, Ki, f, Ki⁻, banda)\n` +
      `\`/bea\` — ejecutar un ciclo de evolución (BEA)\n` +
      `\`/axioma A15\` — consultar axioma, ecuación o predicción por ID\n` +
      `\`/coherencia\` — calculadora de coherencia personal (3 preguntas)\n` +
      `\`/contexto\` — ver el panel de contexto (imperio, ley Gaia)\n` +
      `\`/espejo\` — activar/desactivar el modo espejo\n` +
      `\`/buscar <texto>\` — búsqueda BM25 directa en el oráculo\n` +
      `\`/rag [valor]\` — consulta o cambia el umbral RAG (0.10–0.70)\n` +
      `\`/config\` — resumen del estado actual (modo, alma, espejo, RAG)\n` +
      `\`/config export\` — copiar resumen de config al portapapeles\n` +
      `\`/uso\` — estadísticas de uso (mensajes, pares, BEAs, tiempo)\n` +
      `\`/kernel\` — ver el KERNEL MIU · \`/kernel on\` razonamiento estricto\n` +
      `\`/eco\` — evaluador de coherencia (SÉ/INFIERO/CONJETURO/NO SÉ)\n` +
      `\`/termostato\` — banda de resiliencia: estado de coherencia y qué hacer\n` +
      `\`/panel\` — dashboard de coherencia (K_i, historial, subflow, uso)\n` +
      `\`/doi\` — verificar una fuente (DOI) contra Crossref _(online opcional)_\n` +
      `\`/ayuda\` — esta lista\n\n` +
      `**Atajos de teclado:** \`Ctrl+K\` foco en el input · \`Ctrl+/\` ayuda · \`Ctrl+Shift+E\` panel ⚙️`;
  }

  function comandoKi() {
    const inv = core.estado.invariantes || {};
    const b = window.MIU ? window.MIU.banda(inv.Ki_neg ?? 0) : { emoji: '?', nombre: '?', desc: '' };
    return `🌿 **Estado MIU actual**\n\n` +
      `• D_f: \`${inv.D_f?.toFixed(4) ?? '—'}\`\n` +
      `• Ki: \`${inv.Ki?.toFixed(4) ?? '—'}\`\n` +
      `• f: \`${inv.f?.toFixed(4) ?? '—'}\`\n` +
      `• Ki⁻: \`${inv.Ki_neg?.toFixed(4) ?? '—'}\`\n\n` +
      `${b.emoji} **${b.nombre}** — ${b.desc}`;
  }

  function comandoBea() {
    const informe = core.sonar();
    window.actualizarKiPill();
    if (window.Conciencia) window.Conciencia.registrarSueno();
    if (!informe) return '🍂 El motor MIU no está disponible ahora mismo.';
    _statInc(_STAT.bea); // Q: contar ciclo BEA completado
    return `🔄 **Ciclo BEA completado**\n\n` +
      `• Nodos evaluados: ${informe.evaluados}\n` +
      `• Podados (Ki⁻<0.3): ${informe.podados.length}\n` +
      `• Mutaciones aplicadas: ${informe.mutaciones.length}\n` +
      `• Ki⁻ antes → después: \`${informe.ki_antes}\` → \`${informe.ki_despues}\`\n\n` +
      (informe.ki_despues > informe.ki_antes ? '🌱 El jardín ha crecido.' : '🍂 El campo necesita más conversación para evolucionar.');
  }

  function comandoAxioma(txt) {
    const partes = txt.trim().split(/\s+/);
    const idBusq = (partes[1] || '').toUpperCase();
    if (!window.MIU) return '⚠️ Motor MIU no disponible.';
    if (!idBusq) {
      const lista = window.MIU.AXIOMAS.map(a => a.id).join(', ') + ', ' + window.MIU.ECUACIONES.map(e => e.id).join(', ');
      return `Usa \`/axioma ID\`. IDs disponibles: ${lista}`;
    }
    const ax = window.MIU.AXIOMAS.find(a => a.id === idBusq) || window.MIU.ECUACIONES.find(e => e.id === idBusq) || window.MIU.PREDICCIONES.find(p => p.id === idBusq);
    return ax ? `**[${ax.id}]**${ax.formula ? ' `' + ax.formula + '`' : ''}\n${ax.desc}` : `No encontré "${idBusq}".`;
  }

  // Flujo guiado de /coherencia (CCP-01): 3 preguntas secuenciales
  let flujoPendiente = null;
  function comandoCoherencia() {
    flujoPendiente = { paso: 0, valores: {} };
    return '🧮 **Calculadora de Coherencia Personal**\nDel 0 al 10, ¿qué tan claro tienes hoy tu estado **cognitivo** (mente)?';
  }
  function avanzarFlujo(txt) {
    const n = parseFloat(txt.replace(',', '.'));
    if (isNaN(n) || n < 0 || n > 10) { window.mostrar('Dame un número del 0 al 10, por favor.', 'fran'); return true; }
    if (flujoPendiente.paso === 0) {
      flujoPendiente.valores.cog = n; flujoPendiente.paso = 1;
      window.mostrar('¿Y tu estado **emocional**? (0–10)', 'fran'); return true;
    }
    if (flujoPendiente.paso === 1) {
      flujoPendiente.valores.emoc = n; flujoPendiente.paso = 2;
      window.mostrar('¿Y tu estado **conductual** — qué tan alineadas están tus acciones con lo que quieres? (0–10)', 'fran'); return true;
    }
    if (flujoPendiente.paso === 2) {
      flujoPendiente.valores.cond = n;
      const r = window.MIU.ccp01(flujoPendiente.valores.cog, flujoPendiente.valores.emoc, flujoPendiente.valores.cond);
      flujoPendiente = null;
      window.mostrar(
        `**Resultado CCP-01**\n\n` +
        `• D_f: \`${r.D_f.toFixed(4)}\`\n• Ki: \`${r.Ki.toFixed(4)}\`\n• Ki⁻: \`${r.KiNeg.toFixed(4)}\`\n\n` +
        `${r.banda.emoji} **${r.banda.nombre}** — ${r.banda.desc}`, 'fran');
      return true;
    }
    return false;
  }

  // M: /config — resumen del estado de configuración actual
  function _enmascararClave(clave) {
    if (!clave) return null;
    if (clave.length <= 7) return '•'.repeat(clave.length);
    return clave.slice(0, 3) + '•'.repeat(4) + clave.slice(-4);
  }
  function comandoConfig() {
    window.ModoOnline.cargar(); // refresca _proveedor/_clave/_modelo desde localStorage
    const mo = window.ModoOnline;
    const online = mo.estaActivo();
    const provId = mo._proveedor || null;
    const preset = provId ? mo.PROVEEDORES[provId] : null;

    let lineaModo;
    if (!online) {
      lineaModo = '🔌 **Offline** — solo núcleo local (oráculo + axiomas)';
    } else if (provId === 'webllm') {
      lineaModo = '🖥️ **Online · WebLLM** (modelo corriendo en tu navegador)';
    } else if (provId === 'personalizado') {
      lineaModo = `🌐 **Online · Personalizado** — \`${mo._url || '—'}\``;
    } else {
      lineaModo = `🌐 **Online · ${preset?.nombre || provId}**`;
    }

    const requiereClave = preset?.requiereClave;
    const claveLinea = (online && provId !== 'webllm' && requiereClave)
      ? `• Clave: \`${_enmascararClave(mo._clave) || 'no configurada'}\`\n`
      : '';

    const alma = core.almas[core.almaActiva];
    const nombreAlma = alma?.nombre || core.almaActiva;
    const espejo = window.ModoEspejo ? window.ModoEspejo.estaActivo() : false;
    const umbral = parseFloat(localStorage.getItem(_RAG_UMBRAL_KEY) || '0.3');
    const stOraculo = window.BuscarOraculo ? window.BuscarOraculo.stats() : null;

    return `**⚙️ Estado de configuración**\n\n` +
      `${lineaModo}\n` +
      claveLinea +
      `• Alma activa: **${nombreAlma}**\n` +
      `• Modo espejo: ${espejo ? '✅ activo' : '❌ inactivo'}\n` +
      `• Umbral RAG: \`${umbral.toFixed(2)}\` _(cambiar: \`/rag 0.40\`)_\n` +
      `• Memoria de conversación: ${mo.MAX_TURNOS} turnos\n` +
      (stOraculo ? `• Oráculo: ${stOraculo.totalPares} pares indexados\n` : '') +
      `\nUsa \`/ayuda\` para ver todos los comandos.`;
  }

  // Q: /uso — estadísticas de uso acumuladas + tiempo de la sesión actual
  function _formatDuracion(ms) {
    const seg = Math.max(0, Math.floor(ms / 1000));
    const h = Math.floor(seg / 3600);
    const m = Math.floor((seg % 3600) / 60);
    const s = seg % 60;
    if (h > 0) return `${h}h ${m}m`;
    if (m > 0) return `${m}m ${s}s`;
    return `${s}s`;
  }
  function comandoUso() {
    let inicio = Date.now();
    try { inicio = parseInt(sessionStorage.getItem('fran_sesion_inicio') || String(Date.now()), 10); } catch (_) {}
    const dur = _formatDuracion(Date.now() - inicio);
    return `📈 **Estadísticas de uso**\n\n` +
      `• Mensajes enviados: **${_statGet(_STAT.msgs)}**\n` +
      `• Pares aprendidos: **${_statGet(_STAT.pares)}**\n` +
      `• Ciclos BEA ejecutados: **${_statGet(_STAT.bea)}**\n` +
      `• SUBFLOW: **${_subflowGet()}** duplicado(s) evitado(s) hoy\n` +
      `• Tiempo de esta sesión: **${dur}**\n\n` +
      `_Los contadores persisten en este navegador; el tiempo se reinicia al cerrar la pestaña._`;
  }

  // KERNEL: /kernel — muestra la semilla inmutable; /kernel on|off — modo razonamiento estricto
  function comandoKernel(arg) {
    const a = (arg || '').trim().toLowerCase();
    const chk = document.getElementById('cfg-kernel');
    if (a === 'on' || a === 'activar' || a === 'estricto') {
      try { localStorage.setItem(_KERNEL_KEY, '1'); } catch (_) {}
      if (chk) chk.checked = true;
      window.actualizarEcoChip && window.actualizarEcoChip();
      return '🧠 **Razonamiento estricto MIU: ACTIVADO**\nAl usar un modelo externo seguirá el método de 5 pasos y declarará SÉ/INFIERO/CONJETURO/NO SÉ. El `KERNEL.json` nunca se envía fuera.';
    }
    if (a === 'off' || a === 'desactivar') {
      try { localStorage.setItem(_KERNEL_KEY, '0'); } catch (_) {}
      if (chk) chk.checked = false;
      window.actualizarEcoChip && window.actualizarEcoChip();
      return '🧠 **Razonamiento estricto MIU: DESACTIVADO**\nLos modelos externos responderán con la voz del alma activa, sin el método impuesto.';
    }
    const estado = _kernelEstricto() ? '✅ activo' : '❌ inactivo';
    return `🧬 **KERNEL · ${KERNEL.identidad}** _(inmutable)_\n\n` +
      `**Propósito:** ${KERNEL.proposito}\n\n` +
      `**Método de razonamiento:**\n` +
      KERNEL.metodo.map((m, i) => `${i + 1}. ${m}`).join('\n') + '\n\n' +
      `**Restricciones:**\n` +
      KERNEL.restricciones.map(r => `• ${r}`).join('\n') + '\n\n' +
      `**Métricas:** Kᵢ saludable \`0.55–0.62\` (atractor Φ_c=0.6829322) · Kᵢ⁻<0.3 → ciclo BEA _(ver \`/ki\`)_\n\n` +
      `**Razonamiento estricto:** ${estado} _(cambiar: \`/kernel on\` · \`/kernel off\`)_`;
  }

  // V: /eco — evaluador de coherencia sobre las últimas respuestas del núcleo
  function _ultimasRespuestas(n) {
    try {
      const raw = sessionStorage.getItem(_CHAT_SS_KEY);
      const arr = raw ? JSON.parse(raw) : [];
      return arr.filter(b => b.rol === 'fran').slice(-(n || 10)).map(b => b.texto);
    } catch (_) { return []; }
  }
  function comandoEco() {
    if (!window.Eco) return '⚠️ Módulo Eco (evaluador) no disponible.';
    const textos = _ultimasRespuestas(10);
    if (!textos.length) return '🔎 No hay respuestas en esta sesión para evaluar todavía.';
    const d = window.Eco.evaluar(textos);
    if (!d.evaluables) {
      return `🔎 **Evaluador de coherencia**\n\n${d.recomendacion}`;
    }
    // Y: sparkline + tendencia del historial de K_i
    let extra = '';
    const hist = _ecoHistorial();
    if (window.Eco.sparkline && hist.length >= 2) {
      const spark = window.Eco.sparkline(hist);
      const prom = hist.reduce((a, b) => a + b, 0) / hist.length;
      const min = Math.min(...hist), max = Math.max(...hist);
      const tend = hist[hist.length - 1] >= prom ? '↗︎ al alza' : '↘︎ a la baja';
      extra = `\n\n**Historial K_i** _(${hist.length} pts)_\n\`${spark}\`\n` +
        `• Promedio: \`${prom.toFixed(3)}\` · min \`${min.toFixed(2)}\` · max \`${max.toFixed(2)}\` · ${tend}\n` +
        `_(\`/eco reset\` para limpiar el historial)_`;
    }
    return `🔎 **Evaluador de coherencia** _(últimas ${textos.length} respuestas)_\n\n` +
      `• SÉ: **${d.se}** · INFIERO: **${d.infiero}** · CONJETURO: **${d.conjeturo}** · NO SÉ: **${d.nose}**\n` +
      `• Conjetura: \`${(d.pctConjeturo * 100).toFixed(0)}%\` ${d.pctConjeturo > 0.30 ? '⚠️ (>30%)' : '✓'}\n` +
      `• K_i aproximado: \`${d.kiAprox.toFixed(4)}\` — ${d.banda}\n\n` +
      `${d.recomendacion}` + extra;
  }

  /* ── S: Termóstato de coherencia (banda de resiliencia operativa) ───────
   * Digestión Gumloop · TÉCNICA 3. Traduce el "budget/quota control" a control
   * por COHERENCIA: lee el K_i del motor MIU y clasifica el estado operativo
   * en una banda objetivo [0.55, 0.62] (atractor Φ_c≈0.683). Es advisory: NO
   * bloquea nada (Human-in-the-loop = gradiente que sugiere, no que colapsa). */
  function _kiGlobal() {
    const inv = core.estado.invariantes || {};
    return (typeof inv.Ki === 'number') ? inv.Ki : null;
  }
  function comandoTermostato() {
    const ki = _kiGlobal();
    if (ki == null) return '🌡️ Termóstato no disponible (el motor MIU aún no reporta K_i). Conversa un poco y vuelve a intentar.';
    let emoji, estado, accion;
    if (ki < 0.55) {
      emoji = '🔵'; estado = 'contracción';
      accion = 'K_i bajo la banda. Antes de ingerir más conocimiento: ejecuta `/consolidar` (fusiona duplicados) y `/podar` (quita pares de bajo peso). Menos nodos, mayor coherencia.';
    } else if (ki <= 0.62) {
      emoji = '🟢'; estado = 'banda saludable';
      accion = 'Operación normal: ingesta moderada permitida. El jardín está en equilibrio.';
    } else {
      emoji = '⚡'; estado = 'pico';
      accion = 'Coherencia en pico: el sistema admite ingesta agresiva. Buen momento para alimentar el oráculo.';
    }
    // Anexar la señal epistémica de Eco si hay historial
    let ecoLinea = '';
    try {
      const hist = _ecoHistorial();
      if (hist.length) ecoLinea = `• K_i epistémico (Eco): \`${hist[hist.length - 1].toFixed(3)}\`\n`;
    } catch (_) {}
    // T: anexar el contador del subflow Jaccard (duplicados evitados hoy)
    const subflowLinea = `• SUBFLOW (Jaccard>0.85): \`${_subflowGet()}\` duplicado(s) evitado(s) hoy\n`;
    return `🌡️ **Termóstato de coherencia**\n\n` +
      `• K_i del motor: \`${ki.toFixed(4)}\`\n` +
      ecoLinea +
      `• Banda objetivo: \`0.55–0.62\` _(Φ_c=0.6829322)_\n` +
      subflowLinea +
      `• Estado: ${emoji} **${estado}**\n\n` +
      accion;
  }
  // Advisory no intrusivo tras ingerir: si la coherencia cae bajo la banda, sugiere acción.
  function _termostatoAdvertir() {
    const ki = _kiGlobal();
    if (ki != null && ki < 0.55) {
      window.mostrar('🌡️ _Termóstato:_ la coherencia bajó a `' + ki.toFixed(3) + '` (banda 0.55–0.62). Considera `/consolidar` y `/podar` antes de seguir ingiriendo. Usa `/termostato` para el detalle.', 'fran');
    }
  }

  /* ── U: Panel de Coherencia (dashboard integrado) ───────────────────────
   * Digestión Ciclo U · adaptación del "Dashboard de Coherencia en Tiempo Real"
   * (Módulo 4 del blueprint) SIN fragmentar: un panel modal in-app que reutiliza
   * abrirModal() y consolida señales que YA EXISTEN — termóstato (_kiGlobal),
   * Eco (_ecoHistorial), subflow (_subflowGet), stats (_statGet). El gráfico es
   * SVG inline generado en local: 0 dependencias externas, 0 Chart.js/CDN,
   * 0 archivos nuevos → 100% offline, sin fragmentar el árbol del nodo. */
  function _svgKiHistorial(hist) {
    if (!hist || hist.length < 2) {
      return '<p class="tenue" style="margin:8px 0;">Aún no hay suficientes puntos de K_i. Conversa un poco y vuelve a abrir el panel.</p>';
    }
    const W = 320, H = 92, pad = 6, lo = 0.40, hi = 0.80; // escala fija centrada en la banda
    const x = i => pad + (i * (W - 2 * pad)) / (hist.length - 1);
    const y = v => H - pad - ((Math.max(lo, Math.min(hi, v)) - lo) / (hi - lo)) * (H - 2 * pad);
    const pts = hist.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(' ');
    const ult = hist[hist.length - 1];
    const colUlt = ult < 0.55 ? '#e0a458' : (ult > 0.62 ? '#6fa8dc' : '#5fb37a');
    return `
      <svg viewBox="0 0 ${W} ${H}" width="100%" preserveAspectRatio="none" role="img" aria-label="Historial de K_i"
           style="border:1px solid var(--borde);border-radius:8px;background:rgba(127,127,127,.06);">
        <rect x="${pad}" y="${y(0.62).toFixed(1)}" width="${W - 2 * pad}" height="${(y(0.55) - y(0.62)).toFixed(1)}" fill="rgba(95,179,122,.14)"/>
        <line x1="${pad}" x2="${W - pad}" y1="${y(0.55).toFixed(1)}" y2="${y(0.55).toFixed(1)}" stroke="#5fb37a" stroke-width="0.7" stroke-dasharray="3 3"/>
        <line x1="${pad}" x2="${W - pad}" y1="${y(0.62).toFixed(1)}" y2="${y(0.62).toFixed(1)}" stroke="#5fb37a" stroke-width="0.7" stroke-dasharray="3 3"/>
        <polyline points="${pts}" fill="none" stroke="var(--acento,#8a7765)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/>
        <circle cx="${x(hist.length - 1).toFixed(1)}" cy="${y(ult).toFixed(1)}" r="2.8" fill="${colUlt}"/>
      </svg>`;
  }
  function panelCoherencia() {
    const ki = _kiGlobal();
    const hist = _ecoHistorial();
    const ecoUlt = hist.length ? hist[hist.length - 1] : null;
    const prom = hist.length ? hist.reduce((a, b) => a + b, 0) / hist.length : null;
    let emoji = '⚪', estado = 'sin dato aún', consejo = 'Conversa un poco para que el motor reporte K_i.';
    if (ki != null) {
      if (ki < 0.55) { emoji = '🔵'; estado = 'contracción'; consejo = '🔵 Coherencia bajo banda: considera <code>/consolidar</code> + <code>/podar</code> antes de ingerir.'; }
      else if (ki <= 0.62) { emoji = '🟢'; estado = 'banda saludable'; consejo = '🟢 Jardín en equilibrio: ingesta moderada permitida.'; }
      else { emoji = '⚡'; estado = 'pico'; consejo = '⚡ Pico de coherencia: buen momento para alimentar el oráculo.'; }
    }
    const html = `
      <p class="eyebrow">Termóstato de coherencia</p>
      <table class="tabla-diag" style="margin-bottom:12px;">
        <tr><td>K_i del motor MIU</td><td class="mono dorado">${ki != null ? ki.toFixed(4) : '—'}</td></tr>
        <tr><td>Estado operativo</td><td class="mono">${emoji} ${estado}</td></tr>
        <tr><td>Banda objetivo</td><td class="mono">0.55 – 0.62 <span class="tenue">(Φ_c≈0.683)</span></td></tr>
        <tr><td>K_i epistémico (Eco)</td><td class="mono">${ecoUlt != null ? ecoUlt.toFixed(3) : '—'}</td></tr>
        <tr><td>K_i Eco promedio</td><td class="mono">${prom != null ? prom.toFixed(3) : '—'}</td></tr>
        <tr><td>🟡 SUBFLOW evitados hoy</td><td class="mono dorado">${_subflowGet()}</td></tr>
      </table>
      <p class="eyebrow">Historial de coherencia K_i <span class="tenue">(${hist.length} pts · banda sombreada)</span></p>
      ${_svgKiHistorial(hist)}
      <p class="eyebrow" style="margin-top:12px;">Uso del nodo</p>
      <table class="tabla-diag">
        <tr><td>Mensajes enviados</td><td class="mono">${_statGet(_STAT.msgs)}</td></tr>
        <tr><td>Pares aprendidos</td><td class="mono">${_statGet(_STAT.pares)}</td></tr>
        <tr><td>Ciclos BEA</td><td class="mono">${_statGet(_STAT.bea)}</td></tr>
      </table>
      <p class="tenue" style="margin-top:12px;">${consejo} <em>Advisory — no bloquea.</em></p>`;
    abrirModal('📊 Panel de Coherencia', html);
    return null;
  }

  /* ── W: Verificador DOI (Crossref) — formato de salida ──────────────────── */
  function _formatDOI(res) {
    if (!res) return '🔗 Sin resultado.';
    if (res.ok) {
      const aut = (res.autores && res.autores.length)
        ? res.autores.join(', ') + (res.autores.length >= 3 ? ' et al.' : '') : '—';
      return `✅ **DOI verificado** \`${res.doi}\`\n` +
        `• Título: ${res.titulo}\n• Autores: ${aut}\n• Año: ${res.anio || '—'}\n• ${res.url}\n\n` +
        `_Fuente confirmada en Crossref — coherencia epistémica reforzada._`;
    }
    if (res.offline) return `🔗 \`${res.doi}\` — sin conexión. La verificación DOI es opcional (online). Conéctate y reintenta con \`/doi\`.`;
    return `⚠️ \`${res.doi}\` — ${res.error}. _(No bloquea; revisa la fuente manualmente.)_`;
  }

  /* ───────────────────────── Envío de mensajes ───────────────────────── */
  window.enviarMensaje = async function () {
    const txt = entrada.value.trim();
    if (!txt) return;
    _statInc(_STAT.msgs); // Q: contar mensaje enviado
    // V: auto-evaluación de coherencia cada 10 mensajes (solo en modo estricto MIU)
    if (_kernelEstricto() && _statGet(_STAT.msgs) % 10 === 0) {
      setTimeout(function () {
        try {
          if (!window.Eco) return;
          const d = window.Eco.evaluar(_ultimasRespuestas(10));
          if (d.evaluables && (d.alerta || d.pctConjeturo > 0.30)) {
            window.MiuToast && MiuToast.info('🔎 Eco: K_i≈' + d.kiAprox.toFixed(2) + ' ' + d.banda + ' · usa /eco', 4000);
          }
        } catch (_) {}
      }, 600);
    }

    if (flujoPendiente) {
      window.mostrar(txt, 'user'); entrada.value = ''; entrada.focus({ preventScroll: true });
      ultimoMensajeUsuario = txt;
      avanzarFlujo(txt);
      return;
    }

    const cmd = txt.toLowerCase();
    const comandos = {
      '/ayuda': comandoAyuda, '/help': comandoAyuda,
      '/ki': comandoKi, '/estado': comandoKi,
      '/bea': comandoBea,
      '/coherencia': comandoCoherencia, '/ccp': comandoCoherencia,
      '/config': comandoConfig, '/cfg': comandoConfig,
      '/uso': comandoUso, '/estadisticas': comandoUso, '/stats-uso': comandoUso,
      '/termostato': comandoTermostato, '/resiliencia': comandoTermostato, '/banda': comandoTermostato,
      '/panel': () => { panelCoherencia(); return null; }, '/dashboard': () => { panelCoherencia(); return null; }, '/coherencia-panel': () => { panelCoherencia(); return null; },
      '/contexto': () => { panelContexto(); return null; },
      '/espejo': () => { document.getElementById('btn-espejo').click(); return null; },
    };
    if (comandos[cmd] || cmd.startsWith('/axioma')) {
      window.mostrar(txt, 'user'); entrada.value = ''; entrada.focus({ preventScroll: true });
      const resp = cmd.startsWith('/axioma') ? comandoAxioma(txt) : comandos[cmd]();
      if (resp) window.mostrar(resp, 'fran');
      return;
    }

    // ── Comandos extendidos v10 ──────────────────────────────────────────────
    if (cmd.startsWith('/buscar ') || cmd.startsWith('/b ')) {
      const q = txt.replace(/^\/b(?:uscar)?\s+/i,'').trim();
      if (!q) { window.mostrar(txt,'user'); entrada.value=''; entrada.focus(); window.mostrar('Uso: `/buscar <consulta>`','fran'); return; }
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      const pesos = core.estado.pesos_oraculo || {};
      const res = window.BuscarOraculo.buscarConScore(q, pesos, 5);
      if (!res.length) { window.mostrar(`Sin resultados para "${q}".`,'fran'); return; }
      const txt2 = res.map((r,i)=>`**${i+1}.** (score ${r.score}) _${r.q}_\n→ ${r.a}`).join('\n\n');
      window.mostrar('🔍 **BM25:** '+q+'\n\n'+txt2,'fran'); return;
    }
    if (cmd === '/stats' || cmd === '/estado-oraculo') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      const st = window.BuscarOraculo.stats();
      window.mostrar('📊 **Índice:** pares='+st.totalPares+' · tokens='+st.tokensTotales+' · caché='+st.cacheEntradas+' · motor='+st.motor+' · avgdl='+st.avgdl,'fran');
      if (core.obtenerStatsOraculo) core.obtenerStatsOraculo().then(s2=>window.mostrar('📦 local='+s2.local+' · IDB='+s2.idb+' · total='+s2.total,'fran'));
      return;
    }
    if (cmd === '/colmena' || cmd === '/p2p') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      if (window.ColmenaUI) window.ColmenaUI.abrir();
      else window.mostrar('Módulo Colmena no disponible.','fran');
      return;
    }

    if (cmd === '/visor' || cmd === '/pares') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      if (window.VisorPares) window.VisorPares.abrir();
      else window.mostrar('Visor no disponible.','fran');
      return;
    }
    if (cmd === '/podar') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      core.podar(-3).then(n=>{
        window.mostrar('✂️ Poda: '+n+' par(es) eliminados (peso ≤ -3).','fran');
        window.actualizarKiPill();
      });
      return;
    }
    if (cmd.startsWith('/consolidar')) {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      if (!window.Consolidar) { window.mostrar('Módulo Consolidar no disponible.','fran'); return; }
      window.mostrar('🔍 Analizando duplicados…','fran');
      window.Consolidar.obtenerEstadisticas().then(st=>{
        if (!st) { window.mostrar('IDBStore no disponible.','fran'); return; }
        window.mostrar('📊 **Análisis:** '+st.gruposDuplicados+' grupos similares · '+st.paresEnDuplicados+' pares · reducción potencial: '+st.potencialReduccion+'\n\nAbre 📚 Biblioteca → 🔗 Consolidar para ejecutar.','fran');
      }).catch(e=>window.mostrar('Error: '+e.message,'fran'));
      return;
    }
    if (cmd === '/exportar-oraculo' || cmd === '/export-oraculo') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      if (!window.Consolidar) { window.mostrar('Módulo Consolidar no disponible.','fran'); return; }
      window.Consolidar.exportarOraculoDataJS().then(r=>{
        if (r) window.mostrar('⬇️ **oraculo-data.js** descargado · '+r.totalPares+' pares (base: '+r.base+' + IDB: '+r.idb+')\n\nReemplaza `js/oraculo-data.js` en el repo para que el conocimiento aprendido quede como oráculo base permanente.','fran');
      }).catch(e=>window.mostrar('Error al exportar: '+e.message,'fran'));
      return;
    }
    // Y: /eco — evaluador de coherencia (+ historial) · /eco reset — limpia historial
    if (cmd === '/eco' || cmd === '/evaluar' || cmd.startsWith('/eco ') || cmd.startsWith('/evaluar ')) {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus({preventScroll:true});
      const arg = txt.trim().split(/\s+/).slice(1).join(' ').toLowerCase();
      if (arg === 'reset' || arg === 'limpiar') {
        try { localStorage.removeItem(_ECO_HIST_KEY); } catch (_) {}
        window.mostrar('🔎 Historial de coherencia Eco reiniciado.', 'fran');
        return;
      }
      window.mostrar(comandoEco(), 'fran');
      return;
    }
    // W: /doi <id> — verifica un DOI contra Crossref (híbrido: requiere conexión).
    if (cmd === '/doi' || cmd.startsWith('/doi ')) {
      window.mostrar(txt, 'user'); entrada.value = ''; entrada.focus({ preventScroll: true });
      const arg = txt.trim().split(/\s+/).slice(1).join(' ');
      if (!arg) {
        window.mostrar('🔗 Uso: `/doi 10.xxxx/xxxxx` — verifica una fuente contra Crossref (verificación opcional, online).', 'fran');
        return;
      }
      if (!window.VerificadorDOI) { window.mostrar('🔗 Verificador DOI no disponible.', 'fran'); return; }
      window.mostrar('🔗 Verificando DOI contra Crossref…', 'fran');
      window.VerificadorDOI.verificar(arg).then(res => window.mostrar(_formatDOI(res), 'fran'));
      return;
    }
    // KERNEL: /kernel — muestra la semilla · /kernel on|off — razonamiento estricto
    if (cmd === '/kernel' || cmd.startsWith('/kernel ')) {      window.mostrar(txt,'user'); entrada.value=''; entrada.focus({preventScroll:true});
      const arg = txt.trim().split(/\s+/).slice(1).join(' ');
      window.mostrar(comandoKernel(arg), 'fran');
      return;
    }
    // L: /rag [umbral] — consulta o cambia el umbral RAG desde el chat
    if (cmd === '/rag' || cmd.startsWith('/rag ')) {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus({preventScroll:true});
      const partes = txt.trim().split(/\s+/);
      if (partes.length === 1) {
        // /rag solo — mostrar valor actual
        const actual = parseFloat(localStorage.getItem(_RAG_UMBRAL_KEY) || '0.3');
        window.mostrar(
          '🎚️ **Umbral RAG actual:** `' + actual.toFixed(2) + '`\n' +
          '· Activa RAG si score top ≥ `' + (actual + 0.20).toFixed(2) + '`\n' +
          '· Filtra pares con score ≥ `' + actual.toFixed(2) + '`\n\n' +
          'Cambia con `/rag 0.40` (rango 0.10–0.70)', 'fran');
        return;
      }
      const nuevo = parseFloat(partes[1]);
      if (isNaN(nuevo) || nuevo < 0.10 || nuevo > 0.70) {
        window.mostrar('⚠️ Umbral fuera de rango. Usa un valor entre `0.10` y `0.70`.\nEjemplo: `/rag 0.40`','fran');
        return;
      }
      const v = nuevo.toFixed(2);
      localStorage.setItem(_RAG_UMBRAL_KEY, v);
      // Sync slider e indicador del panel ⚙️ si está abierto
      const sliderRag = document.getElementById('cfg-rag-umbral');
      const valRag   = document.getElementById('cfg-rag-val');
      if (sliderRag) sliderRag.value = v;
      if (valRag)    valRag.textContent = v;
      window.mostrar(
        '✅ Umbral RAG → `' + v + '`\n' +
        '· Activa RAG si score top ≥ `' + (nuevo + 0.20).toFixed(2) + '`\n' +
        '· Filtra pares con score ≥ `' + v + '`','fran');
      return;
    }
    // O: /config export — copiar resumen al portapapeles
    if (cmd === '/config export' || cmd === '/cfg export' || cmd === '/config copiar' || cmd === '/cfg copiar') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus({preventScroll:true});
      const resumen = comandoConfig();
      const textoPlano = resumen.replace(/\*\*/g,'').replace(/`/g,'').replace(/_([^_]+)_/g,'$1');
      navigator.clipboard.writeText(textoPlano)
        .then(() => {
          window.mostrar('📋 Resumen de configuración copiado al portapapeles.', 'fran');
          window.MiuToast && MiuToast.ok('📋 Copiado al portapapeles');
        })
        .catch(() => {
          window.mostrar(resumen + '\n\n_⚠️ No se pudo copiar automáticamente. Selecciona el texto manualmente._', 'fran');
        });
      return;
    }
    // ─────────────────────────────────────────────────────────────────────────

    window.mostrar(txt, 'user');
    entrada.value = '';
    // Mantener el foco en el input para que el teclado no se cierre en móvil
    entrada.focus({ preventScroll: true });
    ultimoMensajeUsuario = txt;

    let resp = null;
    try {
      // El núcleo decide primero, siempre offline: si el oráculo, MIU o la
      // resonancia tienen una coincidencia real, esa es la respuesta — rápida,
      // determinista, y es el conocimiento propio del proyecto, no se reemplaza
      // por un modelo externo solo porque hay uno conectado.
      const resultado = core.procesar(txt);
      resp = resultado.texto;

      // Solo cuando el núcleo no tuvo nada mejor que un relleno aleatorio (debil),
      // y hay un modelo en línea conectado, se lo usa como herramienta puntual.
      if (resultado.debil && window.ModoOnline.estaActivo()) {
        const alma = core.almas[core.almaActiva];

        // ── Streaming: crear bubble vacía y animar token a token ────────────
        const bubbleStream = document.createElement('div');
        bubbleStream.className = 'bubble fran streaming';
        chatInterior.appendChild(bubbleStream);
        chatInterior.parentElement.scrollTop = chatInterior.parentElement.scrollHeight;

        // ── G: indicador visual en el botón Enviar durante SSE ──────────────
        const _btnEnv = document.getElementById('btn-enviar');
        if (_btnEnv) _btnEnv.classList.add('streaming');

        let textoStream = '';
        window.ModoOnline.setOnToken((delta, acumulado) => {
          textoStream = acumulado;
          const transformado = window.ModoEspejo.aplicar(acumulado, ultimoMensajeUsuario);
          bubbleStream.innerHTML = _renderMarkdown(transformado);
          bubbleStream.dataset.textoCrudo = acumulado;
          chatInterior.parentElement.scrollTop = chatInterior.parentElement.scrollHeight;
        });

        // ── RAG: enriquecer el system prompt con contexto del oráculo ────────────
        // Usa buscarSemantico() (Phase D.2: índice pre-computado Float16 en IDB).
        // Si el índice semántico no está listo, delega automáticamente en D.1
        // (reranking BM25 top-50 → MiniLM) o en BM25 puro — degradación cero.
        const _ragPesos = core.estado.pesos_oraculo || {};
        const _ragPares = await window.BuscarOraculo.buscarSemantico(txt, _ragPesos, 3, 500);
        // D: leer umbral RAG desde localStorage (configurable en panel ⚙️)
        const _ragMin = parseFloat(localStorage.getItem(_RAG_UMBRAL_KEY) || '0.3');
        let _ragSystemPrompt = alma.systemPrompt || '';
        // KERNEL: en modo razonamiento estricto, anteponer el método MIU al system
        // prompt del alma (solo al usar LLM externo; el KERNEL.json nunca se envía).
        if (_kernelEstricto()) _ragSystemPrompt = _kernelPrompt() + '\n\n' + _ragSystemPrompt;
        let _ragN = 0;
        if (_ragPares && _ragPares.length > 0 && parseFloat(_ragPares[0].score) >= (_ragMin + 0.2)) {
          const _ragFiltrados = _ragPares.filter(p => parseFloat(p.score) >= _ragMin);
          if (_ragFiltrados.length > 0) {
            _ragN = _ragFiltrados.length;
            const _ragBloque = _ragFiltrados
              .map((p, i) => `[${i + 1}] Pregunta: ${p.q}\n    Respuesta: ${p.a}`)
              .join('\n');
            _ragSystemPrompt +=
              '\n\n--- ORÁCULO MIU (conocimiento propio del proyecto) ---\n' +
              'Los siguientes pares pregunta/respuesta son del acervo propio del proyecto. ' +
              'Si son pertinentes a la consulta del usuario, úsalos como fuente primaria ' +
              'y priorízalos sobre tu conocimiento general:\n' +
              _ragBloque +
              '\n--- FIN ORÁCULO ---';
            console.log('[RAG] ' + _ragN + ' par(es) inyectado(s). Scores: ' +
              _ragFiltrados.map(p => p.score).join(', '));
          }
        }

        const r = await window.ModoOnline.preguntar(txt, _ragSystemPrompt);

        // Desactivar streaming tras la llamada
        window.ModoOnline.setOnToken(null);
        bubbleStream.classList.remove('streaming');
        if (_btnEnv) _btnEnv.classList.remove('streaming'); // G: restaurar botón

        if (r?.error) {
          // Streaming falló o no soportado — mostrar error y respuesta offline
          bubbleStream.remove();
          window.mostrar('⚠️ ' + r.error + ' (mostrando respuesta offline)', 'fran');
        } else if (r?.texto && !textoStream) {
          // Respuesta en modo bloque (sin SSE): el bubble stream está vacío, rellenar
          const transformado = window.ModoEspejo.aplicar(r.texto, ultimoMensajeUsuario);
          bubbleStream.innerHTML = _renderMarkdown(transformado);
          bubbleStream.dataset.textoCrudo = r.texto;
        } else if (r?.texto && textoStream) {
          // SSE completó correctamente — bubble ya tiene el contenido renderizado
          resp = null; // no mostrar respuesta offline adicional
        }
        // Badge RAG: indicador discreto cuando el oráculo aportó contexto al modelo
        if (_ragN > 0 && !r?.error) {
          const ragBadge = document.createElement('span');
          ragBadge.className = 'rag-badge';
          ragBadge.title = 'El oráculo BM25 inyectó ' + _ragN + ' par(es) de conocimiento en el contexto del modelo. Umbral activo: ' + _ragMin.toFixed(2) + '.'; // K
          ragBadge.textContent = '🔮 RAG·' + _ragMin.toFixed(2) + ' +' + _ragN; // K: muestra umbral activo
          bubbleStream.appendChild(ragBadge);
        }
        // Multi-turno: registrar el par user/assistant para que la próxima
        // llamada reciba el contexto de esta conversación.
        const _textoAsistente = textoStream || r?.texto;
        if (!r?.error && _textoAsistente) {
          window.ModoOnline.agregarTurno('user', txt);
          window.ModoOnline.agregarTurno('assistant', _textoAsistente);
          // H: persistir respuesta streaming en el chat visual (mo_chat_vis).
          // El mensaje usuario ya fue guardado por mostrar() en la línea 903.
          _chatSave('fran', _textoAsistente);
        }
        actualizarTurnoContador();
        window.actualizarKiPill();
        return; // salir — ya se mostró el bubble online
      }
    } catch (e) {
      console.error('enviarMensaje: error inesperado', e);
      resp = 'Algo falló al generar esa respuesta (revisa la consola). Prueba de nuevo o cambia a modo offline.';
    }
    window.mostrar(resp, 'fran');
    window.actualizarKiPill();
  };

  document.getElementById('form-input').addEventListener('submit', (e) => {
    e.preventDefault();
    entrada.focus({ preventScroll: true });
    window.enviarMensaje();
  });

  // Enter key: el campo input es type="text" pero type="button" en send btn
  // En iOS con enterkeyhint="send", el teclado dispara un submit — este handler
  // es el refuerzo para navegadores que no disparan submit al presionar Enter.
  document.getElementById('input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      entrada.focus({ preventScroll: true });
      window.enviarMensaje();
    }
  });
  document.querySelectorAll('.sugerencias button').forEach(b => {
    b.addEventListener('click', () => { entrada.value = b.textContent; window.enviarMensaje(); entrada.focus(); });
  });

  /* ───────────────────────── Adjuntar archivo (junto al chat) ───────────────────────── */
  document.getElementById('btn-adjuntar').addEventListener('click', () => {
    // Abrir input de archivo oculto; si el archivo es grande (>500 KB) va a
    // Biblioteca (cola + worker). Si es pequeño, usa el modal clásico.
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = '.txt,.md,.json,.jsonl,text/plain,application/json';
    inp.onchange = function() {
      const file = inp.files[0];
      if (!file) return;
      if (file.size > 300 * 1024 && window.Biblioteca) {
        // Archivo pesado → Biblioteca con worker
        window.Biblioteca.añadirArchivos([file]);
        window.mostrar(`📂 **${file.name}** (${(file.size/1024).toFixed(0)} KB) añadido a la Biblioteca. Abre el panel 📚 Biblioteca para procesar.`, 'fran');
      } else {
        // Archivo liviano → modal clásico
        _procesarArchivoRapido(file);
      }
    };
    inp.click();
  });

  /* ───────────────────────── Voz: entrada y salida ───────────────────────── */
  const btnVoz = document.getElementById('btn-voz');
  let recognition, escuchando = false;
  if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'es-ES'; recognition.interimResults = false;
    recognition.onresult = (ev) => { entrada.value = ev.results[0][0].transcript; window.enviarMensaje(); };
    recognition.onend = () => { escuchando = false; btnVoz.classList.remove('escuchando'); btnVoz.textContent = '🎤'; };
  } else {
    // Muchos navegadores (Safari/iOS, Firefox, apps instaladas como PWA) no
    // implementan la Web Speech API — no es un bug del código, es soporte del
    // navegador. Se avisa una sola vez al cargar en vez de fallar silenciosamente
    // recién cuando el usuario toca el botón.
    btnVoz.disabled = true;
    btnVoz.title = 'Tu navegador no soporta entrada de voz. Usa 📎 para adjuntar un archivo o escribe directo.';
  }
  btnVoz.addEventListener('click', () => {
    if (!recognition) { window.mostrar('Tu navegador no soporta entrada de voz aquí. Puedes usar 📎 para adjuntar un archivo, o escribir directo.', 'fran'); return; }
    if (escuchando) { recognition.stop(); }
    else { recognition.start(); escuchando = true; btnVoz.classList.add('escuchando'); btnVoz.textContent = '🔴'; }
  });

  document.getElementById('chat').addEventListener('dblclick', (e) => {
    const bubble = e.target.closest('.bubble.fran');
    if (bubble && 'speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(bubble.dataset.textoCrudo || bubble.innerText);
      u.lang = 'es-ES'; u.rate = 1.0;
      window.speechSynthesis.speak(u);
    }
  });

  /* ── Phase D.2: worker de indexación semántica ─────────────────────────────
   * Lanza embed-worker.js en background para pre-computar y persistir embeddings
   * de todos los pares IDB que aún no estén en el store 'embeddings'.
   * El worker envía lotes al hilo principal (postMessage) que los persiste vía IDBStore.
   * No bloquea la UI bajo ninguna circunstancia — todos los errores son no críticos.
   */
  function _lanzarEmbedWorker() {
    try {
      // Obtener pares IDB con sus ids (solo los que tienen _idb_id están en el store)
      const paresParaIndexar = BuscarOraculo._pares
        .filter(p => p._idb_id != null)
        .map(p => ({ id: p._idb_id, q: p.q, a: p.a }));

      if (paresParaIndexar.length === 0) {
        console.log('app D.2: no hay pares IDB para indexar (oráculo base puro).');
        return;
      }

      // Obtener qué ids ya tienen embedding para no repetir trabajo
      window.IDBStore.contarEmbeddings().then(function(ya) {
        // Si todos están indexados, no lanzar worker
        if (ya >= paresParaIndexar.length) {
          console.log('app D.2: índice semántico completo (' + ya + '/' + paresParaIndexar.length + '), worker no necesario.');
          return;
        }

        console.log('app D.2: lanzando embed-worker (' + paresParaIndexar.length + ' pares, ' + ya + ' ya indexados)…');

        // Obtener ids ya indexados para pasarlos al worker
        window.IDBStore.obtenerEmbeddings().then(function(recs) {
          const idsIndexados = recs.map(r => r.id);

          const worker = new Worker('./js/embed-worker.js');
          let totalRecibidos = 0;

          worker.onmessage = function(e) {
            const msg = e.data;
            if (msg.tipo === 'progreso') {
              console.log('app D.2: indexando… ' + msg.indexados + '/' + msg.total);
            } else if (msg.tipo === 'lote') {
              // Persistir el lote en IDB y actualizar el índice en memoria
              window.IDBStore.guardarEmbeddings(msg.registros).then(function(n) {
                totalRecibidos += n;
                // Recargar índice semántico en memoria tras cada lote persistido
                return BuscarOraculo.cargarIndiceSemantico();
              }).catch(function(e) {
                console.warn('app D.2: error al persistir lote de embeddings:', e);
              });
            } else if (msg.tipo === 'fin') {
              console.log('app D.2: indexación completa — ' + msg.indexados + ' pares indexados en total.');
              worker.terminate();
            } else if (msg.tipo === 'error') {
              console.warn('app D.2: embed-worker error:', msg.mensaje);
              worker.terminate();
            }
          };

          worker.onerror = function(e) {
            console.warn('app D.2: error en embed-worker:', e.message);
            worker.terminate();
          };

          worker.postMessage({
            tipo:        'iniciar',
            pares:       paresParaIndexar,
            yaIndexados: idsIndexados,
          });

        }).catch(function(e) {
          console.warn('app D.2: no se pudo leer ids indexados:', e);
        });

      }).catch(function(e) {
        console.warn('app D.2: no se pudo contar embeddings existentes:', e);
      });

    } catch (e) {
      console.warn('app D.2: _lanzarEmbedWorker falló (no crítico):', e);
    }
  }

  /* ── D.2b: Re-indexación incremental de pares nuevos ────────────────────────
   * Llamado desde alimentar.js tras agregarPares() para indexar solo los pares
   * recién guardados sin esperar al próximo arranque.
   * pares: array de items devueltos por IDBStore.agregarPares() — tienen _idb_id.
   */
  window._reindexarNuevosPares = function(pares) {
    try {
      if (!pares || !pares.length) return;
      // _deserializarPar no está disponible aquí — usamos el canal BuscarOraculo
      // que ya tiene los pares deserializados en _pares tras cargarlos de IDB.
      // En cambio construimos directamente la lista {id, q, a} desde los items
      // del store (tienen _c comprimido, no q/a directos).
      // La forma más segura: releer los pares frescos desde BuscarOraculo._pares
      // que ya estarán disponibles si BuscarOraculo.agregarPares() fue llamado,
      // o leerlos desde IDB con todosLosPares() filtrando por id.
      const ids = pares.map(p => p._idb_id).filter(id => id != null);
      if (!ids.length) return;

      // Leer pares deserializados de BuscarOraculo._pares (cargados en memoria)
      const candidatos = BuscarOraculo._pares
        .filter(p => p._idb_id != null && ids.includes(p._idb_id))
        .map(p => ({ id: p._idb_id, q: p.q, a: p.a }));

      if (!candidatos.length) {
        // Si BuscarOraculo aún no los tiene, intentar tras una pequeña espera
        setTimeout(function() { window._reindexarNuevosPares(pares); }, 1500);
        return;
      }

      console.log('app D.2b: re-indexando ' + candidatos.length + ' pares nuevos…');

      window.IDBStore.obtenerEmbeddings().then(function(recs) {
        const idsIndexados = recs.map(r => r.id);
        const sinIndexar   = candidatos.filter(p => !idsIndexados.includes(p.id));
        if (!sinIndexar.length) {
          console.log('app D.2b: pares nuevos ya estaban indexados, nada que hacer.');
          return;
        }

        const worker = new Worker('./js/embed-worker.js');
        worker.onmessage = function(e) {
          const msg = e.data;
          if (msg.tipo === 'lote') {
            window.IDBStore.guardarEmbeddings(msg.registros).then(function() {
              return BuscarOraculo.cargarIndiceSemantico();
            }).catch(function(err) {
              console.warn('app D.2b: error al persistir lote incremental:', err);
            });
          } else if (msg.tipo === 'fin') {
            console.log('app D.2b: re-indexación incremental completa (' + msg.indexados + ' pares).');
            worker.terminate();
          } else if (msg.tipo === 'error') {
            console.warn('app D.2b: embed-worker error incremental:', msg.mensaje);
            worker.terminate();
          }
        };
        worker.onerror = function(e) {
          console.warn('app D.2b: error en worker incremental:', e.message);
          worker.terminate();
        };
        worker.postMessage({
          tipo:        'iniciar',
          pares:       sinIndexar,
          yaIndexados: idsIndexados,
        });
      }).catch(function(e) {
        console.warn('app D.2b: no se pudo leer embeddings para re-indexación incremental:', e);
      });

    } catch (e) {
      console.warn('app D.2b: _reindexarNuevosPares falló (no crítico):', e);
    }
  };


  renderListaAlmas();
  window.actualizarKiPill();
  actualizarTurnoContador();

  /* ── Botón Nueva Conversación ─────────────────────────────────────────── */
  document.getElementById('btn-nueva-conv').addEventListener('click', function () {
    window.ModoOnline.limpiarHistorial();
    document.getElementById('chat-interior').innerHTML = '';
    _chatClear(); // H: limpiar también el chat visual persistido
    actualizarTurnoContador();
    window.mostrar('_Contexto reiniciado. Nueva conversación — ¿en qué te ayudo?_', 'fran');
  });

  /* ── Biblioteca v10: IndexedDB + cola de archivos ── */
  if (window.IDBStore && window.Biblioteca) {
    // Cargar pares desde IDB en BuscarOraculo después de que Biblioteca inicia.
    // Después lanzar el worker de indexación semántica (Phase D.2) en background.
    window.IDBStore.open().then(function() {
      return BuscarOraculo.iniciarConIDB();
    }).then(function(n) {
      if (n > 0) console.log('app: ' + n + ' pares IDB integrados en el índice BM25.');

      // ── Phase D.2: índice semántico pre-computado ──────────────────────────
      // 1. Intentar cargar embeddings ya persistidos en IDB → habilita buscarSemantico()
      BuscarOraculo.cargarIndiceSemantico().then(function(k) {
        if (k > 0) {
          console.log('app D.2: índice semántico cargado desde IDB (' + k + ' embeds).');
        }
        // 2. Lanzar worker en background para indexar pares que aún no tienen embedding.
        //    El worker usa postMessage para enviar lotes al hilo principal para persistir.
        _lanzarEmbedWorker();
      }).catch(function(e) {
        console.warn('app D.2: cargarIndiceSemantico falló (no crítico):', e);
        _lanzarEmbedWorker(); // lanzar worker igualmente
      });

    }).catch(function(e) { console.warn('app: IDB→BuscarOraculo falló', e); });

    window.Biblioteca.init(function(stats) {
      // Callback cuando cambia el estado de la biblioteca
      const badge = document.getElementById('bib-badge');
      if (badge) {
        badge.textContent = stats.pendientes > 0 ? stats.pendientes : '';
        badge.style.display = stats.pendientes > 0 ? 'inline' : 'none';
      }
    }).catch(err => console.warn('Biblioteca.init falló (no crítico):', err));
  }
  // H+J: restaurar chat visual si hay sesión previa; si no, mostrar saludo.
  // _chatRestore() reconstruye las burbujas desde sessionStorage y devuelve
  // true si hubo algo que restaurar. El saludo inicial solo aparece en sesiones
  // nuevas para no contaminar una conversación restaurada.
  // J: cuando hay restauración, un toast discreto avisa al usuario.
  if (!_chatRestore()) {
    window.mostrar(`¡Hola! Soy el núcleo de **Micelio MIU**. Escribe \`/ayuda\` para ver los comandos, o simplemente cuéntame qué tienes en mente.`, 'fran');
  } else {
    // Diferir el toast para que el DOM esté pintado al mostrarlo
    setTimeout(() => { window.MiuToast && MiuToast.info('↩️ Sesión restaurada', 2500); }, 400);
  }
  // X: pintar el chip de coherencia Eco al cargar (según estado restaurado)
  if (window.actualizarEcoChip) window.actualizarEcoChip();
  // N: Autocompletar comandos — tooltip al escribir /
  (function iniciarAutocompletar() {
    const listaCmd = [
      { cmd: '/ayuda',           desc: 'ver todos los comandos' },
      { cmd: '/ki',              desc: 'estado MIU actual' },
      { cmd: '/bea',             desc: 'ciclo de evolución BEA' },
      { cmd: '/axioma',          desc: 'consultar axioma por ID' },
      { cmd: '/coherencia',      desc: 'calculadora CCP-01' },
      { cmd: '/config',          desc: 'resumen de configuración' },
      { cmd: '/config export',   desc: 'copiar config al portapapeles' },
      { cmd: '/uso',             desc: 'estadísticas de uso' },
      { cmd: '/kernel',          desc: 'ver KERNEL · razonamiento estricto' },
      { cmd: '/eco',             desc: 'evaluador de coherencia' },
      { cmd: '/termostato',      desc: 'banda de resiliencia / coherencia' },
      { cmd: '/panel',           desc: 'dashboard de coherencia' },
      { cmd: '/doi',             desc: 'verificar DOI en Crossref (online)' },
      { cmd: '/contexto',        desc: 'panel de contexto' },
      { cmd: '/espejo',          desc: 'modo espejo on/off' },
      { cmd: '/buscar',          desc: 'búsqueda BM25 en el oráculo' },
      { cmd: '/rag',             desc: 'consultar/cambiar umbral RAG' },
      { cmd: '/consolidar',      desc: 'fusionar duplicados' },
      { cmd: '/exportar-oraculo',desc: 'descargar oraculo-data.js' },
    ];
    const caja = document.createElement('div');
    caja.id = 'cmd-autocomplete';
    caja.style.cssText = 'display:none;position:absolute;bottom:100%;left:12px;right:12px;' +
      'background:var(--superficie-2);border:1px solid var(--borde-fuerte);border-radius:var(--radio-chico);' +
      'margin-bottom:4px;max-height:220px;overflow-y:auto;z-index:100;box-shadow:var(--sombra);' +
      'scrollbar-width:thin;scrollbar-color:var(--borde-fuerte) transparent;';
    const formInput = document.getElementById('form-input');
    formInput.style.position = 'relative';
    formInput.appendChild(caja);
    let idxActivo = -1;

    function renderItems(items) {
      caja.innerHTML = items.map(function(c) {
        return '<div class="cmd-ac-item" data-cmd="' + c.cmd + '" style="padding:8px 14px;cursor:pointer;' +
          'display:flex;justify-content:space-between;align-items:center;gap:12px;' +
          'border-bottom:1px solid var(--borde);font-size:0.85rem;transition:background .1s;">' +
          '<span style="color:var(--dorado);font-family:var(--mono);font-size:0.82rem;white-space:nowrap;">' + c.cmd + '</span>' +
          '<span style="color:var(--texto-tenue);font-size:0.73rem;text-align:right;">' + c.desc + '</span></div>';
      }).join('');
      caja.style.display = 'block';
      idxActivo = -1;
      caja.querySelectorAll('.cmd-ac-item').forEach(function(el) {
        el.addEventListener('mousedown', function(e) {
          e.preventDefault(); seleccionar(this.dataset.cmd);
        });
        el.addEventListener('mouseenter', function() {
          caja.querySelectorAll('.cmd-ac-item').forEach(function(x) { x.style.background = ''; });
          this.style.background = 'rgba(255,215,0,0.08)';
        });
        el.addEventListener('mouseleave', function() { this.style.background = ''; });
      });
    }

    function filtrar(txt) {
      var f = txt.toLowerCase();
      if (f === '/') { renderItems(listaCmd); return; }
      var matches = listaCmd.filter(function(c) { return c.cmd.startsWith(f); });
      if (!matches.length) { caja.style.display = 'none'; idxActivo = -1; return; }
      renderItems(matches);
    }

    function seleccionar(cmd) {
      var necesitaArg = /^\/(axioma|buscar|rag)$/.test(cmd);
      entrada.value = necesitaArg ? cmd + ' ' : cmd;
      entrada.focus();
      caja.style.display = 'none';
    }

    entrada.addEventListener('input', function() {
      var v = this.value.trim();
      if (v.startsWith('/') && v.length >= 1) { filtrar(v); }
      else { caja.style.display = 'none'; }
    });

    entrada.addEventListener('keydown', function(e) {
      if (caja.style.display === 'none') return;
      var items = caja.querySelectorAll('.cmd-ac-item');
      if (!items.length) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        idxActivo = Math.min(idxActivo + 1, items.length - 1);
        items.forEach(function(el, i) { el.style.background = i === idxActivo ? 'rgba(255,215,0,0.08)' : ''; });
        items[idxActivo].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        idxActivo = Math.max(idxActivo - 1, 0);
        items.forEach(function(el, i) { el.style.background = i === idxActivo ? 'rgba(255,215,0,0.08)' : ''; });
        items[idxActivo].scrollIntoView({ block: 'nearest' });
      } else if ((e.key === 'Enter' || e.key === 'Tab') && idxActivo >= 0) {
        e.preventDefault();
        seleccionar(items[idxActivo].dataset.cmd);
      } else if (e.key === 'Escape') {
        caja.style.display = 'none'; idxActivo = -1;
      }
    });

    entrada.addEventListener('blur', function() {
      setTimeout(function() { caja.style.display = 'none'; }, 150);
    });
  })();

  // R: Atajos de teclado globales
  //   Ctrl+K        → foco en el input
  //   Ctrl+/        → abrir /ayuda
  //   Ctrl+Shift+E  → abrir panel ⚙️
  document.addEventListener('keydown', function (e) {
    const ctrl = e.ctrlKey || e.metaKey;
    if (!ctrl) return;
    if (e.key === 'k' || e.key === 'K') {
      e.preventDefault();
      entrada.focus({ preventScroll: true });
    } else if (e.key === '/') {
      e.preventDefault();
      entrada.value = '/ayuda';
      window.enviarMensaje();
    } else if (e.shiftKey && (e.key === 'e' || e.key === 'E')) {
      e.preventDefault();
      const bc = document.getElementById('btn-config');
      if (bc) bc.click();
    }
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
