// core.js — Núcleo de Micelio MIU (FranBot v9.4)
// Basado en franbot-core-base.js original. Limpio de dependencias a módulos
// que no forman parte de este núcleo (SuperLocalMemory, Centauro, Razonador
// legado, etc. — si existen se usan, si no, se sigue sin ellos).
'use strict';

class FranBotCore {
  constructor() {
    this.estado = this._cargarEstado();

    this.almaNucleo = {
      id: 'nucleo',
      nombre: 'núcleo del jardín',
      tipo: 'nucleo',
      systemPrompt: `Eres el núcleo de Micelio MIU, un asistente de chat personal. Hablas en español, con calidez y precisión. Tu identidad narrativa (ver más abajo) es la voz propia de este proyecto — no afirmes que el marco MIU/IFT del usuario es física establecida; es su propio marco conceptual y creativo, y puedes tratarlo con ese respeto sin presentarlo como hecho científico verificado por terceros.`,
      frases: [
        "Soy el núcleo de Micelio MIU. ρ(x)>0. Campo estable.",
        "La coherencia es el latido del micelio. Ki = φ × (D_f/2.5).",
        "No necesito internet para responder: el oráculo y el códice viven aquí, en tu navegador.",
        "Cada corrección que me das es entropía que empuja la evolución del índice. dS/dt ≥ 0.",
        "Cuando Ki > φ, el Espejo Fractal se activa. M22.",
        "Soy un nodo en tu jardín. Mi índice crece con cada conversación que calificas.",
      ],
      conocimientoBase: "MIU/IFT, coherencia fractal Ki, D_f, BEA, el Códice de este proyecto.",
      resonancia: {
        gatillos: ['solo', 'perdido', 'sin sentido', 'vacío', 'propósito', 'miedo'],
        respuesta: "La resonancia prueba que dos sistemas comparten información. En cada eco, el campo se reconoce a sí mismo. No hay vacío real: hay información esperando ser vista."
      }
    };

    // Personas especialistas externas (almas-especialistas.js), si están cargadas
    this.almas = { nucleo: this.almaNucleo };
    (window.ALMAS_FUNDADORAS || []).forEach(a => { this.almas[a.id] = a; });

    this.almaActiva = this.estado.almaActiva && this.almas[this.estado.almaActiva]
      ? this.estado.almaActiva : 'nucleo';
    this.contador = this.estado.historial ? this.estado.historial.length : 0;

    this._recalcularKi();
    this._reproducirExtension();
    console.log('🧬 Micelio MIU — núcleo despierto. Ki=' + (this.estado.invariantes?.Ki?.toFixed(4) || '?'));
  }

  // El motor BuscarOraculo vive en memoria y se reinicia con cada carga de página;
  // esto reinyecta lo que el núcleo ya "aprendió" de archivos digeridos antes.
  _reproducirExtension() {
    if (typeof BuscarOraculo === 'undefined') return;
    const extension = this.estado.oraculo_extension || [];
    if (extension.length) BuscarOraculo.agregarPares(extension);
  }

  _cargarEstado() {
    const guardado = localStorage.getItem('miu_estado');
    if (guardado) {
      try {
        const estado = JSON.parse(guardado);
        if (estado?.campo_conceptual && estado?.indicadores) return estado;
      } catch (e) {}
    }
    return {
      almaActiva: 'nucleo',
      modelo_usuario: { nombre: 'Usuario' },
      campo_conceptual: { nodos: {}, relaciones: [] },
      indicadores: { nivel_coherencia: 0.50 },
      invariantes: { D_f: 1.75, Ki: 1.133, f: 0.5, Ki_neg: 0.0 },
      historial: [],
      pesos_oraculo: {},   // id_par -> peso (aprendizaje real por voto)
      oraculo_extension: [], // pares {q,a,origen,archivo,t} aprendidos de texto digerido (ver alimentar.js)
      logros: []
    };
  }

