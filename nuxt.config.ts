// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  // Ensure we're using universal rendering (SSR) - this is the default
  ssr: true,
  
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
  
  // Optional: Add route rules for optimization
  routeRules: {
    // Homepage can be prerendered at build time since it's static
    '/': { prerender: true },
    // Popup page uses SSR for dynamic query parameter processing
    '/popup': { ssr: true }
  }
})
