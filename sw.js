// sw.js — FranBot v24
// Cambios v24 (Ciclo W — Verificador DOI / híbrido online-opcional):
//  - CACHE_NAME → 'franbot-v24' (invalida cache de v23).
//  - NUEVO js/verificador-doi.js: window.VerificadorDOI — verifica DOIs contra
//    Crossref (API libre, sin clave, sin vendor). Híbrido: online verifica la
//    fuente; offline avisa y NO bloquea (versatilidad online opcional).
//  - app.js: detección de DOIs tras ingerir (advisory) + comando /doi <id>.
//  - Añadido './js/verificador-doi.js' a ARCHIVOS (pre-cacheo offline).
// Cambios v23 (Ciclo U — Panel de Coherencia integrado):
//  - CACHE_NAME → 'franbot-v23' (invalida cache de v22).
//  - app.js: comando /panel (alias /dashboard, /coherencia-panel) — dashboard
//    modal in-app que consolida termóstato + Eco + subflow + uso, con gráfico
//    SVG inline del historial K_i (offline, sin Chart.js/CDN). 0 archivos nuevos.
//  - Digestión Ciclo U: adaptado el Módulo 4 del blueprint SIN fragmentar.
//    Módulos 1/2 ya cubiertos por alimentar/embed-worker/buscar-oraculo/consolidar.
//    Módulo 3 (polinización a redes/Zenodo) RECHAZADO: viola offline/local + nube.
// Cambios v22 (Ciclo T — SUBFLOW Jaccard v0.1):
//  - CACHE_NAME → 'franbot-v22' (invalida cache de v21).
//  - core.js digerirConocimiento(): dedupe SEMÁNTICO Jaccard>0.85 contra los últimos
//    50 pares digeridos (reutiliza Consolidar._jaccardSim). Los duplicados NO se
//    reingieren (K_i no sube por ruido) y se reportan como sugerencia de /podar.
//  - app.js: advisory tras ingerir + contador DIARIO "duplicados evitados hoy"
//    visible en /termostato, /uso y el tooltip del chip Eco. Advisory: no bloquea.
// Cambios v15:
//  - CACHE_NAME → 'franbot-v21' (invalida cache de v20).
//  - Task F: buscar-oraculo.js v5+F — constantes de fusión semántica/BM25 (SEM_PESO,
//    SEM_UMBRAL, SEM_BOOST_ALTO/UMBRAL). Umbral mínimo de coseno + boost alta confianza.
//  - Task E: íconos PWA reales (192×192 y 512×512 PNG) generados desde el arte del bot.
//    manifest.json actualizado; icons/ agregado a ARCHIVOS para pre-cacheo offline.
// Cambios v14 (mantenidos):
//  - Task G: re-indexación incremental. idb-store.js agregarPares() devuelve _idb_id.
//    alimentar.js llama _reindexarNuevosPares() tras persistir. app.js orquesta el delta.
// Cambios anteriores (mantenidos): ver historial v10-v13.

const CACHE_NAME = 'franbot-v24';

const ARCHIVOS = [
  './index.html',
  './manifest.json',
  './KERNEL.json',
  './css/estilo.css',
  // íconos PWA (Task E)
  './icons/icon-192.png',
  './icons/icon-512.png',
  // js/ — orden tal como se cargan en index.html
  './js/webllm-provider.js',
  './js/idb-store.js',
  './js/visor-pares.js',
  './js/consolidar.js',
  './js/biblioteca.js',
  './js/miu-engine.js',
  './js/codice-libre.js',
  './js/oraculo-data.js',
  './js/buscar-oraculo.js',
  './js/almas-especialistas.js',
  './js/core.js',
  './js/conciencia.js',
  './js/modo-espejo.js',
  './js/contexto.js',
  './js/modo-online.js',
  './js/alimentar.js',
  './js/eco.js',
  './js/verificador-doi.js',
  './js/app.js',
  './js/votacion.js',
  './js/colmena.js',
  './js/colmena-ui.js',
  './js/yape.js',
  // cargado dinámicamente vía `new Worker(...)`, no aparece en index.html
  // pero hace falta cachearlo para que el worker funcione offline
  './js/alimentar-worker.js',
  './js/embed-worker.js',
];

// oraculo-data.js es grande y puede actualizarse (nuevos pares Q&A):
// se sirve con estrategia network-first en vez de cache-first.
function esOraculoData(request) {
  return new URL(request.url).pathname.endsWith('/js/oraculo-data.js');
}

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ARCHIVOS))
      .catch((err) => console.error('[SW] Error precacheando:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const respuesta = await fetch(request);
    if (respuesta && respuesta.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, respuesta.clone());
    }
    return respuesta;
  } catch (err) {
    return cached; // sin red y sin cache: no hay nada más que ofrecer
  }
}

async function networkFirst(request) {
  try {
    const respuesta = await fetch(request);
    if (respuesta && respuesta.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, respuesta.clone());
    }
    return respuesta;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw err;
  }
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  if (esOraculoData(e.request)) {
    e.respondWith(networkFirst(e.request));
  } else {
    e.respondWith(cacheFirst(e.request));
  }
});