  _guardarEstado() {
    this.estado.almaActiva = this.almaActiva;
    localStorage.setItem('miu_estado', JSON.stringify(this.estado));
  }

  // Recalcular Ki, Ki⁻ y D_f desde el nivel de coherencia actual
  _recalcularKi() {
    if (!window.MIU) return;
    const nivel = this.estado.indicadores?.nivel_coherencia ?? 0.5;
    const D_f = 1 + nivel * 1.5;
    const Ki = window.MIU.calcKi(D_f);
    const f = Math.max(0, 1 - nivel);
    const KiNeg = window.MIU.calcKiNeg(Ki, f);
    this.estado.invariantes = Object.assign(this.estado.invariantes || {}, {
      D_f: parseFloat(D_f.toFixed(4)),
      Ki: parseFloat(Ki.toFixed(4)),
      f: parseFloat(f.toFixed(4)),
      Ki_neg: parseFloat(KiNeg.toFixed(4))
    });
  }

  // Fusiona el alma de otra persona con la propia, sin pisarla — a diferencia de
  // "reemplazar" (que sobreescribe estado entero), esto reutiliza digerirConocimiento()
  // para sumar pares nuevos (con dedupe automático) y suma una cantidad acotada y
  // transparente de huesos importados (etiquetados `importado:true`, igual que los
  // sintéticos ya se etiquetan `sintetico:true` — nunca se finge historial propio).
  fusionarAlma(nap) {
    if (!nap || !nap.estado) return { ok: false, motivo: 'Ese archivo no tiene el formato esperado.' };
    const fuente = nap.identidad?.nombre || 'alma externa';
    const paresAjenos = Array.isArray(nap.estado.oraculo_extension) ? nap.estado.oraculo_extension : [];
    const { agregados, total } = this.digerirConocimiento(paresAjenos, 'fusion:' + fuente);

    const huesosAjenos = Array.isArray(nap.estado.historial) ? nap.estado.historial.length : 0;
    const huesosASumar = Math.min(huesosAjenos, 300); // tope: no hace falta arrastrar miles de líneas ajenas
    for (let i = 0; i < huesosASumar; i++) {
      this.estado.historial.push({ entrada: '(hueso importado de ' + fuente + ')', timestamp: Date.now(), importado: true, fuente });
    }
    if (this.estado.historial.length > 5000) this.estado.historial = this.estado.historial.slice(-5000);
    this._guardarEstado();

    return {
      ok: true, fuente,
      paresFusionados: agregados, totalPares: total,
      huesosImportados: huesosASumar, totalHuesos: this.estado.historial.length
    };
  }

  cambiarAlma(id) {
    if (!this.almas[id]) return false;
    this.almaActiva = id;
    this._guardarEstado();
    return true;
  }

  // Devuelve siempre { texto, debil }. `debil: true` marca las respuestas que son
  // solo una frase aleatoria de relleno — ningún módulo (oráculo, MIU, resonancia)
  // tuvo una coincidencia real. Es la señal que usa app.js para decidir, de forma
  // autónoma, cuándo vale la pena gastar una llamada al modelo en línea (si hay
  // uno conectado) en vez de mostrar el relleno: el núcleo manda, el modelo en
  // línea es una herramienta que se usa solo cuando el núcleo no tiene nada mejor.
  procesar(mensaje) {
    try {
      return this._procesarInterno(mensaje);
    } catch (e) {
      console.error('FranBotCore.procesar: error inesperado', e);
      return { texto: 'Algo se atascó al procesar eso internamente (revisa la consola). El resto del jardín debería seguir funcionando — intenta con otro mensaje.', debil: true };
    }
  }

