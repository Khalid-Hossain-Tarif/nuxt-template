import { i18nConfig } from './i18n.config';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  alias: {
    assets: "/<rootDir>/assets",
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      titleTemplate: '%s Nuxt Template',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt', '@nuxtjs/i18n', '@pinia/nuxt'],

  plugins: ['~/plugins/storeInit.ts'],

  i18n: i18nConfig,

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.VITE_API_BASE_URL,
    }
  },

  // Defaults options
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: "last" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})