const CACHE_NAME = 'playpixellabs-v2';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.svg',
  '/logo.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Pre-cache critical assets
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Strategy 1: Stale-While-Revalidate for HTML pages (navigation) to ensure freshness
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          const fetchPromise = fetch(event.request)
            .then((networkResponse) => {
              cache.put(event.request, networkResponse.clone());
              return networkResponse;
            })
            .catch(() => cachedResponse); // Fallback to cache if offline

          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // Strategy 2: Cache First for static assets (images, styles, scripts)
  if (
    event.request.destination === 'image' ||
    event.request.destination === 'style' ||
    event.request.destination === 'script' ||
    event.request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request).then((networkResponse) => {
          // Cache new assets for next time
          return caches.open(CACHE_NAME).then((cache) => {
             // Check if valid response before caching
             if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                 return networkResponse;
             }
             cache.put(event.request, networkResponse.clone());
             return networkResponse;
          });
        });
      })
    );
    return;
  }

  // Default: Network First
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
