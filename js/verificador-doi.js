// verificador-doi.js — v0.3 (Ciclo AF) — TTL diferenciado para 404s + stats extendidas
// Híbrido: online verifica la fuente real; offline sirve caché IDB o avisa (no bloquea).
// Crossref es una API ABIERTA y GRATUITA (sin clave, sin cuenta).
//
// Cambios v0.3 respecto a v0.2 (Ciclo X):
//   - TTL diferenciado: éxitos → 30 días (CACHE_TTL_OK); 404/errores → 2 días (CACHE_TTL_ERR).
//     Antes los 404 se cacheaban con el mismo TTL que los éxitos (7d), lo cual era conservador
//     pero innecesariamente largo: un DOI puede registrarse en Crossref días después de
//     ser publicado. 2 días es suficiente para evitar re-consultas en la sesión sin
//     bloquear la re-verificación cuando el DOI ya esté disponible.
//   - cacheStats() devuelve campos extra: ok_count, err_count, ttl_ok_dias, ttl_err_dias.
//     Útil para el panel /panel-doi introducido en este ciclo.
//   - cacheListar() incluye campo `error` en entradas no-ok para mostrar razón en panel.
//
// API pública (sin cambios de ruptura respecto a v0.2):
//   VerificadorDOI.extraer(texto)        → [doi, ...]
//   VerificadorDOI.disponible()          → bool
//   VerificadorDOI.verificar(doi)        → async { ok, doi, titulo, autores, anio, url,
//                                                   error?, offline?, fromCache? }
//   VerificadorDOI.verificarTexto(texto) → async { dois:[...], resultados:[...] }
//   VerificadorDOI.cacheStats()          → async { count, ok_count, err_count,
//                                                   ttl_ok_dias, ttl_err_dias, disponible }
//   VerificadorDOI.cacheLimpiar()        → async void
//   VerificadorDOI.cacheListar()         → async [{ doi, titulo, anio, ok, error?, t }, ...]