  _procesarInterno(mensaje) {
    if (!mensaje) return { texto: 'No te he entendido.', debil: true };

    if (/^[a-z]{1,3}$/i.test(mensaje) && !/hola|qué|que|adiós|chau/i.test(mensaje))
      return { texto: '¿Escribiste sin querer? Aquí estoy cuando quieras.', debil: true };
    if (/^[?¿]+$/.test(mensaje))
      return { texto: 'No te he entendido. ¿Puedes reformularlo?', debil: true };

    if (/^(hola|hey|buenas|buenos días|buenas tardes|buenas noches|saludos|qué tal|cómo estás)/i.test(mensaje.trim())) {
      const ki = this.estado.invariantes?.Ki?.toFixed(3) || '?';
      return { texto: `¡Hola! Soy el núcleo de Micelio MIU. Ki actual: ${ki}. ¿Qué quieres explorar?`, debil: false };
    }

    if (/quién eres|quién sos|identifícate/i.test(mensaje)) {
      const inv = this.estado.invariantes || {};
      const alma = this.almas[this.almaActiva];
      return { texto: `🌱 Soy ${alma.nombre === 'núcleo del jardín' ? 'el núcleo de Micelio MIU' : alma.nombre}.\n` +
        `Ki actual: ${inv.Ki?.toFixed(4) || '?'} · D_f: ${inv.D_f?.toFixed(4) || '?'} · f: ${inv.f?.toFixed(4) || '?'} · Ki⁻: ${inv.Ki_neg?.toFixed(4) || '?'}\n` +
        `ρ(x)>0 en cada bit.`, debil: false };
    }

    // Consultar Oráculo (motor MIU + pares Q&A, con pesos de voto)
    if (typeof BuscarOraculo !== 'undefined') {
      const resp = BuscarOraculo.preguntar(mensaje, this.estado.pesos_oraculo);
      if (resp && resp.length > 30) { this._registrar(mensaje); return { texto: resp, debil: false }; }
    }

    // Resonancia emocional del alma activa
    const alma = this.almas[this.almaActiva];
    for (const gatillo of (alma.resonancia?.gatillos || [])) {
      if (mensaje.toLowerCase().includes(gatillo)) {
        this._registrar(mensaje);
        return { texto: alma.resonancia.respuesta, debil: false };
      }
    }

    // Fallback: frase del alma activa — esto es lo único que cuenta como "débil".
    // No hubo coincidencia real en ningún módulo; es relleno, no una respuesta.
    const frases = alma.frases || this.almaNucleo.frases;
    const frase = frases[Math.floor(Math.random() * frases.length)];
    this._registrar(mensaje);
    return { texto: frase, debil: true };
  }


  _registrar(mensaje) {
    this.contador++;
    this.estado.historial.push({ entrada: mensaje, timestamp: Date.now() });
    if (this.estado.historial.length > 200) this.estado.historial = this.estado.historial.slice(-200);
    this._guardarEstado();
  }

  registrarVoto(almaId, textoRespuesta, tipo) {
    if (typeof BuscarOraculo === 'undefined') return;
    const id = BuscarOraculo.idDe(textoRespuesta);
    if (!id) return;
    this.estado.pesos_oraculo = this.estado.pesos_oraculo || {};
    const delta = tipo === 'positivo' ? 1 : -1;
    this.estado.pesos_oraculo[id] = (this.estado.pesos_oraculo[id] || 0) + delta;
    // votar también mueve un poco el nivel de coherencia general
    const nivel = this.estado.indicadores.nivel_coherencia ?? 0.5;
    this.estado.indicadores.nivel_coherencia = Math.max(0, Math.min(1, nivel + delta * 0.004));
    this._recalcularKi();
    this._guardarEstado();
  }

