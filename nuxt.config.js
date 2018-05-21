module.exports = {
	mode: 'spa',
	head: {title: 'AndrewsAdmin',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
	  ],
	  link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
	  ]

	},
	css: [{
		src: '~assets/style/app.styl',
		lang: 'styl'
	}],
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
		// '@nuxtjs/onesignal'
	],
	metaInfo: {
		noscript: [
		  { innerHTML: 'This website requires JavaScript.' }
		]
	  },
	// oneSignal: {
	// 	init: {
	// 	  appId: '5cdf168d-8524-4387-bb6b-00079021d88b',
	// 	  allowLocalhostAsSecureOrigin: true,
	// 	  welcomeNotification: {
	// 		  disable: true
	// 	  }
	// 	}
	// },
	axios: {
		debug: true,
		proxy: true
	},
	workbox: {debug: true,
		dev: true
	},
	proxy: {
		'/api/assets/': {
			target: 'http://47.219.112.177:83/api/v1',
			pathRewrite: {
				'^/api/assets/': ''
			}
		},
		'/api/users/': {
			target: 'https://edwgsi8nll.execute-api.us-east-2.amazonaws.com/dev',
			// target: 'https://canihazip.com',
			pathRewrite: {
				'^/api/users/': ''
			}
		}
		// With options
		// '/api2': { target: 'http://35.172.138.127:82/', ws: false }
	},
	plugins: [{
		src: 'plugins/init.js',
		ssr: false
	},
	{
		src: 'plugins/AuthStorePersist.js',
		ssr: false
	},
	{
		src: 'plugins/mixins.js',
		ssr: false
	},
	{
		src: 'plugins/vue-notifications', ssr: false
	},
	{src: '~/plugins/axios', ssr: false}

	],
	build: {
		extend (config, { isClient }) {
			// Extend only webpack config for client-bundle
			if (isClient) {
				config.devtool = 'eval-source-map'
			}
		}
	},
	render: {
		static: {
		  maxAge: '1y',
		  setHeaders(res, path) {
				if (path.includes('sw.js')) {
			  res.setHeader('Cache-Control', 'public, max-age=0')
				}
		  }
		}
	  },
}
