import type { Language } from '@/types/Language'

/**
 * Hardcoded localized names of the available languages
 * in each respective tongue, plus a flag emoji.
 */
export const LANGUAGES: {
  [key in Language]: {
    long: string
    short: string
  }
} = {
  "en": {
    long: 'English 🇺🇸',
    short: 'Eng. 🇺🇸',
  },
  "es": {
    long: 'Español 🇪🇸',
    short: 'Esp. 🇪🇸',
  },
  "pt": {
    long: 'Português 🇧🇷',
    short: 'Por. 🇧🇷',
  }
}