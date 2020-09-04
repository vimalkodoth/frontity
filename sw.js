importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);
const version = 5;
const cacheName = `codeinjavascript-${version}`;

workbox.routing.registerRoute(
  /^.*\/(?:(?!\bsw\b).)*\.(?:js|css)$/, //except sw.js
  workbox.strategies.staleWhileRevalidate({
    cacheName,
    plugins: [
      new workbox.expiration.Plugin({
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 Days
      }),
      new workbox.backgroundSync.Plugin("codeinjavascript.static.scripts"),
    ],
  })
);

workbox.routing.registerRoute(
  "/",
  workbox.strategies.networkFirst({
    cacheName,
  })
);

workbox.routing.registerRoute(
  new RegExp("^https://api.codeinjavascript.com/.*"),
  workbox.strategies.cacheFirst({
    cacheName,
    plugins: [
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200],
      }),
    ],
  })
);

workbox.precaching.precacheAndRoute([
  {
    url: "static/images/offline-d9a79fcb333314676c41962cd3201c87.png",
  },
]);

self.addEventListener("install", onInstall);
self.addEventListener("activate", onActivate);

function onInstall(evt) {
  console.log(`Service Worker (v${version}) installed`);
  self.skipWaiting();
}

function onActivate(evt) {
  evt.waitUntil(handleActivation());
}

async function handleActivation() {
  await clearCaches();
}

async function clearCaches() {
  var cacheNames = await caches.keys();
  var oldCacheNames = cacheNames.filter(function matchOldCache(cacheName) {
    var [, cacheNameVersion] =
      cacheName.match(/^codeinjavascript-(\d+)$/) || [];
    cacheNameVersion =
      cacheNameVersion != null ? Number(cacheNameVersion) : cacheNameVersion;
    return cacheNameVersion > 0 && version !== cacheNameVersion;
  });
  await Promise.all(
    oldCacheNames.map(function deleteCache(cacheName) {
      return caches.delete(cacheName);
    })
  );
}
