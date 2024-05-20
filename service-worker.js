// Caution! Be sure you understand the caveats before publishing an application with
// offline support. See https://aka.ms/blazor-offline-considerations

self.addEventListener('install', event => event.waitUntil(onInstall(event)));
self.addEventListener('activate', event => event.waitUntil(onActivate(event)));
self.addEventListener('fetch', event => event.respondWith(onFetch(event)));


const cacheName = "offlineFruitGame";
async function onInstall(event) {
    console.info('Service worker: Install');

    // Fetch and cache all matching items from the assets manifest
    const assets = ["app.css","app.css","app.js","icon-192.png","icon-512.png","index.html","jquery-ui.css","jquery-ui.min.js","jquery.min.js","manifest.webmanifest","audio/slicefruit.ogg","audio/slicefruit.mp3","images/fruit0.png","images/fruit1.png","images/fruit2.png","images/fruit3.png","images/fruit4.png","images/fruit5.png","images/fruit6.png","images/fruit7.png","images/fruit8.png","images/heart.png","images/heart1.png","images/heart2.png"];
    event.waitUntil(
      addResourcesToCache(assets),
    );
}
const addResourcesToCache = async (resources) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(resources);
};
async function onActivate(event) {
    console.info('Service worker: Activate');

    // Delete unused caches
    const cacheKeys = await caches.keys();
    await Promise.all(cacheKeys
        .filter(key => key === cacheName)
        .map(key => caches.delete(key)));
}
async function onFetch(event) {
    let cachedResponse = null;
    if (event.request.method === 'GET') {
        // For all navigation requests, try to serve the host HTML from cache,
        // unless that request is for an offline resource.
        // If you need some URLs to be server-rendered, edit the following check to exclude those URLs
        const shouldServeHostHtml = event.request.mode === 'navigate'
            && !manifestUrlList.some(url => url === event.request.url);

        const request = shouldServeHostHtml ? baseUrl : event.request;
        const cache = await caches.open(cacheName);
        cachedResponse = await cache.match(request);
    }

    return cachedResponse || fetch(event.request);
}
/* Manifest version: DvXHCIat */
