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
    '/': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/life-story': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/obituary': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/memories': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/**': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/aneurysm': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/cancer-journey': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/childhood': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/family-pictures': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/make-a-wish': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/teenager': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/albums/texas-trip': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
    '/share-a-memory': {
      prerender: true,
      headers: { 'Cache-Control': 'max-age=86400, stale-while-revalidate=608400, s-maxage=86400, immutable, public' },
    },
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
