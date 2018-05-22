/* eslint no-param-reassign: 0, max-len: 0 */

// const serverlessConfig = yaml("./serverless.yml");
// const awsRegion = serverlessConfig.provider.region;
// const awsS3AssetsBucketName =
//   serverlessConfig.resources.Resources.AssetsBucket.Properties.BucketName;

module.exports = {
	mode: "spa",
	srcDir: "src/",
	env: {
		env: {
			GH_TOKEN: '2aacddf596c79bdf482cc5a9c238e0c56fa905ec'
		}
	},
	head: {
		title: "Nuxt Edge Serverless Template",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "Nuxt-edge Serverless Template"
			}
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
		]
	},
	loadingIndicator: {
		/*
        ** See https://nuxtjs.org/api/configuration-loading-indicator for available loading indicators
        ** You can add a custom indicator by giving a path
        */
		name: 'folding-cube',
		/*
        ** You can give custom options given to the template
        ** See https://github.com/nuxt/nuxt.js/blob/dev/lib/app/views/loading/folding-cube.html
        */
		color: '#DBE1EC',
		background: 'white'
	},
	build: {
		vendor: ['vuetify', 'axios'],
		extend (config, { isClient }) {
			// Extend only webpack config for client-bundle
			if (isClient) {
			  config.devtool = 'sourcemap'
			}
		  }
	},
	modules: ["@nuxtjs/axios" ],
	axios: {
		debug: true,
		proxy: true
	  },
	plugins: [
		{ src: '~plugins/init.js', ssr: false },
		{ src: '~plugins/AuthStorePersist.js', ssr: false },
		{ src: '~plugins/mixins.js', ssr: false },
		{ src: '~plugins/vue-notification', ssr: false }
	],
	css: [
		{ src: '~assets/style/app.styl', lang: 'styl' }
	],
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
	  }
};
