const CACHE_NAME = 'helloWord';
const urlsToCache = [
  '/mockBiz/',
  '/mockBiz/index.html',
  '/mockBiz/manifest.json',
  '/mockBiz/sw.js',
  '/mockBiz/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
