// =====================================================
// serviceworker.js — caches the appshell for offline use
// =====================================================

const CACHE_NAME = "mycv-cache-v6";

const ASSETS_TO_CACHE = [
  "./index.html",
  "./manifest.json",
  "./html/index.html",
  "./html/aboutme.html",
  "./html/skills.html",
  "./html/portfolio.html",
  "./html/contact.html",
  "./Style/stylesheet.css",
  "./javascript/app.js",
  "./images/logo.png",
  "./images/profile.jpg",
  "./images/cv-profile.jpeg",
  "./images/icon-circle.png",
  "./images/icon-square-app.png",
  "./images/InitialA.cv.png",
  "./images/icon-72.png",
  "./images/icon-96.png",
  "./images/icon-128.png",
  "./images/icon-152.png",
  "./images/icon-512.png",
  "./images/temp-n-humidity-sensor.jpeg",
  "./images/soil-moisture-sensor.jpeg",
  "./images/water-level-sensor.jpeg",
  "./images/distance-sensor.jpeg",
  "./images/light-sensor.jpeg",
  "./images/digitalart-poster-ui.png",
  "./images/plant-planting.png",
  "./images/classical-spotify-playlist.jpeg",
  "./images/crafting-stickers.png",
  "./images/dancing-performance.png",
  "./images/brunei-tourism-website.png",
  "./images/spark.bn-app-UI.png",
  "./images/to-do-list-mobapp-design.png",
  "./images/readit-wireframe.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Skip non-GET and cross-origin (e.g. OpenStreetMap iframe tiles)
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        }
        return response;
      });
    }).catch(() => caches.match("./html/index.html"))
  );
});
