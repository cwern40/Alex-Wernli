// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Alex Wernli Memorial',
      htmlAttrs: {
        lang: 'en',
      },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@nuxt/eslint', '@nuxt/content', 'nuxt-nodemailer'],
  colorMode: {
    preference: 'light',
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'],
    },
  },
  nodemailer: {
    from: '"Alex Wernli Memorial Site" <contact@alexwernlimemorial.com>',
    host: 'smtp.sendgrid.net',
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  },
  routeRules: {
    '/': { prerender: true },
    '/life-story': { prerender: true },
    '/obituary': { prerender: true },
    '/memories': { prerender: true },
    '/albums/**': { prerender: true },
    '/share-a-memory': { prerender: true },
  },
  nitro: {
    compressPublicAssets: true,
    publicAssets: [
      {
        dir: 'public',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      },
    ],
  },
});
