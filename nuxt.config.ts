// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // Enable static generation for Vercel
  nitro: {
    static: true,
    preset: 'vercel'
  },
  
  
  // Add font preloading for critical fonts
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/Roobert-Font/RoobertTRIAL-Regular-BF67243fd53fdf2.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: ''
        },
        {
          rel: 'preload',
          href: '/Roobert-Font/RoobertTRIAL-Bold-BF67243fd540abb.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: ''
        },
        {
          rel: 'preload',
          href: '/Roobert-Font/RoobertTRIAL-Medium-BF67243fd53e059.otf',
          as: 'font',
          type: 'font/otf',
          crossorigin: ''
        }
      ]
    }
  },
  
  // All routes prerendered for static site
  routeRules: {
    '/': { prerender: true },
    '/popup': { prerender: true }  // Static instead of SSR
  }
})
