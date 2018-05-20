import Vue from 'vue'
import Vuex from 'vuex'
import doAsync from '../async-util'
import * as types from '../mutation-types'

Vue.use(Vuex)

const mutationTypes = {
	SUCCESS: 'SIGN_IN_USER_SUCCESS',
	FAILURE: 'SIGN_IN_USER_PENDING',
	PENDING: 'SIGN_IN_USER_FAILURE'
}

export const state = {

}
export const mutations = {
	[types.SIGN_IN_USER.SUCCESS] (state, info) {
		state[types.SIGN_IN_USER.loadingKey] = false
		Vue.set(state, [types.SIGN_IN_USER.stateKey], info)
		Vue.set(state, [types.SIGN_IN_USER.statusCode], '200')		
	},

	[types.SIGN_IN_USER.PENDING] (state) {
		console.log(types.SIGN_IN_USER.loadingKey)
		Vue.set(state, types.SIGN_IN_USER.loadingKey, true)
	},
	[types.SIGN_IN_USER.FAILURE] (state, status) {
		state[types.SIGN_IN_USER.loadingKey] = false
		Vue.set(state, [types.SIGN_IN_USER.statusCode], status)		
		Vue.set(state, [types.SIGN_IN_USER.stateKey],  '')
	}
}
export const getTitle = (response) => {
	return response.data.title
}

export const actions = {
	getAsync(store, url) {
		doAsync(store, {
			url,
			mutationTypes: types.SIGN_IN_USER
		})
	}
}
// export default {
// 	state,
// 	mutations,
// 	actions
// }