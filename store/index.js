import  axios from 'axios'
import Vuex from 'vuex'
import {getTokenFromUser} from '../utils/tokens'
import Cookie from 'js-cookie'


const store = () => new Vuex.Store({

	state: {
		loading: false,
		user: null,      
		hardware: null,
		humanity_attributes: null,
		userVerification: null,
		timeClockStatus: null,
		timeClocks: null,
		errors: []
	},
	mutations: {
		SET_FETCH_ERROR(state, value) {
			state.errors.push = value
		},
		RESET_ALL(state, value) {
			const s = initialState()
			Object.keys(s).forEach(key => {
				state[key] = s[key]
			})
		},
		SET_USER(state, value) {
			state.user = value
			let token = getTokenFromUser(value)
			Cookie.set("tokens", token)
		},
		SET_VERIFICATION(state, value) {
			state.userVerification.push(value)
		},
		SET_HUMANITY_ATTRIBUTES(state, value) {
			state.humanity_attributes = value
		}
	},
	actions: {
      
		async humanityData({ commit, state }, { skip, limit }) {
			// signal to the views that we are loading data
			const results = axios('/api/assets/hardware')
			if (results) {
				commit('SET_HUMANITY_ATTRIBUTES', { results, noMoreData: results.length < limit });
			} else {
				commit('SET_FETCH_ERROR', 'humanityData');
			}
		},

		async createUser({ commit, state }, { skip, limit }) {
			// signal to the views that we are loading data
			const results = await app.$axios.$get('/api/assets/createuser')
			if (results) {
				commit('CREATE_USER', { results, noMoreData: results.length < limit });
			} else {
				commit('SET_FETCH_ERROR', 'createUser');
			}
		},
    
		resetAll({ commit, state }, value) {
			commit("RESET_ALL", value)
		},
    
		setUser({ commit, state }, user) {
			user.attributes.humanityUsername = user.attributes[
				"custom:humanityLogin"
			].split(",")[0]
			user.attributes.humanityPassword = user.attributes[
				"custom:humanityLogin"
			].split(",")[1]
			user.attributes.humanityID = user.attributes["custom:humanityLogin"].split(
				","
			)[2]
			user.attributes["custom:humanityLogin"] = null
			commit("SET_USER", user)
		}
	},
	getters: {
		loggedinUser: state => state.user,
		isAuthenticated: state => {
			return Boolean(state.user)
		},
		loggedinusername: state => {
			return state.user ? state.user.username : ""
		},
		userVerification: state => state.userVerification
	},

})


export default store
