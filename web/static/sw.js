importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "andrews-admin",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/0fa1bb4ecebd143103e2.js",
    "revision": "9b701a243c20138ed2fd7b9c73678954"
  },
  {
    "url": "/_nuxt/79debcbd008ee00e31e2.js",
    "revision": "b46ef2b13ac59d16c7cd22582748e085"
  },
  {
    "url": "/_nuxt/fc698ada468abb1db9d7.js",
    "revision": "8dcc369966b68b28c7a80630ab90fda4"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

