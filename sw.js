const CACHE = "micelio-miu-v3";
const ARCHIVOS = [
  "./index.html",
  "./css/estilo.css",
  "./js/miu-engine.js",
  "./js/codice-libre.js",
  "./js/oraculo-data.js",
  "./js/buscar-oraculo.js",
  "./js/almas-especialistas.js",
  "./js/core.js",
  "./js/conciencia.js",
  "./js/modo-espejo.js",
  "./js/contexto.js",
  "./js/modo-online.js",
  "./js/alimentar.js",
  "./js/app.js",
  "./js/votacion.js",
  "./manifest.json"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARCHIVOS)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request).catch(() => cached))
  );
});
