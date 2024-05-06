import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute, Route } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'
import CONFIG from './globals/config'

precacheAndRoute(self.__WB_MANIFEST)

const rawgioApi = new Route(
  ({ url }) => url.href.startsWith(CONFIG.BASE_URL),
  new StaleWhileRevalidate({
    cacheName: 'rawgio-api'
  })
)

const rawgioMediaApi = new Route(
    ({ url }) => url.href.startsWith(CONFIG.MEDIA_BASE_URL),
    new StaleWhileRevalidate({
      cacheName: 'rawgio-media-api'
    })
)

registerRoute(rawgioApi)
registerRoute(rawgioMediaApi)

self.addEventListener('install', () => {
  console.log('Service Worker: Installed')
  self.skipWaiting()
})
