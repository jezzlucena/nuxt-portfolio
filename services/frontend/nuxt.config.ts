import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ssr: process.env.VITE_DISABLE_SSR !== 'true',

  app: {
    head: {
      title: "Portfolio - Jezz Lucena",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no, viewport-fit=cover',
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      rollupOptions: {
        onLog(level, log, handler) {
          // Ignore sourcemap warnings
          if (log.code === 'SOURCEMAP_BROKEN') {
              return;
          }

          handler(level, log);
        }
      }
    }
  },

  devServer: {
    host: '0.0.0.0',
    port: 8080
  },

  modules: ['@nuxtjs/i18n', '@vueuse/nuxt', 'nuxt-gtag'],
  i18n: {
    defaultLocale: 'en',
    locales: [ 'en', 'es', 'pt' ],
    detectBrowserLanguage: false,
    vueI18n: './i18n.config.ts'
  },
  gtag: {
    id: 'G-BDHVX4N3YQ'
  }
})