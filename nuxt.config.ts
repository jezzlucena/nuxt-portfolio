import tailwindcss from '@tailwindcss/vite'
// import VueI18nPlugin from '@intlify/unplugin-vue-i18n'
// import path from 'path'

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
      // VueI18nPlugin.vite({
      //   include: [path.resolve(__dirname, './i18n/locales/**')]
      // })
    ],
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080
  },

  plugins: [
    { src: '~/plugins/jquery.client.js', mode: 'client' }
  ],

  modules: ['@nuxtjs/i18n'],
  i18n: {
    defaultLocale: 'en',
    locales: [ 'en', 'es', 'pt' ],
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  }
})