window.VerificadorDOI = (function () {
  'use strict';

  const CROSSREF       = 'https://api.crossref.org/works/';
  const RE_DOI         = /\b10\.\d{4,9}\/[-._;()/:A-Z0-9]+/ig;
  const CACHE_TTL_OK   = 30 * 24 * 3600 * 1000; // 30 días — DOI verificado existe
  const CACHE_TTL_ERR  =  2 * 24 * 3600 * 1000; //  2 días — 404 o error de red
  const CACHE_PFX      = 'doi_cache:';
  const CACHE_IDX_KEY  = 'doi_cache_index';

  // ── Extracción ────────────────────────────────────────────────────────────────

  function extraer(texto) {
    if (!texto) return [];
    const out = new Set();
    let m;
    RE_DOI.lastIndex = 0;
    while ((m = RE_DOI.exec(texto)) !== null) {
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

  // ── Caché IDB ─────────────────────────────────────────────────────────────────

  const _idb = () => (typeof window !== 'undefined' && window.IDBStore) ? window.IDBStore : null;

  async function _cacheGet(doi) {
    const store = _idb();
    if (!store) return null;
    try {
      const entrada = await store.getMeta(CACHE_PFX + doi);
      if (!entrada) return null;
      // TTL diferenciado: usar el TTL correcto según si fue ok o error
      const ttl = entrada.result && entrada.result.ok ? CACHE_TTL_OK : CACHE_TTL_ERR;
      if (Date.now() - entrada.t > ttl) return null; // expirado
      return entrada.result;
    } catch (_) { return null; }
  }

  async function _cacheSet(doi, result) {
    const store = _idb();
    if (!store) return;
    try {
      await store.setMeta(CACHE_PFX + doi, { t: Date.now(), result });
      const idx = (await store.getMeta(CACHE_IDX_KEY)) || [];
      if (!idx.includes(doi)) {
        idx.push(doi);
        await store.setMeta(CACHE_IDX_KEY, idx);
      }
    } catch (_) { /* silencioso — no bloquea el flujo principal */ }
  }

  async function cacheStats() {
    const store = _idb();
    if (!store) return { count: 0, ok_count: 0, err_count: 0,
                         ttl_ok_dias: 30, ttl_err_dias: 2, disponible: false };
    try {
      const idx = (await store.getMeta(CACHE_IDX_KEY)) || [];
      let ok_count = 0, err_count = 0;
      for (const doi of idx) {
        const entrada = await store.getMeta(CACHE_PFX + doi);
        if (!entrada) continue;
        const ttl = entrada.result && entrada.result.ok ? CACHE_TTL_OK : CACHE_TTL_ERR;
        if (Date.now() - entrada.t > ttl) continue; // expirado, no contar
        if (entrada.result && entrada.result.ok) ok_count++; else err_count++;
      }
      return { count: ok_count + err_count, ok_count, err_count,
               ttl_ok_dias: 30, ttl_err_dias: 2, disponible: true };
    } catch (_) { return { count: 0, ok_count: 0, err_count: 0,
                            ttl_ok_dias: 30, ttl_err_dias: 2, disponible: false }; }
  }

  async function cacheLimpiar() {
    const store = _idb();
    if (!store) return;
    try {
      const idx = (await store.getMeta(CACHE_IDX_KEY)) || [];
      for (const doi of idx) {
        await store.setMeta(CACHE_PFX + doi, null);
      }
      await store.setMeta(CACHE_IDX_KEY, []);
    } catch (_) { /* silencioso */ }
  }

  async function cacheListar() {
    const store = _idb();
    if (!store) return [];
    try {
      const idx = (await store.getMeta(CACHE_IDX_KEY)) || [];
      const lista = [];
      for (const doi of idx) {
        const entrada = await store.getMeta(CACHE_PFX + doi);
        if (!entrada) continue;
        const ttl = entrada.result && entrada.result.ok ? CACHE_TTL_OK : CACHE_TTL_ERR;
        if (Date.now() - entrada.t > ttl) continue; // expirado
        lista.push({
          doi,
          titulo: entrada.result?.titulo || '(sin título)',
          anio:   entrada.result?.anio   || null,
          ok:     entrada.result?.ok     || false,
          error:  entrada.result?.error  || null,
          t:      entrada.t
        });
      }
      return lista.sort((a, b) => b.t - a.t);
    } catch (_) { return []; }
  }

  // ── Verificación ──────────────────────────────────────────────────────────────

  async function verificar(doi) {
    const d = _normalizar(doi);
    if (!d) return { ok: false, doi: doi, error: 'DOI vacío' };

    const cached = await _cacheGet(d);
    if (cached) return { ...cached, fromCache: true };

    if (!disponible()) {
      return { ok: false, doi: d, offline: true, error: 'Sin conexión. Conéctate y reintenta con `/doi`.' };
    }

    try {
      const r = await fetch(CROSSREF + encodeURIComponent(d), { headers: { 'Accept': 'application/json' } });
      if (r.status === 404) {
        const res = { ok: false, doi: d, error: 'No encontrado en Crossref (404)' };
        await _cacheSet(d, res); // TTL corto automático: _cacheGet usará CACHE_TTL_ERR
        return res;
      }
      if (!r.ok) {
        const res = { ok: false, doi: d, error: 'HTTP ' + r.status };
        await _cacheSet(d, res); // errores de red → TTL corto también
        return res;
      }
      const j = await r.json();
      const w = (j && j.message) || {};
      const titulo  = (w.title && w.title[0]) || '(sin título)';
      const autores = (w.author || []).slice(0, 3)
        .map(a => [a.given, a.family].filter(Boolean).join(' ')).filter(Boolean);
      const anio = (w.issued && w.issued['date-parts'] &&
                    w.issued['date-parts'][0] && w.issued['date-parts'][0][0]) || null;
      const res = { ok: true, doi: d, titulo, autores, anio, url: 'https://doi.org/' + d };
      await _cacheSet(d, res); // TTL largo automático: _cacheGet usará CACHE_TTL_OK
      return res;
    } catch (e) {
      return { ok: false, doi: d, error: (e && e.message) || 'Error de red' };
    }
  }

  async function verificarTexto(texto) {
    const dois = extraer(texto);
    const resultados = [];
    for (const d of dois) resultados.push(await verificar(d));
    return { dois, resultados };
  }

  return { extraer, disponible, verificar, verificarTexto, cacheStats, cacheLimpiar, cacheListar };
})();
