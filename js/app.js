// app.js — Orquestador de Micelio MIU
(function () {
  'use strict';

  const chatInterior = document.getElementById('chat-interior');
  const entrada = document.getElementById('input');
  const core = window.franbot;

  /* ───────────────────────── Render de mensajes ───────────────────────── */
  let ultimoMensajeUsuario = '';

  window.mostrar = function (texto, rol) {
    const d = document.createElement('div');
    d.className = 'bubble ' + (rol === 'user' ? 'user' : 'fran');
    const textoFinal = rol === 'fran' ? window.ModoEspejo.aplicar(texto, ultimoMensajeUsuario) : texto;
    d.dataset.textoCrudo = texto; // texto sin transformar, para votación/identificación estable
    d.innerHTML = textoFinal
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\n/g, '<br>');
    chatInterior.appendChild(d);
    chatInterior.parentElement.scrollTop = chatInterior.parentElement.scrollHeight;
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
    `);

    const selectProveedor = document.getElementById('cfg-proveedor');
    const campoUrl = document.getElementById('cfg-url');
    const campoModelo = document.getElementById('cfg-modelo');
    const campoClave = document.getElementById('cfg-clave');
    const labelClave = document.getElementById('cfg-clave-label');
    const camposPersonalizados = document.getElementById('cfg-personalizado-campos');

    const camposWebLLM = document.getElementById('cfg-webllm-campos');
    function actualizarVisibilidad() {
      const id = selectProveedor.value;
      const esPersonalizado = !!proveedores[id]?.esPersonalizado;
      const esWebLLM        = !!proveedores[id]?.esWebLLM;
      camposPersonalizados.style.display = esPersonalizado ? 'block' : 'none';
      if (camposWebLLM) camposWebLLM.style.display = esWebLLM ? 'block' : 'none';
      const requiereClave = proveedores[id]?.requiereClave;
      const claveWrap = campoClave.closest('label') || campoClave.parentElement;
      labelClave.style.display = campoClave.style.display = esWebLLM ? 'none' : '';
      labelClave.textContent = requiereClave
        ? 'Clave de API'
        : 'Clave de API (opcional — déjala vacía para un servidor local sin autenticación)';
      campoClave.placeholder = requiereClave ? 'pega tu clave aquí' : 'opcional';
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
          window.mostrar('🖥️ **WebLLM activo:** ' + (window.WebLLMProvider.MODELOS[modeloId]?.nombre || modeloId) + ' cargado en el navegador. Sin internet, sin clave.', 'fran');
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
      cerrarModal();
    });
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
    abrirModal('🌱 Alimentar el núcleo · `/buscar <query>` búsqueda TF-IDF · `/stats` índice · `/visor` visor de pares · `/podar` eliminar pares negativos · `/consolidar` analizar duplicados · `/exportar-oraculo` descargar oráculo regenerado · `/colmena` abrir panel P2P', `
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
      window.actualizarKiPill();
      window.mostrar(`🌱 Incorporé ${r.agregados} par(es) nuevos al oráculo (total aprendido: ${r.total}).`, 'fran');
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
      `\`/ayuda\` — esta lista`;
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

  /* ───────────────────────── Envío de mensajes ───────────────────────── */
  window.enviarMensaje = async function () {
    const txt = entrada.value.trim();
    if (!txt) return;

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
      window.mostrar('🔍 **TF-IDF:** '+q+'\n\n'+txt2,'fran'); return;
    }
    if (cmd === '/stats' || cmd === '/estado-oraculo') {
      window.mostrar(txt,'user'); entrada.value=''; entrada.focus();
      const st = window.BuscarOraculo.stats();
      window.mostrar('📊 **Índice:** pares='+st.totalPares+' · tokens='+st.tokensTotales+' · caché='+st.cacheEntradas,'fran');
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
      // y hay un modelo en línea conectado, se lo usa como herramienta puntual
      // para esa respuesta — no como reemplazo general del núcleo.
      if (resultado.debil && window.ModoOnline.estaActivo()) {
        const alma = core.almas[core.almaActiva];
        const r = await window.ModoOnline.preguntar(txt, alma.systemPrompt);
        if (r?.error) window.mostrar('⚠️ ' + r.error + ' (mostrando respuesta offline)', 'fran');
        else if (r?.texto) resp = r.texto;
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

  /* ───────────────────────── Arranque ───────────────────────── */
  renderListaAlmas();
  window.actualizarKiPill();

  /* ── Biblioteca v10: IndexedDB + cola de archivos ── */
  if (window.IDBStore && window.Biblioteca) {
    // Cargar pares desde IDB en BuscarOraculo después de que Biblioteca inicia
    window.IDBStore.open().then(function() {
      return BuscarOraculo.iniciarConIDB();
    }).then(function(n) {
      if (n > 0) console.log('app: ' + n + ' pares IDB integrados en el índice TF-IDF.');
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
  window.mostrar(`¡Hola! Soy el núcleo de **Micelio MIU**. Escribe \`/ayuda\` para ver los comandos, o simplemente cuéntame qué tienes en mente.`, 'fran');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
})();
