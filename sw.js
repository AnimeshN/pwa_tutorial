const resorces = [
    '/',
    '/index.html',
    '/test.js',
    '/test.css'
]
self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open('static-files').then(cache =>{
            cache.addAll(resorces)
        })
    )
    
})


self.addEventListener('activate',event =>{
    console.log("activated")
})

self.addEventListener("fetch",event =>{
    event.respondWith(
        caches.match(event.request).then(response =>{
            return response || fetch(event.request)
        })
    )
    
})