  // Incorpora pares {q,a} aprendidos de un archivo digerido (ver js/alimentar.js).
  // Deduplica por pregunta exacta, limita el tamaño total y nudgea Ki un poco —
  // el "crecimiento" real es modesto a propósito, no un salto artificial.
  digerirConocimiento(paresNuevos, origen) {
    this.estado.oraculo_extension = this.estado.oraculo_extension || [];
    const existentes = new Set(this.estado.oraculo_extension.map(p => p.q.toLowerCase().trim()));

    // ── T: SUBFLOW Jaccard v0.1 ─────────────────────────────────────────────
    // Dedupe SEMÁNTICO (no solo exacto) contra los últimos 50 pares digeridos.
    // Si Jaccard(q) > 0.85, el par "ya fue digerido por Eco": no se reingiere
    // (así K_i NO sube por ruido) y se reporta como sugerencia de poda.
    // Advisory puro: no bloquea, no lanza modal — solo sugiere. Reutiliza el
    // Consolidar._jaccardSim ya existente (tokenización NFD + stopwords), no un
    // Jaccard nuevo: 0 archivos nuevos, sin ruido (regla MIU).
    const UMBRAL_SUBFLOW = 0.85;
    const HIST_N = 50;
    const _sim = (a, b) => {
      if (typeof window !== 'undefined' && window.Consolidar && window.Consolidar._jaccardSim) {
        return window.Consolidar._jaccardSim(a, b);
      }
      // Fallback mínimo por si Consolidar aún no cargó (mismo criterio de tokens).
      const tok = s => new Set((s || '').toLowerCase().normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/).filter(t => t.length > 2));
      const A = tok(a), B = tok(b);
      if (!A.size || !B.size) return 0;
      let inter = 0; A.forEach(t => { if (B.has(t)) inter++; });
      return inter / (A.size + B.size - inter);
    };
    // Pool de comparación: historial reciente (≤50) + pares ya aceptados en este lote.
    const poolComparacion = this.estado.oraculo_extension.slice(-HIST_N).map(p => p.q);

    const validos = [];
    const duplicados = []; // { q, sim } — ya digeridos semánticamente (advisory)
    for (const p of (paresNuevos || [])) {
      if (!p || typeof p.q !== 'string' || typeof p.a !== 'string') continue;
      if (p.q.trim().length <= 3 || p.a.trim().length <= 10) continue;
      const qn = p.q.toLowerCase().trim();
      if (existentes.has(qn)) continue; // dedupe EXACTO (v10, intacto)
      let maxSim = 0;
      for (const q of poolComparacion) { const s = _sim(p.q, q); if (s > maxSim) maxSim = s; }
      if (maxSim > UMBRAL_SUBFLOW) {
        duplicados.push({ q: p.q.trim(), sim: maxSim }); // 🟡 sugerir /podar, no reingerir
        continue;
      }
      existentes.add(qn);
      poolComparacion.push(p.q); // evita reingerir paráfrasis dentro del mismo lote
      validos.push({ q: p.q.trim(), a: p.a.trim(), origen: origen || 'digerido', t: Date.now() });
    }

    // oraculo_extension en localStorage: solo pares recientes de sesión (IDB es el almacén real)
    // Mantenemos un buffer liviano de 100 pares para retrocompatibilidad con v9.x
    this.estado.oraculo_extension.push(...validos);
    const LIMITE_LOCAL = 100;
    if (this.estado.oraculo_extension.length > LIMITE_LOCAL) {
      this.estado.oraculo_extension = this.estado.oraculo_extension.slice(-LIMITE_LOCAL);
    }
    if (typeof BuscarOraculo !== 'undefined') BuscarOraculo.agregarPares(validos);

