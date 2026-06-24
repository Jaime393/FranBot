// colmena.js — Colmena P2P para compartir pares Q/A entre instancias MIU
// Motor: Gun.js (https://gun.eco) — base de datos descentralizada en tiempo real.
//   · Sin servidor propio requerido — usa relays públicos de Gun.eco
//   · Funciona offline; sincroniza al reconectar
//   · El usuario puede apuntar a su propio relay (Gun en Node.js, ~5 líneas)
//   · Sin cuentas, sin claves de API, sin registro
//
// Modelo de datos:
//   gun.get('miu/colmenas').get(CANAL).get('pares').get(HASH) → par
//   gun.get('miu/colmenas').get(CANAL).get('votos').get(HASH) → { up, down }
//   gun.get('miu/colmenas').get(CANAL).get('meta')            → { nombre, nodos, t }
//
// Cada par tiene un HASH = primeros 40 chars de btoa(q) — no es criptográfico
// pero es suficiente para deduplicar en el grafo.
//
// API pública:
//   Colmena.iniciar(opts)           — conectar a Gun + suscribirse al canal
//   Colmena.publicarPares(pares)    — enviar pares al canal
//   Colmena.suscribirse(canal)      — cambiar de canal
//   Colmena.desconectar()           — cerrar conexión
//   Colmena.estado                  — { conectado, canal, nodos, recibidos, publicados }
//   Colmena.onPar(cb)               — callback cuando llega un par nuevo
//   Colmena.onEstado(cb)            — callback cuando cambia el estado

