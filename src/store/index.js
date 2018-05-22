import Vue from 'vue'
import Vuex from 'vuex'
import assets from './modules/assets'
import profile from './modules/profile'
import timeClocks from './modules/timeClocks'
// import auth from './modules/auth'
import auth from './modules/auth'
// import createLogger from '../src/plugins/logger'

Vue.use(Vuex)


const debug = process.env.NODE_ENV !== 'production'

const createStore = () => {
	return new Vuex.Store({
		async nuxtServerInit ({ commit }, { app }) {
			const ip = await app.$axios.$get('http://icanhazip.com')
			commit('SET_IP', ip)
		  },
		modules: {
			assets,
			profile,
			timeClocks,
			auth
		},
		strict: debug,
		// plugins: debug ? [createLogger()] : []
	})
}

export default createStore
