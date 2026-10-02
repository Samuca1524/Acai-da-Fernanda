// service worker mínimo: só habilita a instalação do app; não guarda nada em cache (o site sempre carrega a versão mais nova)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
