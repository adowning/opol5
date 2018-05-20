importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "andrews-admin",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/4c9602daa078eb446550.js",
    "revision": "24f493033fe91bd31f93d72677da6f31"
  },
  {
    "url": "/_nuxt/f5f77f36e16424671bcc.js",
    "revision": "79e11f431ed23155c3c04c15f5bfd655"
  },
  {
    "url": "/_nuxt/fc698ada468abb1db9d7.js",
    "revision": "8dcc369966b68b28c7a80630ab90fda4"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

