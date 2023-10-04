var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',
        './contate.html',

        './assets/css/fontawesome-all.min.css',
        './assets/css/main.css',

        './assets/js/breakpoints.min.js',
        './assets/js/browser.min.js',
        './assets/js/jquery.min.js',
        './assets/js/jquery.poptrox.min.js',
        './assets/js/main.js',
        './assets/js/util.js',

        './images/icons/icone67.png',
        './images/icons/icone128.png',
        './images/icons/icone144.png',
        './images/icons/icone152.png',
        './images/icons/icone167.png',
        './images/icons/icone180.png',
        './images/icons/icone192.png',
        './images/icons/icone196.png',
        './images/icons/icone256.png',
        './images/icons/icone512.png',

        './assets/css/images/bg.jpg',
        './assets/css/images/overlay.png',
        
        './images/fulls/01.jpg',
        './images/fulls/02.jpg',
        './images/fulls/03.jpg',
        './images/fulls/04.jpg',
        './images/fulls/05.jpg',
        './images/fulls/06.jpg',
        
        './images/thumbs/01.jpg',
        './images/thumbs/02.jpg',
        './images/thumbs/03.jpg',
        './images/thumbs/04.jpg',
        './images/thumbs/05.jpg',
        './images/thumbs/06.jpg'
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

});