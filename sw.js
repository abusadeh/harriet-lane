const CACHE_NAME = 'harriet-lane-v2.5.0';
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css?v=2.5.0',
  './app.js?v=2.5.0',
  './calculator_drugs.js?v=2.5.0',
  './manifest.json',
  './drugs_index.json',
  './pages_text.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching core assets v2.5.0...');
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Core asset pre-caching partial failure:', err);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  const isImageOrMedia = url.pathname.endsWith('.webp') || 
                         url.pathname.endsWith('.png') || 
                         url.pathname.endsWith('.jpg') || 
                         url.pathname.endsWith('.ico');

  if (isImageOrMedia) {
    // Cache-first for images, falling back to network
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return res;
        });
      })
    );
  } else {
    // Network-first for code assets (HTML, JS, CSS, JSON) to ensure updates are NEVER delayed
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (event.request.headers.get('accept')?.includes('text/html')) {
              return caches.match('./index.html');
            }
          });
        })
    );
  }
});
