const STATIC_CACHE = 'duonepal-static-v1';
const RUNTIME_CACHE = 'duonepal-runtime-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/logo.png',
  '/duo.png',
  '/esewa.png',
  '/khalti.png',
  '/fonepay.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== RUNTIME_CACHE)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

const isCacheableGet = (request) => {
  if (request.method !== 'GET') return false;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api/')) return false;

  const isSameOriginAsset =
    url.origin === self.location.origin &&
    (url.pathname.startsWith('/assets/') ||
      /\.(js|css|png|jpg|jpeg|webp|svg|mp4|woff2?)$/i.test(url.pathname));

  const isRemoteMedia =
    url.hostname.includes('cloudinary.com') || url.hostname.includes('pexels.com');

  return isSameOriginAsset || isRemoteMedia;
};

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (!isCacheableGet(request)) return;

  event.respondWith(
    caches.open(RUNTIME_CACHE).then(async (cache) => {
      const cached = await cache.match(request);
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => cached);

      return cached || networkFetch;
    })
  );
});
