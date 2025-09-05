// nuxt.config.ts
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Voxel Store',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: ['@/assets/css/main.scss', '@/assets/css/fonts.scss'],
modules: ['@pinia/nuxt'],
  plugins: [
    '@/plugins'
  ],
  components: false, // still valid
  // Instead of axios, recommend using runtimeConfig + $fetch
  runtimeConfig: {
    public: {
      apiBase: 'https://fakestoreapi.com',
    },
  },
  imports: {
    dirs: ['stores'], 
  },
  nitro: {
    storage: {
      data: {
        driver: 'vercelKV'
        /* Vercel KV driver options */
      }
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/css/base" as *;
            @use "@/assets/css/mixins" as *;
          `,
        },
      },
    },
  },
})
