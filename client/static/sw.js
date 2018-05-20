importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "nuxt-hn",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/08610b037e0e6f2bd542.js",
    "revision": "32aa5d7e9530ea7fa86f104d6f93d9a3"
  },
  {
    "url": "/_nuxt/0994cd01c9a395cb664f.js",
    "revision": "1e112c2a729f92dad950f0a88e25733e"
  },
  {
    "url": "/_nuxt/6b54d4266304b9419ff3.js",
    "revision": "f8ae20950c47a071d23c3fd5c89f83fd"
  },
  {
    "url": "/_nuxt/8b937e7e6d067f9dd2ad.js",
    "revision": "991cb7b5b5fdaae9a9a71f436c0e2656"
  },
  {
    "url": "/_nuxt/b6eb261fd5bedbf6c3ea.js",
    "revision": "cedc6d255dc6f3bff8f5a4b5cbb32b63"
  },
  {
    "url": "/_nuxt/cc5634ef18f2d84f777e.js",
    "revision": "ab9cafb8416a9b63e023c8ebe0da6a9b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

