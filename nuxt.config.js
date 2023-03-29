export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BitBox hardware wallet by Shift Crypto 🇨🇭',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Swiss-made hardware and software for easy Bitcoin and cryptocurrency storage.' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://bevacqua.github.io/insignia/dist/insignia.css',
      },
    ],
    script: [{ src: 'https://bevacqua.github.io/insignia/dist/insignia.js' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css

  css: ['~/assets/css/main', '~/assets/css/blogs'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-tags-input', ssr: false },
    { src: '@/plugins/vue-toast.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: { vendor: ['@johmun/vue-tags-input'] },
}
