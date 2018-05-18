module.exports = {
	mode: 'spa',
	head: {title: 'eleopol5'}, // Headers of the page
	loading: false, // Disable default loading bar
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
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		'@/assets/css/global.css'
	],
	manifest: {
		name: 'My Awesome App',
		lang: 'en',
		theme_color: 'green',
	  },
	modules: [
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
	}
}
