// import messages from '@intlify/unplugin-vue-i18n/messages'
import en from './locales/en.json'
import es from './locales/es.json'
import pt from './locales/pt.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en, es, pt },
  locales: [
    { code: 'en', iso: 'en', file: 'en.json' },
    { code: 'pt', iso: 'pt', file: 'pt.json' },
    { code: 'es', iso: 'es', file: 'es.json' }
  ],
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  fallbackWarn: false
}))