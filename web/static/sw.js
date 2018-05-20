importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/9e84b1ce0c9a9b02c1a4.js",
    "revision": "a3c5550cb1f32bf353fc341c1bf7282e"
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

