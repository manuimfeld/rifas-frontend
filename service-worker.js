// service-worker.js

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll([
        // Aquí puedes añadir los archivos y rutas que deseas que se almacenen en caché
        '/',
        '/index.html',
        '/css/style.css',
        '/js/app.js',
        // ...agrega más archivos y rutas según tus necesidades
      ])
    })
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    })
  )
})
