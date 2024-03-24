// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vite-pwa/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  pwa: {
    manifest: {
      name: "demo PWA",
      short_name: "demo PWA",
      description: "test nuxt 3 PWA",
      icons: [
       {
        src: 'images/icons/login.png',
        sizes: '512x512',
        type: 'image/png',
       }
      ]
    },
    workbox: {
      navigateFallback: "/",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
})
