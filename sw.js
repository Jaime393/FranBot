const CACHE_NAME = 'franbot-v4';
const ASSETS = [
    '/',
    '/index.html',
    '/css/estilo.css',
    '/js/franbot-core.js',
    '/js/franbot-online.js',
    '/js/defensa.js',
    '/js/app.js',
    '/state/franbot_state.json'
];
self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});