window.Colmena = (function () {
  'use strict';

  // ── Relays públicos de Gun.eco (fallback en orden) ────────────────────────────
  const RELAYS_DEFAULT = [
    'https://gun-manhattan.herokuapp.com/gun',
    'https://gun-us.herokuapp.com/gun',
    'https://peer.wallie.io/gun',
  ];

  const GUN_CDN = 'https://cdn.jsdelivr.net/npm/gun/gun.js';
  const CANAL_DEFAULT = 'miu-publico-v1';
  const STORE_KEY = 'miu_colmena_cfg';
  const MAX_PARES_RECIBIDOS = 5000; // no acumular infinitamente en memoria

  let _gun    = null;
  let _canal  = null;
  let _ref    = null;  // referencia Gun al canal activo
  let _subs   = [];    // suscripciones activas (para limpiar)
  let _cbPar  = null;
  let _cbEst  = null;
  let _paresVistos = new Set(); // hashes ya procesados en esta sesión

  let _estado = {
    conectado:   false,
    canal:       '',
    nodos:       0,
    recibidos:   0,
    publicados:  0,
    error:       null,
  };

  // ── Helpers ───────────────────────────────────────────────────────────────────
  function _hashPar(q) {
    // Hash ligero: base64 de los primeros 60 chars de la pregunta, sin padding
    try { return btoa(unescape(encodeURIComponent((q || '').trim().slice(0, 60)))).replace(/=/g, '').slice(0, 40); }
    catch (e) { return Math.random().toString(36).slice(2, 14); }
  }

  function _emitEst(cambios) {
    Object.assign(_estado, cambios);
    if (_cbEst) _cbEst(Object.assign({}, _estado));
  }

  function _emitPar(par) {
    if (_cbPar) _cbPar(par);
  }

  // ── Cargar Gun.js desde CDN ───────────────────────────────────────────────────
  function _cargarGun() {
    if (window.Gun) return Promise.resolve(window.Gun);
    return new Promise((res, rej) => {
      const s = document.createElement('script');
      s.src = GUN_CDN;
      s.onload  = () => res(window.Gun);
      s.onerror = () => rej(new Error('No se pudo cargar Gun.js desde CDN. Verifica tu conexión.'));
      document.head.appendChild(s);
    });
  }

  // ── Configuración persistida ──────────────────────────────────────────────────
  function cargar() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || 'null'); }
    catch (e) { return null; }
  }

  function guardar(cfg) {
    localStorage.setItem(STORE_KEY, JSON.stringify(cfg));
  }

  // ── Inicialización ────────────────────────────────────────────────────────────
  /**
   * @param {Object} opts
   *   opts.canal    {string}   nombre del canal (default: 'miu-publico-v1')
   *   opts.relays   {string[]} URLs de relays Gun (default: públicos)
   *   opts.onPar    {Function} callback cuando llega un par nuevo
   *   opts.onEstado {Function} callback cuando cambia el estado
   */
  async function iniciar(opts) {
    opts = opts || {};
    _cbPar = opts.onPar    || _cbPar;
    _cbEst = opts.onEstado || _cbEst;

    const cfg = Object.assign({ canal: CANAL_DEFAULT, relays: RELAYS_DEFAULT }, cargar(), opts);
    guardar({ canal: cfg.canal, relays: cfg.relays });

    _emitEst({ conectado: false, canal: cfg.canal, error: null });

    // 1. Cargar Gun
    let Gun;
    try { Gun = await _cargarGun(); }
    catch (e) { _emitEst({ error: e.message }); throw e; }

    // 2. Instanciar Gun con los relays
    if (_gun) { desconectar(); }
    _gun = Gun(cfg.relays);

    // 3. Suscribirse al canal
    await suscribirse(cfg.canal);
    _emitEst({ conectado: true });
    return _estado;
  }

  // ── Suscripción a un canal ────────────────────────────────────────────────────
  async function suscribirse(canal) {
    if (!_gun) throw new Error('Colmena no iniciada. Llama a Colmena.iniciar() primero.');
    canal = (canal || CANAL_DEFAULT).trim().toLowerCase().replace(/[^a-z0-9-_]/g, '-');
    _canal = canal;
    _paresVistos.clear();

    // Limpiar suscripciones anteriores
    _subs.forEach(fn => { try { fn(); } catch (e) {} });
    _subs = [];

    _ref = _gun.get('miu/colmenas').get(canal);

    // Actualizar meta del canal (nodos activos)
    const nodeId = _hashPar(Date.now() + Math.random());
    _ref.get('meta').get('nodos').get(nodeId).put({ t: Date.now(), activo: true });

    // Escuchar pares nuevos
    const offPares = _ref.get('pares').map().on(function (dato, hash) {
      if (!dato || !dato.q || !dato.a) return;
      if (_paresVistos.has(hash)) return;
      _paresVistos.add(hash);
      if (_paresVistos.size > MAX_PARES_RECIBIDOS) {
        // Limpiar la mitad más antigua
        const arr = [..._paresVistos];
        _paresVistos = new Set(arr.slice(arr.length / 2));
      }
      _emitEst({ recibidos: _estado.recibidos + 1 });
      _emitPar({ q: dato.q, a: dato.a, origen: 'colmena:' + canal, t: dato.t || Date.now() });
    });
    _subs.push(offPares);

    // Escuchar conteo de nodos activos (aproximado)
    const offMeta = _ref.get('meta').get('nodos').map().on(function (nodo) {
      if (!nodo || !nodo.activo) return;
      // Contar nodos vistos en los últimos 5 minutos
      _emitEst({ nodos: _estado.nodos + 1 });
    });
    _subs.push(offMeta);

    _emitEst({ canal, recibidos: 0, nodos: 0 });
    guardar({ canal, relays: cargar()?.relays || RELAYS_DEFAULT });
  }

  // ── Publicar pares ────────────────────────────────────────────────────────────
  /**
   * Publica un array de pares { q, a } al canal activo.
   * Solo publica pares con peso ≥ 0 (no propaga basura).
   * @param {Array} pares
   * @param {Object} [opciones]
   *   opciones.soloPositivos {boolean} — filtrar solo peso > 0 (default true)
   *   opciones.maxPares      {number}  — límite por publicación (default 50)
   */
  async function publicarPares(pares, opciones) {
    if (!_gun || !_ref) throw new Error('Colmena no iniciada o sin canal.');
    opciones = Object.assign({ soloPositivos: true, maxPares: 50 }, opciones);

    let filtrados = (pares || []).filter(p => p && p.q && p.a);
    if (opciones.soloPositivos) filtrados = filtrados.filter(p => (p.peso || 0) >= 0);
    filtrados = filtrados.slice(0, opciones.maxPares);

    if (!filtrados.length) return 0;

    const refPares = _ref.get('pares');
    let publicados = 0;

    for (const par of filtrados) {
      const hash = _hashPar(par.q);
      await new Promise((res) => {
        refPares.get(hash).put({
          q:      par.q.trim(),
          a:      par.a.trim(),
          origen: par.origen || 'colmena',
          t:      Date.now(),
        }, function (ack) { res(ack); });
      });
      publicados++;
    }

    _emitEst({ publicados: _estado.publicados + publicados });
    return publicados;
  }

  // ── Votar un par ─────────────────────────────────────────────────────────────
  async function votarPar(hashQ, voto) {
    if (!_ref) return;
    const campo = voto > 0 ? 'up' : 'down';
    _ref.get('votos').get(hashQ).get(campo).once(function (actual) {
      _ref.get('votos').get(hashQ).get(campo).put((actual || 0) + 1);
    });
  }

  // ── Desconexión ───────────────────────────────────────────────────────────────
  function desconectar() {
    _subs.forEach(fn => { try { fn(); } catch (e) {} });
    _subs = [];
    _ref  = null;
    _emitEst({ conectado: false, nodos: 0 });
  }

  // ── Callbacks ─────────────────────────────────────────────────────────────────
  function onPar(cb)    { _cbPar = cb; }
  function onEstado(cb) { _cbEst = cb; }

  // ── Export ────────────────────────────────────────────────────────────────────
  return {
    iniciar, suscribirse, publicarPares, votarPar, desconectar,
    cargar, guardar, onPar, onEstado,
    get estado() { return Object.assign({}, _estado); },
    CANAL_DEFAULT, RELAYS_DEFAULT, _hashPar,
  };
})();
