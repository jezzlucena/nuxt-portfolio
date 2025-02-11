import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: "Portfolio - Jezz Lucena",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  devServer: {
    host: '0.0.0.0',
    port: 80
  },
  plugins: [
    { src: '~/plugins/jquery.client.js', mode: 'client' }
  ]
})
