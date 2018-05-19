module.exports = {
	mode: 'spa',
	head: {title: 'AndrewsAdmin'}, // Headers of the page
	//loading: false, // Disable default loading bar
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
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
	dev: process.env.NODE_ENV === 'DEV',
	// css: [
	// 	'@/assets/css/global.css'
	// ],
	css: [{
		src: '~assets/style/app.styl',
		lang: 'styl'
	}],
	vendor: [
		'aws-amplify',
		'js-cookie',
		'vue-notification'
	],
	manifest: {
		name: 'My Awesome App',
		lang: 'en',
		theme_color: 'green',
	  },
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@nuxtjs/onesignal'
	],
	metaInfo: {
		noscript: [
		  { innerHTML: 'This website requires JavaScript.' }
		]
	  },
	oneSignal: {
		init: {
		  appId: '5cdf168d-8524-4387-bb6b-00079021d88b',
		  allowLocalhostAsSecureOrigin: true,
		  welcomeNotification: {
			  disable: true
		  }
		}
	},
	axios: {
		debug: true,
		proxy: true
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
		src: '~plugins/init.js',
		ssr: false
	},
	{
		src: '~plugins/AuthStorePersist.js',
		ssr: false
	},
	{
		src: '~plugins/mixins.js',
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
