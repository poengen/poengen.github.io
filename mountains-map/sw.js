importScripts('/mountains-map/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/mountains-map/_nuxt/5c1c8371861fefb564aa.js",
    "revision": "2c87b6c5e466c1d73c3a14d37bd7a72f"
  },
  {
    "url": "/mountains-map/_nuxt/a9a480d32b83b5c2d389.js",
    "revision": "9d649224e906c8675159afab8574b901"
  },
  {
    "url": "/mountains-map/_nuxt/bda0725885856a2871f0.js",
    "revision": "a2755817f2b39a14944203fe1f75911a"
  },
  {
    "url": "/mountains-map/_nuxt/ccbe278d3742e649e2ae.js",
    "revision": "4bd82658e2f97904a9c32308faf4b4f4"
  },
  {
    "url": "/mountains-map/_nuxt/fee1cf70c5779be45ede.js",
    "revision": "0971a7072ce29e583ad19ae4bda6f5c2"
  }
], {
  "cacheId": "mountains-map",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/mountains-map/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/mountains-map/.*'), workbox.strategies.networkFirst({}), 'GET')