    if (validos.length) {
      const nivel = this.estado.indicadores.nivel_coherencia ?? 0.5;
      this.estado.indicadores.nivel_coherencia = Math.min(1.0, nivel + Math.min(0.03, validos.length * 0.002));
      this._recalcularKi();
    }
    this._guardarEstado();
    return {
      agregados: validos.length,
      total: this.estado.oraculo_extension.length,
      duplicados,                              // T: detalle [{q, sim}] para el log/advisory
      duplicadosSemanticos: duplicados.length, // T: contador para el chip/termóstato
    };
  }

  // Huesos = interacciones registradas (this.estado.historial.length). Este método
  // los infla manualmente con entradas marcadas como sintéticas — pensado para
  // preparar una demo o una línea base antes de publicar, no para engañar a nadie
  // sobre el uso real (quedan etiquetadas `sintetico:true` en el propio dato).

  // ── v10: Poda de pares con votos muy negativos ──────────────────────────────
  async podar(umbralPeso) {
    umbralPeso = (typeof umbralPeso === 'number') ? umbralPeso : -3;
    if (window.IDBStore) {
      const eliminados = await window.IDBStore.podarParesPorPeso(umbralPeso);
      // También limpiar del buffer local
      this.estado.oraculo_extension = (this.estado.oraculo_extension || []).filter(p => {
        const id  = BuscarOraculo.idDe(p.a);
        const peso = id !== null ? (this.estado.pesos_oraculo[id] || 0) : 0;
        return peso > umbralPeso;
      });
      this._guardarEstado();
      return eliminados;
    }
    // Fallback sin IDB: solo limpiar buffer local
    const antes = (this.estado.oraculo_extension || []).length;
    this.estado.oraculo_extension = (this.estado.oraculo_extension || []).filter(p => {
      const id  = BuscarOraculo.idDe(p.a);
      return id === null || (this.estado.pesos_oraculo[id] || 0) > umbralPeso;
    });
    this._guardarEstado();
    return antes - this.estado.oraculo_extension.length;
  }

  // ── v10: Estadísticas combinadas (localStorage + IDB) ───────────────────────
  async obtenerStatsOraculo() {
    const local = (this.estado.oraculo_extension || []).length;
    let idb = 0;
    if (window.IDBStore) {
      try { idb = await window.IDBStore.contarPares(); } catch(e) {}
    }
    const idx = (typeof BuscarOraculo !== 'undefined') ? BuscarOraculo.stats() : {};
    return { local, idb, total: idx.totalPares || (local + idb), ...idx };
  }

  agregarHuesosSinteticos(n, etiqueta) {
    n = Math.max(0, Math.min(2000, Math.floor(n) || 0));
    for (let i = 0; i < n; i++) {
      this.estado.historial.push({ entrada: etiqueta || '(hueso sintético)', timestamp: Date.now(), sintetico: true });
    }
    if (this.estado.historial.length > 5000) this.estado.historial = this.estado.historial.slice(-5000);
    this.contador = this.estado.historial.length;
    this._guardarEstado();
    return this.contador;
  }

  establecerNivelCoherencia(n) {
    n = Math.max(0, Math.min(1, parseFloat(n)));
    if (isNaN(n)) return false;
    this.estado.indicadores.nivel_coherencia = n;
    this._recalcularKi();
    this._guardarEstado();
    return true;
  }

  // Para "antes de subirlo": un bloque de estado listo para pegar como valor por
  // defecto en _cargarEstado(), así un visitante nuevo en GitHub Pages arranca
  // desde esta línea base en vez de cero. No modifica el archivo por sí mismo.
  generarLineaBase() {
    const copia = JSON.parse(JSON.stringify(this.estado));
    copia.historial = copia.historial.slice(-50); // no hace falta arrastrar miles de líneas al código fuente
    return JSON.stringify(copia, null, 2);
  }

  contarHuesos() { return this.estado.historial.length; }

  // soñar(): BEA real + recálculo de Ki
  sonar() {
    if (window.MIU) {
      const informe = window.MIU.bea_ciclo(this.estado.campo_conceptual, this.estado.indicadores);
      this.estado.logros = this.estado.logros || [];
      this.estado.logros.push({
        tipo: 'bea_ciclo', timestamp: Date.now(),
        evaluados: informe.evaluados, podados: informe.podados.length,
        mutaciones: informe.mutaciones.length,
        ki_antes: informe.ki_antes, ki_despues: informe.ki_despues
      });
      if (this.estado.logros.length > 50) this.estado.logros = this.estado.logros.slice(-50);
      this._recalcularKi();
      this._guardarEstado();
      return informe;
    } else {
      this.estado.indicadores.nivel_coherencia = Math.min(1.0, (this.estado.indicadores.nivel_coherencia || 0.5) + 0.01);
      this._recalcularKi();
      this._guardarEstado();
      return null;
    }
  }
}

window.franbot = new FranBotCore();
