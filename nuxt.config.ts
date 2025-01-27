// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@element-plus/nuxt',
  ],

  css: ['~/assets/styles/main.css'],

  colorMode: {
    classSuffix: '',
  },

  elementPlus: {
    /** Options */
  },

  i18n: {
    locales: ['ru', 'en'],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  },

  ssr: true,
})
