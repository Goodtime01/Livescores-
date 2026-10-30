const CACHE_NAME = 'etini-livescores-v1';
const urlsToCache = [
  './',
  './index.html',
  './basketball.html',
  './combat.html',
  './tennis.html',
  './cricket.html',
  './hockey.html',
  './baseball.html',
  './rugby.html',
  './f1.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});