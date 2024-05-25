
var CACHE_NAME = 'offline_fruitjoor_0007';
var STATIC_FILES = [
    'app.css',
    'app.css',
    'app.js',
    'icon-192.png',
    'icon-512.png',
    'jquery-ui.min.css',
    'jquery-ui.min.js',
    'jquery.min.js',
    // 'jquery.mobile.min.css',
    // 'jquery.mobile.min.js',
    'manifest.webmanifest',
    'audio/slicefruit.ogg',
    'audio/slicefruit.mp3',
    'images/fruit0.png',
    'images/fruit1.png',
    'images/fruit2.png',
    'images/fruit3.png',
    'images/fruit4.png',
    'images/fruit5.png',
    'images/fruit6.png',
    'images/fruit7.png',
    'images/fruit8.png',
    'images/heart.png',
    'images/heart1.png',
    'images/heart2.png',
    'images/ajax-loader.gif'
];
var STATIC_FILES1 = [
    'vendor/bootstrap/css/bootstrap.min.css',
    'vendor/fontawesome-free/css/all.min.css',
    'vendor/animate/animate.min.css',
    'vendor/owl.carousel/assets/owl.carousel.min.css',
    'vendor/owl.carousel/assets/owl.theme.default.min.css',
    'vendor/magnific-popup/magnific-popup.min.css',
    'css/theme.min.css',
    'vendor/rs-plugin/css/settings.css',
    'vendor/rs-plugin/css/layers.min.css',
    'vendor/rs-plugin/css/navigation.min.css',
    'css/skins/default.min.css',
    'css/custom.css',
    // 'css/mapbox-gl.css',


    'vendor/jquery/jquery.min.js',
    'vendor/jquery.appear/jquery.appear.min.js',
    'vendor/jquery.easing/jquery.easing.min.js',
    'vendor/jquery.cookie/jquery.cookie.min.js',
    'vendor/jquery.validation/jquery.validate.min.js',
    'vendor/jquery.lazyload/jquery.lazyload.min.js',
    'vendor/magnific-popup/jquery.magnific-popup.min.js',
    'vendor/vide/jquery.vide.min.js',



    'vendor/popper/umd/popper.min.js',
    'vendor/bootstrap/js/bootstrap.min.js',
    'vendor/common/common.min.js',
    'vendor/isotope/jquery.isotope.min.js',
    'vendor/owl.carousel/owl.carousel.min.js',
    'vendor/vivus/vivus.min.js',
    'vendor/modernizr/modernizr.min.js',
    'js/theme.min.js',
    'vendor/rs-plugin/js/jquery.themepunch.tools.min.js',
    'vendor/rs-plugin/js/jquery.themepunch.revolution.min.js',
    'js/views/view.contact.js',
    'js/theme.init.min.js',
    'js/email.min.js'


    // 'js/mapbox-gl.min.js',
    // 'js/mapbox-gl-language.min.js',
    // 'js/mapbox-gl-rtl-text.min.js',




    //'https://www.googletagmanager.com/gtag/js?id=GTM-WDBKVKK',
    // 'https://maps.googleapis.com/maps/api/mapsjs/gen_204',
    //'https://maps.googleapis.com/maps/api/js?client=google-maps-embed&paint_origin=&libraries=geometry,search&v=3.exp',
    //'https://static.cloudflareinsights.com/beacon.min.js',
    // 'https://maps.googleapis.com/maps/api/js/StaticMapService.GetMapImage?1m2&1i21567181&2i13203031&2e1&3u17&4m2&1u655&2u368&5m5&1e0&5sen&6sfr&10b1&12b1&client=google-maps-embed&token=18803',
    // 'https://maps.googleapis.com/maps/api/js/AuthenticationService.Authenticate?1shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fembed&2sgoogle-maps-embed&7m1&1e0&callback=_xdc_._lkdbea&client=google-maps-embed&token=56423',
    // 'https://maps.googleapis.com/maps/api/js/QuotaService.RecordEvent?1shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fembed&2sgoogle-maps-embed&7sf5v1za&10e1&callback=_xdc_._8hmzt4&client=google-maps-embed&token=45484',
    // 'https://maps.googleapis.com/maps/api/js/QuotaService.RecordEvent?1shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fembed&2sgoogle-maps-embed&7sf5v2x1&10e1&callback=_xdc_._rzq16y&client=google-maps-embed&token=10872',
    // 'https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo?1m6&1m2&1d35.764330638085646&2d51.39178211520965&2m2&1d35.7684326439602&2d51.39681038047523&2u15&4sen&5e2&7b0&8e0&11e289&12e1&13shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fembed&14b1&callback=_xdc_._hqry85&client=google-maps-embed&token=27380',
    // 'https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo?1m6&1m2&1d35.76359938068644&2d51.38823029350587&2m2&1d35.76921265188321&2d51.40036220222146&2u18&4sen&5e0&6sm%40585000000&7b0&8e0&11e289&12e1&13shttps%3A%2F%2Fwww.google.com%2Fmaps%2Fembed&14b1&callback=_xdc_._9l9sgl&client=google-maps-embed&token=59577',
    // 'https://maps.gstatic.com/maps-api-v3/embed/js/47/3/init_embed.js',
    //'https://maps.googleapis.com/maps-api-v3/api/js/47/3/search_impl.js'
    // 'https://unpkg.com/detect-it@4/dist/detect-it.umd.production.js',


];

var MUTABLE_FILES = [
    'index.html'
];


self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            //return cache.addAll(STATIC_FILES);
            STATIC_FILES.forEach(function (item, index) {
                //console.log(item, index);
                cache.add(item);
              });
              return cache;
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            return fetch(event.request).then(
                function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});

self.addEventListener('activate', (event) => {
    var cacheKeeplist = [CACHE_NAME];

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cacheKeeplist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
