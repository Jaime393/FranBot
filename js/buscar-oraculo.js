// buscar-oraculo.js v2 — Motor semántico MIU + TF-IDF + Índice invertido + Caché LRU
// Retro-compatible: misma API pública que v1 (iniciar, preguntar, agregarPares, idDe)
// Nuevos métodos: iniciarConIDB(), _construirIndice(), buscarConScore()
//
// Estrategia de búsqueda (por prioridad):
//   1. Motor MIU axiomático (MIU.consultar)
//   2. Índice invertido TF-IDF sobre todos los pares (base + extensión + IDB)
//   3. Fallback lineal clásico si el índice no está listo
//
// Complejidad:
//   Antes: O(n) por búsqueda, n pares, sin semántica real
//   Ahora: O(k log n) donde k = tokens de la query (índice invertido)
//          + LRU caché de 64 consultas frecuentes → O(1) en cache hits

function _decodificarOraculoBase64(b64) {
  const binario = atob(b64);
  const bytes = Uint8Array.from(binario, c => c.charCodeAt(0));
  return new TextDecoder('utf-8').decode(bytes);
}

window.BuscarOraculo = (function () {
  'use strict';

  // ─────────────── Estado interno ───────────────────────────────────────────────
  let _pares  = [];        // array maestro: base + extension + IDB
  let _listo  = false;
  let _indice = null;      // { token → Set<idx> }
  let _idf    = null;      // { token → número }
  let _indiceValido = false;

  // LRU cache — 64 entradas, evita recalcular queries repetidas
  const CACHE_MAX = 64;
  const _cache = new Map();
  function _cacheGet(key) {
    if (!_cache.has(key)) return undefined;
    const val = _cache.get(key);
    _cache.delete(key); _cache.set(key, val); // mover al final (LRU)
    return val;
  }
  function _cacheSet(key, val) {
    if (_cache.size >= CACHE_MAX) _cache.delete(_cache.keys().next().value);
    _cache.set(key, val);
  }
  function _cacheInvalidar() { _cache.clear(); }

  // ─────────────── Tokenización ─────────────────────────────────────────────────
  // Stop-words en español — no aportan discriminación semántica
  const STOP = new Set([
    'de','la','el','en','y','a','que','es','se','del','los','las','un','una',
    'con','por','para','como','más','pero','si','lo','le','su','sus','no','al',
    'me','mi','te','tu','yo','él','qué','cómo','cuál','cuándo','donde','o',
    'hay','muy','todo','esta','este','son','fue','ser','estar','ha','han',
    'era','sido','tiene','también','ya','sobre','desde','hasta','entre'
  ]);

  function _tokenizar(texto) {
    return texto
      .toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // quitar tildes para matching robusto
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t.length > 2 && !STOP.has(t));
  }

  // Bigramas: "materia oscura" → token compuesto que mejora precision
  function _bigramas(tokens) {
    const bg = [];
    for (let i = 0; i < tokens.length - 1; i++) bg.push(tokens[i] + '_' + tokens[i+1]);
    return bg;
  }

  function _tokensCompletos(texto) {
    const base = _tokenizar(texto);
    return base.concat(_bigramas(base));
  }

  // ─────────────── Construcción del índice ──────────────────────────────────────
  function _construirIndice() {
    const n   = _pares.length;
    if (n === 0) { _indiceValido = false; return; }

    const idx = Object.create(null);   // token → Set de índices
    const df  = Object.create(null);   // token → doc frequency

    for (let i = 0; i < n; i++) {
      const p       = _pares[i];
      const tokens  = _tokensCompletos((p.q || '') + ' ' + (p.a || ''));
      const vistos  = new Set();
      tokens.forEach(t => {
        if (!idx[t]) idx[t] = new Set();
        idx[t].add(i);
        if (!vistos.has(t)) { df[t] = (df[t] || 0) + 1; vistos.add(t); }
      });
    }

    // IDF: log(N / df(t))
    const idf = Object.create(null);
    Object.keys(df).forEach(t => { idf[t] = Math.log((n + 1) / (df[t] + 1)) + 1; });

    _indice = idx;
    _idf    = idf;
    _indiceValido = true;
    _cacheInvalidar();
  }

  // ─────────────── Sinonimia axiomática MIU ─────────────────────────────────────
  // Expande la query con conceptos del Códice para mejor recall semántico
  const SINONIMIA = {
    'materia_oscura': ['materia','oscura','cosmologia','galaxia','invisible','pegamento','rho'],
    'felicidad':      ['felicidad','coherencia','hedonica','bienestar','ich','ritmo'],
    'alma':           ['alma','fii','identidad','informacional','firma','persiste','nap'],
    'conciencia':     ['conciencia','phi','integracion','neuronal','phi_miu'],
    'gravedad':       ['gravedad','metrica','emergente','curvatura','flujo'],
    'realidad':       ['realidad','informacion','campo','rho','fundamental'],
    'tiempo':         ['tiempo','flujo','entropia','flecha','evolucion'],
    'amor':           ['amor','resonancia','vinculo','coherencia'],
    'coherencia':     ['coherencia','ki','fractal','df','phi','banda'],
    'micelio':        ['micelio','red','nodo','coneccion','jardin','hifa'],
    'ki':             ['ki','coherencia','phi','df','invariante','calculo'],
    'entropia':       ['entropia','desorden','tiempo','flecha','ds'],
  };

  function _expandirQuery(tokens) {
    const extra = [];
    const joined = tokens.join('_');
    // bigramas primero
    for (const clave in SINONIMIA) {
      if (joined.includes(clave)) {
        extra.push(...SINONIMIA[clave]);
        break;
      }
    }
    // unigramas
    tokens.forEach(t => {
      if (SINONIMIA[t]) extra.push(...SINONIMIA[t]);
    });
    return tokens.concat(extra);
  }

  // ─────────────── Score TF-IDF ─────────────────────────────────────────────────
  function _scoreTFIDF(queryTokens, pesos) {
    pesos = pesos || {};
    if (!_indiceValido) return null;

    const expandidos = _expandirQuery(queryTokens);
    const candidatos = new Map(); // idx → score acumulado

    expandidos.forEach((t, qi) => {
      const ids = _indice[t];
      if (!ids) return;
      const idfVal = (_idf[t] || 0.5);
      // los tokens de la query original valen más que los de sinonimia
      const peso = qi < queryTokens.length ? 1.0 : 0.4;
      ids.forEach(idx => {
        candidatos.set(idx, (candidatos.get(idx) || 0) + idfVal * peso);
      });
    });

    if (!candidatos.size) return null;

    // Convertir a array, aplicar boost de votos y penalizaciones
    const resultados = [];
    candidatos.forEach((sc, idx) => {
      const par    = _pares[idx];
      const voto   = pesos[String(idx)] || 0;
      if (voto <= -3) return; // par muy castigado → ignorar

      let score = sc + voto * 4; // boost de voto humano

      // Bonus: si la pregunta completa aparece literalmente
      const qNorm = _normalizar(par.q || '');
      const entrada = queryTokens.join(' ');
      if (qNorm.includes(entrada)) score += 20;

      // Penalización: respuestas muy cortas (probablemente sin contenido)
      if ((par.a || '').length < 60) score -= 5;

      resultados.push({ idx, par, score });
    });

    resultados.sort((a, b) => b.score - a.score);
    return resultados;
  }

  function _normalizar(s) {
    return s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9\s]/g,' ').trim();
  }

  // ─────────────── API pública ──────────────────────────────────────────────────

  function iniciar() {
    if (_listo) return;
    try {
      let motor = null;
      if (window.ORACULO_JSON)        motor = window.ORACULO_JSON;
      else if (window.ORACULO_BASE64) motor = JSON.parse(_decodificarOraculoBase64(window.ORACULO_BASE64));
      if (motor && Array.isArray(motor.pares)) {
        _pares = motor.pares.slice();
        _listo = true;
        _construirIndice();
        console.log('🔮 Oráculo v2: ' + _pares.length + ' pares base + índice TF-IDF listo.');
      }
    } catch (e) { console.error('Oráculo: error al iniciar', e); }
  }

  /** Carga pares adicionales desde IndexedDB (async, llamar después de iniciar()) */
  async function iniciarConIDB() {
    if (!window.IDBStore) return 0;
    try {
      await window.IDBStore.open();
      const paresIDB = await window.IDBStore.todosLosPares();
      if (!paresIDB || !paresIDB.length) return 0;
      // Agregar solo los que no están ya (deduplicar por q normalizada)
      const existentes = new Set(_pares.map(p => _normalizar(p.q || '')));
      let nuevos = 0;
      paresIDB.forEach(p => {
        if (p && typeof p.q === 'string' && !existentes.has(_normalizar(p.q))) {
          _pares.push({ q: p.q, a: p.a, origen: p.origen || 'idb', _idb_id: p.id });
          existentes.add(_normalizar(p.q));
          nuevos++;
        }
      });
      if (nuevos > 0) _construirIndice();
      console.log('🔮 Oráculo IDB: +'  + nuevos + ' pares desde IndexedDB → total=' + _pares.length);
      return nuevos;
    } catch (e) {
      console.warn('Oráculo: no se pudieron cargar pares desde IDB', e);
      return 0;
    }
  }

  function agregarPares(nuevos) {
    if (!_listo) iniciar();
    if (!Array.isArray(nuevos) || !nuevos.length) return 0;
    const existentes = new Set(_pares.map(p => _normalizar(p.q || '')));
    let n = 0;
    nuevos.forEach(p => {
      if (p && typeof p.q === 'string' && typeof p.a === 'string' &&
          p.q.trim() && p.a.trim() && !existentes.has(_normalizar(p.q))) {
        _pares.push({ q: p.q.trim(), a: p.a.trim(), origen: p.origen || 'aprendido' });
        existentes.add(_normalizar(p.q));
        n++;
      }
    });
    if (n > 0) _construirIndice();
    _cacheInvalidar();
    return n;
  }

  function idDe(textoRespuesta) {
    if (!_listo) iniciar();
    const i = _pares.findIndex(p => p.a === textoRespuesta);
    return i >= 0 ? String(i) : null;
  }

  /** Búsqueda principal. Devuelve texto de respuesta o null. */
  function preguntar(texto, pesos) {
    if (!_listo) iniciar();
    const entrada = texto.toLowerCase().trim();
    pesos = pesos || {};

    // 1. Motor MIU axiomático
    if (window.MIU) {
      const resMIU = window.MIU.consultar(entrada);
      if (resMIU) return resMIU.texto;
    }

    if (!_pares.length) return null;

    // 2. Caché LRU
    const cacheKey = entrada + '|' + JSON.stringify(pesos);
    const cached   = _cacheGet(cacheKey);
    if (cached !== undefined) return cached;

    // 3. TF-IDF con índice invertido
    let resultado = null;
    if (_indiceValido) {
      const tokens     = _tokensCompletos(entrada);
      const resultados = _scoreTFIDF(tokens, pesos);
      if (resultados && resultados.length > 0) {
        const top = resultados[0];
        // Umbral: score mínimo para devolver respuesta (ajustado empíricamente)
        if (top.score >= 1.5) resultado = top.par.a;
      }
    }

    // 4. Fallback lineal clásico (por si el índice falla o query demasiado corta)
    if (resultado === null) {
      resultado = _busquedaLineal(entrada, pesos);
    }

    _cacheSet(cacheKey, resultado);
    return resultado;
  }

  /** Fallback O(n): compatibilidad con comportamiento v1 */
  function _busquedaLineal(entrada, pesos) {
    let mejor = null, mejorScore = -999, mejorIdx = -1;
    for (let i = 0; i < _pares.length; i++) {
      const par   = _pares[i];
      let score   = _calcularScoreClasico(par, entrada);
      score += (pesos[String(i)] || 0) * 8;
      if (score > mejorScore) { mejorScore = score; mejor = par; mejorIdx = i; }
    }
    if (mejorIdx >= 0 && (pesos[String(mejorIdx)] || 0) <= -3) return null;
    return (mejorScore >= 10 && mejor) ? mejor.a : null;
  }

  function _calcularScoreClasico(par, entrada) {
    let score = 0;
    const q   = (par.q || '').toLowerCase();
    const a   = (par.a || '').toLowerCase();
    if (q.indexOf(entrada) !== -1) score += 100;
    else if (entrada.indexOf(q) !== -1 && q.length > 10) score += 70;
    // sinonimia reducida — el TF-IDF ya la cubre mejor
    if (entrada.includes('coherencia') && a.includes('ki'))    score += 20;
    if (entrada.includes('alma')       && a.includes('fii'))   score += 20;
    if (a.length < 80) score -= 30;
    return score;
  }

  /** Devuelve los N mejores pares con su score (para debug y visor de Biblioteca) */
  function buscarConScore(texto, pesos, n) {
    if (!_listo) iniciar();
    n = n || 5;
    const tokens     = _tokensCompletos((texto || '').toLowerCase());
    const resultados = _scoreTFIDF(tokens, pesos || {}) || [];
    return resultados.slice(0, n).map(r => ({
      score: r.score.toFixed(2), q: r.par.q, a: r.par.a.slice(0, 120)
    }));
  }

  /** Estadísticas del índice (para panel Biblioteca) */
  function stats() {
    return {
      totalPares: _pares.length,
      tokensTotales: _indice ? Object.keys(_indice).length : 0,
      indiceValido: _indiceValido,
      cacheEntradas: _cache.size,
    };
  }

  // ─────────────────────────────────────────────────────────────────────────────
  return {
    iniciar,
    iniciarConIDB,
    agregarPares,
    idDe,
    preguntar,
    buscarConScore,
    stats,
    // internos expuestos para tests
    _tokenizar,
    _tokensCompletos,
    _construirIndice,
    get _pares() { return _pares; },
  };
})();

// Arranque
if (document.readyState === 'complete') {
  BuscarOraculo.iniciar();
  // Carga IDB en background sin bloquear
  BuscarOraculo.iniciarConIDB().catch(() => {});
} else {
  window.addEventListener('DOMContentLoaded', function () {
    BuscarOraculo.iniciar();
    BuscarOraculo.iniciarConIDB().catch(() => {});
  });
}
