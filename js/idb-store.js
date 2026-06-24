// idb-store.js — Almacén IndexedDB para Micelio MIU v10
// Reemplaza el límite duro de localStorage (5-10 MB) para oraculo_extension y la cola
// de procesamiento. localStorage queda solo para config, Ki/D_f e historial reciente.
//
// Stores:
//   pares   — pares {q, a, origen, archivo, t, peso} aprendidos de archivos
//   cola    — tareas de procesamiento de archivos {nombre, estado, total, procesado, t}
//   meta    — clave/valor genérico (stats, etc.)
//
// API síncrona imposible con IDB, así que todo es async.
// El arranque de FranBotCore espera a que la BD esté lista antes de continuar.

window.IDBStore = (function () {
  'use strict';

  const DB_NAME    = 'miu_db';
  const DB_VERSION = 1;
  let _db = null;

  // ──────────────────────────────────── open ────────────────────────────────────
  function open() {
    if (_db) return Promise.resolve(_db);
    return new Promise((res, rej) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);

      req.onupgradeneeded = function (e) {
        const db = e.target.result;
        // pares: índice por archivo para poder borrar por origen
        if (!db.objectStoreNames.contains('pares')) {
          const s = db.createObjectStore('pares', { keyPath: 'id', autoIncrement: true });
          s.createIndex('por_archivo', 'archivo', { unique: false });
          s.createIndex('por_peso',    'peso',    { unique: false });
        }
        if (!db.objectStoreNames.contains('cola')) {
          const c = db.createObjectStore('cola', { keyPath: 'id', autoIncrement: true });
          c.createIndex('por_estado', 'estado', { unique: false });
        }
        if (!db.objectStoreNames.contains('meta')) {
          db.createObjectStore('meta', { keyPath: 'clave' });
        }
      };

      req.onsuccess = function (e) { _db = e.target.result; res(_db); };
      req.onerror   = function (e) { console.error('IDBStore: error al abrir BD', e); rej(e); };
    });
  }

  // ──────────────────────────────── helpers ─────────────────────────────────────
  function tx(store, mode) {
    return _db.transaction([store], mode).objectStore(store);
  }

  function promReq(req) {
    return new Promise((res, rej) => {
      req.onsuccess = () => res(req.result);
      req.onerror   = ()  => rej(req.error);
    });
  }

  function promTx(store, mode, fn) {
    return open().then(() => {
      const s = tx(store, mode);
      return fn(s);
    });
  }

  // ──────────────────────────────── PARES ───────────────────────────────────────

  /** Devuelve todos los pares (puede ser lento con muchos; para construir índice al arrancar) */
  function todosLosPares() {
    return promTx('pares', 'readonly', s => promReq(s.getAll()));
  }

  /** Añade un array de pares nuevos; cada par recibe peso=0 si no trae */
  function agregarPares(pares) {
    if (!pares || !pares.length) return Promise.resolve(0);
    return open().then(() => new Promise((res, rej) => {
      const t   = _db.transaction(['pares'], 'readwrite');
      const s   = t.objectStore('pares');
      let count = 0;
      pares.forEach(p => {
        if (p && typeof p.q === 'string' && typeof p.a === 'string') {
          s.add({ q: p.q.trim(), a: p.a.trim(), origen: p.origen || 'aprendido',
                  archivo: p.archivo || '', t: p.t || Date.now(), peso: p.peso || 0 });
          count++;
        }
      });
      t.oncomplete = () => res(count);
      t.onerror    = ()  => rej(t.error);
    }));
  }

  /** Actualiza el peso de un par por su id */
  function actualizarPeso(id, delta) {
    return promTx('pares', 'readwrite', s => new Promise((res, rej) => {
      const req = s.get(Number(id));
      req.onsuccess = () => {
        const par = req.result;
        if (!par) return res(false);
        par.peso = (par.peso || 0) + delta;
        const r = s.put(par);
        r.onsuccess = () => res(true);
        r.onerror   = ()  => rej(r.error);
      };
      req.onerror = () => rej(req.error);
    }));
  }

  /** Elimina todos los pares con peso ≤ umbral (poda) */
  function podarParesPorPeso(umbral) {
    umbral = (typeof umbral === 'number') ? umbral : -3;
    return open().then(() => new Promise((res, rej) => {
      const t     = _db.transaction(['pares'], 'readwrite');
      const s     = t.objectStore('pares');
      const idx   = s.index('por_peso');
      const range = IDBKeyRange.upperBound(umbral, false); // peso <= umbral
      let eliminados = 0;
      const cursor = idx.openCursor(range);
      cursor.onsuccess = function (e) {
        const c = e.target.result;
        if (c) { c.delete(); eliminados++; c.continue(); }
      };
      t.oncomplete = () => res(eliminados);
      t.onerror    = ()  => rej(t.error);
    }));
  }

  /** Elimina todos los pares de un archivo (por nombre) */
  function eliminarParesPorArchivo(nombreArchivo) {
    return open().then(() => new Promise((res, rej) => {
      const t   = _db.transaction(['pares'], 'readwrite');
      const s   = t.objectStore('pares');
      const idx = s.index('por_archivo');
      const cur = idx.openCursor(IDBKeyRange.only(nombreArchivo));
      let eliminados = 0;
      cur.onsuccess = function (e) {
        const c = e.target.result;
        if (c) { c.delete(); eliminados++; c.continue(); }
      };
      t.oncomplete = () => res(eliminados);
      t.onerror    = ()  => rej(t.error);
    }));
  }

  /** Cuenta total de pares */
  function contarPares() {
    return promTx('pares', 'readonly', s => promReq(s.count()));
  }

  // ──────────────────────────────── COLA ───────────────────────────────────────

  /** Encola un archivo para procesamiento posterior */
  function encolar(entrada) {
    const tarea = Object.assign({ estado: 'pendiente', total: 0, procesado: 0, t: Date.now() }, entrada);
    return promTx('cola', 'readwrite', s => promReq(s.add(tarea)));
  }

  /** Actualiza el estado/progreso de una tarea */
  function actualizarCola(id, cambios) {
    return promTx('cola', 'readwrite', s => new Promise((res, rej) => {
      const req = s.get(Number(id));
      req.onsuccess = () => {
        const tarea = req.result;
        if (!tarea) return res(false);
        Object.assign(tarea, cambios);
        const r = s.put(tarea);
        r.onsuccess = () => res(true);
        r.onerror   = ()  => rej(r.error);
      };
      req.onerror = () => rej(req.error);
    }));
  }

  /** Devuelve todas las tareas de la cola */
  function obtenerCola() {
    return promTx('cola', 'readonly', s => promReq(s.getAll()));
  }

  /** Borra una tarea de la cola por id */
  function eliminarDeCola(id) {
    return promTx('cola', 'readwrite', s => promReq(s.delete(Number(id))));
  }

  /** Borra tareas completadas (limpieza) */
  function limpiarColaCompletada() {
    return open().then(() => new Promise((res, rej) => {
      const t   = _db.transaction(['cola'], 'readwrite');
      const s   = t.objectStore('cola');
      const idx = s.index('por_estado');
      const cur = idx.openCursor(IDBKeyRange.only('completo'));
      let n = 0;
      cur.onsuccess = function (e) {
        const c = e.target.result;
        if (c) { c.delete(); n++; c.continue(); }
      };
      t.oncomplete = () => res(n);
      t.onerror    = ()  => rej(t.error);
    }));
  }

  // ──────────────────────────────── META ───────────────────────────────────────

  function getMeta(clave) {
    return promTx('meta', 'readonly', s => promReq(s.get(clave))).then(r => r ? r.valor : null);
  }

  function setMeta(clave, valor) {
    return promTx('meta', 'readwrite', s => promReq(s.put({ clave, valor })));
  }

  // ──────────────────── Migración desde localStorage ────────────────────────────
  /** Mueve oraculo_extension de localStorage a IDB si existe y es grande.
   *  Llamar una vez al arrancar, antes de reproducirExtension(). */
  async function migrarDesdeLocalStorage() {
    try {
      const raw = localStorage.getItem('miu_estado');
      if (!raw) return 0;
      const estado = JSON.parse(raw);
      const ext    = estado.oraculo_extension;
      if (!Array.isArray(ext) || ext.length === 0) return 0;

      await open();
      const yaEnIDB = await contarPares();

      // Solo migrar si IDB está vacía (primera vez)
      if (yaEnIDB === 0 && ext.length > 0) {
        const n = await agregarPares(ext);
        // Vaciar del estado localStorage para liberar espacio
        estado.oraculo_extension = [];
        localStorage.setItem('miu_estado', JSON.stringify(estado));
        console.log(`IDBStore: migrados ${n} pares de localStorage → IndexedDB`);
        return n;
      }
      return 0;
    } catch (e) {
      console.warn('IDBStore: migración fallida (no crítico)', e);
      return 0;
    }
  }

  // ──────────────────────────────── export ─────────────────────────────────────
  return {
    open,
    // pares
    todosLosPares, agregarPares, actualizarPeso,
    podarParesPorPeso, eliminarParesPorArchivo, contarPares,
    // cola
    encolar, actualizarCola, obtenerCola, eliminarDeCola, limpiarColaCompletada,
    // meta
    getMeta, setMeta,
    // migración
    migrarDesdeLocalStorage,
  };
})();
