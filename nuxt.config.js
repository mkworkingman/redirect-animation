export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'redirect-animation',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/reset',
    '@/assets/style/utility',
    '@/assets/style/colors',
    '@/assets/style/logo',
    '@/assets/style/fonts',
    '@/assets/style/layout-blocks',
    '@/assets/style/transitions'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {},
      },
      preset: {
        stage: 1,
        features: {
          'nesting-rules': true
        },
        autoprefixer: {
          grid: 'autoplace'
        },
        browsers: ['defaults','not ie > 0']
      }
    }
  }
}
