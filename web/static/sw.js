importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "andrews-admin",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/4a26ddefc9e0124d3edd.js",
    "revision": "8117b42c3a9980d99529c110d401ef38"
  },
  {
    "url": "/_nuxt/af87f3482e9d85e5e66e.js",
    "revision": "7f2e29e6df7e37eb9f44a78829ceea92"
  },
  {
    "url": "/_nuxt/fc698ada468abb1db9d7.js",
    "revision": "8dcc369966b68b28c7a80630ab90fda4"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

