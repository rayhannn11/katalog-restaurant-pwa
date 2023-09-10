import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

// Caching the listed asset below
const assetsToCache = [
  "./",
  "./images/hero/hero-image_2.jpg",
  "./images/icons/icon-72x72.jpg",
  "./images/icons/icon-96x96.jpg",
  "./images/icons/icon-128x128.jpg",
  "./images/icons/icon-144x144.jpg",
  "./images/icons/icon-152x152.jpg",
  "./images/icons/icon-192x192.jpg",
  "./images/icons/icon-384x384.jpg",
  "./images/icons/icon-512x512.jpg",
  "./index.html",
  "./favicon.jpg",
  "./app.bundle.js",
  "./app.webmanifest",
  "./sw.bundle.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
