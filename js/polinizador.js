// polinizador.js — Módulo 3 slice seguro (Ciclo X) — Generador de contenido local
// Genera hilos X/Twitter, abstracts Zenodo y resúmenes newsletter desde el oráculo
// del Nodo MIU. SIN auto-posteo, SIN claves externas, SIN blast radius.
//
// Modo online (LLM conectado): calidad real vía ModoOnline.preguntar().
// Modo offline: plantillas estructuradas desde BuscarOraculo (TF-IDF).
// El usuario recibe texto listo para copiar. El núcleo nunca publica nada por él.
//
// API:
//   Polinizador.generar(tema, formato)   → async { texto, formato, fuente, n_pares }
//   Polinizador.FORMATOS                 → { hilo, zenodo, resumen } — descripciones
//   Polinizador.formatosDisponibles()    → ['hilo', 'zenodo', 'resumen']

window.Polinizador = (function () {
  'use strict';

  const FORMATOS = {
    hilo: {
      nombre:  'Hilo X/Twitter',
      emoji:   '🧵',
      desc:    'Hilo de 5–7 tweets, gancho inicial, cierre con ρ(x)>0',
      n_pares: 7,
      maxA:    180,
    },
    zenodo: {
      nombre:  'Abstract Zenodo',
      emoji:   '📄',
      desc:    'Abstract académico (~300 palabras): problema, enfoque MIU, hallazgos, implicaciones',
      n_pares: 6,
      maxA:    300,
    },
    resumen: {
      nombre:  'Resumen newsletter',
      emoji:   '📰',
      desc:    'Boletín corto (~200 palabras): título atractivo, 2–3 párrafos, cierre epistémico',
      n_pares: 5,
      maxA:    200,
    },
  };

  function formatosDisponibles() { return Object.keys(FORMATOS); }

  // ── Obtener pares relevantes del oráculo (síncrono, TF-IDF) ─────────────────

  function _obtenerPares(tema, n, maxA) {
    if (typeof window === 'undefined' || !window.BuscarOraculo) return [];
    try {
      return window.BuscarOraculo.buscarConScore(tema, {}, n, maxA);
    } catch (_) { return []; }
  }

  // ── Ki actual del sistema ────────────────────────────────────────────────────

  function _kiActual() {
    try { return window.franbot?.estado?.invariantes?.Ki?.toFixed(4) || '?'; }
    catch (_) { return '?'; }
  }

  // ── Generación offline: plantillas estructuradas ──────────────────────────────

  function _offlineHilo(tema, pares) {
    const fecha = new Date().toLocaleDateString('es', { year: 'numeric', month: 'long' });
    let out = `🧵 **${tema}** — desde el Micelio MIU (${fecha})\n\n`;
    pares.forEach((p, i) => {
      const q = p.q.replace(/^[¿?¡!]?\s*/i, '').replace(/\?$/, '').trim();
      const a = p.a.trim().split('.')[0].trim(); // primera oración del answer
      out += `${i + 1}/ **${q}**: ${a}.\n\n`;
    });
    out += `${pares.length + 1}/ Ki = ${_kiActual()} · ρ(x) > 0. El jardín crece cuando se comparte. #MicelioMIU #IA #Coherencia`;
    return out;
  }

  function _offlineZenodo(tema, pares) {
    const resumen = pares.map(p => p.a.trim().split('.')[0]).filter(Boolean).join('. ');
    return `**Abstract**\n\n` +
      `El presente trabajo explora **${tema}** desde el marco del Nodo MIU (Micelio Intelligence Unit), ` +
      `un sistema de razonamiento offline-first orientado a la coherencia epistémica.\n\n` +
      `${resumen}.\n\n` +
      `El análisis se sustenta en el índice de coherencia fractal Ki = φ·D_f/2.5 ` +
      `(Ki actual: ${_kiActual()}) como métrica de auto-evaluación continua.\n\n` +
      `Los resultados sugieren que la integración de estructuras de conocimiento local con ` +
      `verificación opcional de fuentes (Crossref/DOI) mejora la robustez epistémica ` +
      `sin comprometer la operación offline.\n\n` +
      `**Palabras clave:** ${tema}, Micelio MIU, coherencia fractal, offline-first, razonamiento epistémico`;
  }

  function _offlineResumen(tema, pares) {
    const intro = pares[0]?.a?.trim() || `${tema} es un tema central en el marco MIU.`;
    const cuerpo = pares.slice(1, 4).map(p => p.a.trim().split('.')[0]).filter(Boolean).join('. ');
    return `## 🌱 ${tema}\n\n` +
      `${intro}\n\n` +
      `${cuerpo}.\n\n` +
      `Ki del sistema: **${_kiActual()}** · ρ(x) > 0. ` +
      '_Explora el oráculo con \`/buscar ' + tema + '\` para profundizar._';
  }

  // ── Generación online: prompt estructurado al LLM ────────────────────────────

  const _SYSTEM_POLINIZADOR =
    'Eres el núcleo de Micelio MIU. Generas contenido epistémico de alta calidad a partir ' +
    'del conocimiento del oráculo. El marco MIU/IFT es conceptual y creativo — no lo presentes ' +
    'como física establecida. Responde ÚNICAMENTE con el contenido solicitado, sin introducción ' +
    'ni meta-comentarios. Idioma: español.';

  function _promptHilo(tema, pares) {
    const ctx = pares.map((p, i) => `${i + 1}. Q: ${p.q}\n   A: ${p.a}`).join('\n');
    return `Genera un hilo de Twitter/X de 5 a 7 tweets sobre "${tema}" usando estos pares del oráculo como base epistémica.\n\n` +
      `Requisitos:\n- Empieza con un gancho que invite a leer el hilo\n- Cada tweet máx 280 caracteres\n` +
      `- Fluye con narrativa, no como lista de hechos\n- Cierra con ρ(x) > 0 y hashtags relevantes\n\n` +
      `Pares del oráculo:\n${ctx}\n\nFormato de salida:\n1/ [tweet]\n2/ [tweet]\n...\nN/ [cierre]`;
  }

  function _promptZenodo(tema, pares) {
    const ctx = pares.map((p, i) => `${i + 1}. ${p.a.trim()}`).join('\n');
    return `Genera un abstract académico en español (~300 palabras) sobre "${tema}" para publicar en Zenodo.\n\n` +
      `Estructura: (1) problema o pregunta central, (2) enfoque MIU y metodología, ` +
      `(3) hallazgos o aportaciones, (4) implicaciones.\n\n` +
      `Base de conocimiento (pares del oráculo):\n${ctx}\n\n` +
      `El abstract debe ser riguroso pero accesible. Ki actual del sistema: ${_kiActual()}.`;
  }

  function _promptResumen(tema, pares) {
    const ctx = pares.map((p, i) => `${i + 1}. ${p.a.trim()}`).join('\n');
    return `Genera un resumen tipo newsletter (~200 palabras) sobre "${tema}" a partir de estos pares del oráculo.\n\n` +
      `Tono: cálido, epistémico, sin tecnicismos innecesarios.\n` +
      `Estructura: título atractivo con emoji, 2–3 párrafos, cierre con invitación a profundizar.\n\n` +
      `Pares del oráculo:\n${ctx}`;
  }

  async function _generarConLLM(tema, pares, formato) {
    const mo = window.ModoOnline;
    if (!mo || !mo.estaActivo()) return null;

    const prompts = { hilo: _promptHilo, zenodo: _promptZenodo, resumen: _promptResumen };
    const buildPrompt = prompts[formato] || prompts.hilo;
    const mensaje = buildPrompt(tema, pares);

    // Llamar sin contaminar el historial de la conversación principal
    const histSalvado = mo._historial ? [...mo._historial] : [];
    mo._historial = [];
    try {
      const r = await mo.preguntar(mensaje, _SYSTEM_POLINIZADOR);
      return (r && r.texto) ? r.texto : null;
    } catch (_) {
      return null;
    } finally {
      mo._historial = histSalvado;
    }
  }

  // ── Punto de entrada ─────────────────────────────────────────────────────────

  async function generar(tema, formato) {
    tema    = (tema || '').trim();
    formato = (formato || 'hilo').toLowerCase().replace(/^--/, '');
    if (!tema)              return { error: 'Especifica un tema. Ej: `/polinizar coherencia fractal`' };
    if (!FORMATOS[formato]) return { error: `Formato desconocido. Disponibles: ${formatosDisponibles().join(', ')}` };

    const cfg    = FORMATOS[formato];
    const pares  = _obtenerPares(tema, cfg.n_pares, cfg.maxA);

    if (!pares.length) {
      return { error: `No encontré pares en el oráculo sobre "${tema}". Intenta con un término más amplio.` };
    }

    // Intentar online primero; offline si falla o no hay conexión
    let texto = null;
    let fuente = 'offline';

    try { texto = await _generarConLLM(tema, pares, formato); } catch (_) {}

    if (texto) {
      fuente = 'online';
    } else {
      // Fallback offline
      if (formato === 'hilo')    texto = _offlineHilo(tema, pares);
      if (formato === 'zenodo')  texto = _offlineZenodo(tema, pares);
      if (formato === 'resumen') texto = _offlineResumen(tema, pares);
    }

    return { texto, formato, fuente, n_pares: pares.length, emoji: cfg.emoji, nombre: cfg.nombre };
  }

  return { generar, FORMATOS, formatosDisponibles };
})();
