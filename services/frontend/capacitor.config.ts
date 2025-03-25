import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.portfolio.nuxt',
  appName: 'nuxt-portfolio',
  webDir: '.output/public',
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
