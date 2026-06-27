// verificador-doi.js — Verificación OPCIONAL de DOIs contra Crossref (v10 · Ciclo W)
// Híbrido: online verifica la fuente real; offline degrada con gracia (avisa, no bloquea).
// Crossref es una API ABIERTA y GRATUITA (sin clave, sin cuenta) → cero vendor lock-in,
// cero dependencias de pago. Solo usa fetch nativo. Si no hay red, el flujo sigue igual.
//
// API:
//   VerificadorDOI.extraer(texto)        → [doi, ...]  DOIs normalizados encontrados
//   VerificadorDOI.disponible()          → bool (navigator.onLine)
//   VerificadorDOI.verificar(doi)        → async { ok, doi, titulo, autores, anio, url, error, offline }
//   VerificadorDOI.verificarTexto(texto) → async { dois:[...], resultados:[...] }

window.VerificadorDOI = (function () {
  'use strict';

  const CROSSREF = 'https://api.crossref.org/works/';
  // DOI conservador: 10.<registrante>/<sufijo>. Captura el patrón estándar.
  const RE_DOI = /\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+/ig;

  function extraer(texto) {
    if (!texto) return [];
    const out = new Set();
    let m;
    RE_DOI.lastIndex = 0;
    while ((m = RE_DOI.exec(texto)) !== null) {
      // quitar puntuación de cierre que suele pegarse al final
      out.add(m[0].replace(/[.,;)\]]+$/, '').toLowerCase());
    }
    return [...out];
  }

  function disponible() {
    try { return (typeof navigator !== 'undefined') ? navigator.onLine !== false : true; }
    catch (_) { return true; }
  }

  function _normalizar(doi) {
    return (doi || '').trim()
      .replace(/^https?:\/\/(dx\.)?doi\.org\//i, '')
      .replace(/^doi:\s*/i, '')
      .toLowerCase();
  }

  async function verificar(doi) {
    const d = _normalizar(doi);
    if (!d) return { ok: false, doi: doi, error: 'DOI vacío' };
    if (!disponible()) return { ok: false, doi: d, offline: true, error: 'Sin conexión (verificación opcional online)' };
    try {
      const r = await fetch(CROSSREF + encodeURIComponent(d), { headers: { 'Accept': 'application/json' } });
      if (r.status === 404) return { ok: false, doi: d, error: 'No encontrado en Crossref' };
      if (!r.ok) return { ok: false, doi: d, error: 'HTTP ' + r.status };
      const j = await r.json();
      const w = (j && j.message) || {};
      const titulo = (w.title && w.title[0]) || '(sin título)';
      const autores = (w.author || []).slice(0, 3)
        .map(a => [a.given, a.family].filter(Boolean).join(' ')).filter(Boolean);
      const anio = (w.issued && w.issued['date-parts'] && w.issued['date-parts'][0] && w.issued['date-parts'][0][0]) || null;
      return { ok: true, doi: d, titulo, autores, anio, url: 'https://doi.org/' + d };
    } catch (e) {
      return { ok: false, doi: d, error: (e && e.message) || 'Error de red' };
    }
  }

  async function verificarTexto(texto) {
    const dois = extraer(texto);
    const resultados = [];
    for (const d of dois) resultados.push(await verificar(d)); // secuencial: cortés con la API libre
    return { dois, resultados };
  }

  return { extraer, disponible, verificar, verificarTexto, _RE_DOI: RE_DOI };
})();
