export default {
  head: {
    title: 'Voxel Store',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/css/main.scss', '@/assets/css/fonts.scss'],
  plugins: [
    { src: '@/plugins/filters.js', ssr: true },
    { src: '@/plugins/vuex-persist-state.js', ssr: false },
  ],
  components: false,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL: 'https://fakestoreapi.com',
  },
  build: {
    loaders: {
      scss: {
        additionalData: `
        @import "@/assets/css/_base.scss";
        @import "@/assets/css/_mixins.scss";
    `,
      },
    },
  },
}
