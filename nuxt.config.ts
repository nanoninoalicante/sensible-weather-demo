// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  
  // Explicitly set Vercel preset (optional - auto-detected)
  nitro: {
    preset: 'vercel'
  },
  
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
  
  // Optimized route rules for Vercel
  routeRules: {
    // Homepage - prerendered at build time (static file)
    '/': { 
      prerender: true,
      headers: { 'cache-control': 's-maxage=31536000' } // 1 year cache
    },
    // Popup page - SSR for dynamic query processing
    '/popup': { 
      ssr: true,
      headers: { 'cache-control': 's-maxage=60' } // 1 minute cache
    }
  }
})
