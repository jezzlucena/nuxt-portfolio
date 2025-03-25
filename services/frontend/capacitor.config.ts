import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.portfolio.nuxt',
  appName: 'nuxt-portfolio',
  webDir: '.output/public',
  plugins: {
    CapacitorHttp: {
      enabled: true
    },
    SafeArea: {
      enabled: true,
      customColorsForSystemBars: true
    },
  }
};

export default config;
