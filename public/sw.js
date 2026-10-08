const CACHE_NAME = "robot-market-v1";
const BASE_PATH = self.registration.scope.replace(self.location.origin, "").replace(/\/$/, "");
const withBasePath = (path) => `${BASE_PATH}${path}`;
const APP_SHELL = [
  withBasePath("/"),
  withBasePath("/manifest.json"),
  withBasePath("/logo.png"),
  withBasePath("/icons/icon-192.png"),
  withBasePath("/icons/icon-512.png"),
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  // Navigation requests: network-first, fall back to cached shell offline.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request).catch(() => caches.match(withBasePath("/")))
    );
    return;
  }

  // Static assets: cache-first, then update cache in background.
  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
