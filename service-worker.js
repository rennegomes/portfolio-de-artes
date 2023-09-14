var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/fontawesome-all.min.css',

        './assets/js/main.css',

        './assets/js/breakpoints.min.js',

        './assets/js/browser.min.js',

        './assets/js/jquery.min.js',

        './assets/js/jquery.poptrox.min.js',

        './assets/js/main.js',

        './assets/js/util.js',

        './icons/icone128.png',
        './icons/icone144.png',
        './icons/icone152.png',
        './icons/icone167.png',
        './icons/icone180.png',
        './icons/icone196.png',
        './icons/icone256.png',
        './icons/icone512.png'
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});