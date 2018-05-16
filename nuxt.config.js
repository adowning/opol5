module.exports = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: 'aws-amplify-test',
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'AWS AMPLIFY ON Nuxt.js'
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
    }

    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#3B8070'
  },
  // loading: '~/components/loading.vue',
  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },
  css: [{
    src: '~assets/style/app.styl',
    lang: 'styl'
  }],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.devtool = 'source-map'
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'aws-amplify',
      'js-cookie',
      'vue-notification'
    ]
  },
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    debug: true,
    proxy: true
  },
  proxy: {
    // Simple proxy
    // '/api/': 'http://35.172.138.127:82/api/v1',
    '/api/assets/': {
      target: 'http://47.219.112.177:83/api/v1',
      pathRewrite: {
        '^/api/assets/': ''
      }
    }

    // With options
    // '/api2': { target: 'http://35.172.138.127:82/', ws: false }
  },
  plugins: [{
    src: '~plugins/amplify_init.js',
    ssr: false
  },
  {
    src: '~plugins/AuthStorePersist.js',
    ssr: false
  },
  {
    src: '~plugins/amplify_mixin.js',
    ssr: true
  },
  {
    src: '~plugins/vue-notification'
  },
  {
    src: '@/plugins/vuetify',
    ssr: false
  },

  '~/plugins/axios'

  ]
}
