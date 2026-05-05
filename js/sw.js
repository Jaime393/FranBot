self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
  importScripts('/FranBot/core/franbot-universal.js');
  startFranBotDaemon();
});

setInterval(() => {
  self.clients.matchAll().then(clients => {
    if (clients.length === 0) {
      self.registration.showNotification('FranBot', {
        body: 'Núcleo de autonomía activo',
        requireInteraction: true
      });
    }
  });
}, 30000);