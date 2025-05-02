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
  image: {
    provider: 'ipx',
    ipx: {
      maxAge: 60 * 60 * 24 * 365, // 1 year
    },
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
    '/': { prerender: true, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/life-story': { prerender: true, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/obituary': { prerender: true, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/memories': { prerender: true, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/albums/**': { prerender: true, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/share-a-memory': { prerender: true, headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
  },
  nitro: {
    compressPublicAssets: true,
    publicAssets: [
      {
        baseURL: 'img',
        dir: 'public/img',
        maxAge: 60 * 60 * 24 * 365, // 1 year
      },
    ],
  },
});
