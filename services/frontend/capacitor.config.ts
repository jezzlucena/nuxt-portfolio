import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.portfolio.nuxt',
  appName: 'Jezz\'s Portfolio',
  webDir: '.output/public',
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true
    },
    CapacitorCookies: {
      enabled: true
    }
  }
};

export default config;
