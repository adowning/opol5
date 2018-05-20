importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "andrews-admin",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/3c12a10e2bf3f7638f06.js",
    "revision": "f6e113f3bc5874879f3fe1b7bc87acec"
  },
  {
    "url": "/_nuxt/af0f1c8ca79c05086ad4.js",
    "revision": "494840409183a2952f8335cda86038e4"
  },
  {
    "url": "/_nuxt/fc698ada468abb1db9d7.js",
    "revision": "8dcc369966b68b28c7a80630ab90fda4"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

