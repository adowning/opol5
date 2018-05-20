// import Vue from 'vue'
// import Vuex from 'vuex'
// import doAsync from '../async-util'
// import * as types from '../mutation-types'

// Vue.use(Vuex)

// const mutationTypes = {
// 	SUCCESS: 'GET_HARDWARE_SUCCESS',
// 	FAILURE: 'GET_HARDWARE_FAILURE',
// 	PENDING: 'GET_HARDWARE_PENDING'
// }

// export const state = {
// 	hardware: {},
// }
// export const mutations = {
// 	[types.GET_HARDWARE.SUCCESS] (state, hardware) {
// 		state[types.GET_HARDWARE.loadingKey] = false
// 		Vue.set(state, [types.GET_HARDWARE.stateKey], hardware)
// 	},

// 	[types.GET_HARDWARE.PENDING] (state) {
// 		console.log(types.GET_HARDWARE.loadingKey)
// 		Vue.set(state, types.GET_HARDWARE.loadingKey, true)
// 	},
// 	[types.GET_HARDWARE_ASYNC.FAILURE] (state, status) {
// 		state[types.GET_HARDWARE_ASYNC.loadingKey] = false
// 		Vue.set(state, [types.GET_HARDWARE_ASYNC.statusCode], status)		
// 		Vue.set(state, [types.GET_HARDWARE_ASYNC.stateKey],  '')
// 	}
// }
// export const getTitle = (response) => {
// 	return response.data.title
// }

// export const actions = {
// 	getHardware(store) {
// 		doAsync(store, {
// 			url: 'https://jsonplaceholder.typicode.com/posts/1',
// 			mutationTypes: types.GET_HARDWARE
// 		})
// 	}
// }
// // export default {
// // 	state,
// // 	mutations,
// // 	actions
// // }
// // import doAsync from '../async-util'
// // import * as types from '../mutation-types'
// // import Vue from 'vue'


// // export const state = {
// // 	hardwareList: ['adsf', 'adsf']
// // }


// // export const hardwareMutations = {
// // 	SUCCESS: 'GET_HARDWARE_SUCCESS',
// // 	FAILURE: 'GET_HARDWARE_FAILURE',
// // 	PENDING: 'GET_IHARDWARE_PENDING'
// // }



// // Object.keys(types).forEach(type => {
// // 	hardwareMutations[types[type].BASE] = (state, payload) => {
// // 		switch (payload.type) {
// // 		case types[type].PENDING:
// // 			return Vue.set(state, types[type].loadingKey, payload.value)

// // 		case types[type].SUCCESS:
// // 			console.log(payload)
// // 			Vue.set(state, types[type].statusCode, payload.statusCode)
// // 			return Vue.set(state, types[type].stateKey, payload.data)

// // 		case types[type].FAILURE:
// // 			return Vue.set(state, types[type].statusCode , payload.statusCode)
// // 		}
// // 	}
// // })


// // export const getOneItemOnly = (response) => {
// // 	return response.data.title
// // }


// // export const actions = {
// // 	getHardware(store, user) {
// // 		return doAsync(
// // 			store, { 
// // 				user, mutationTypes: types.GET_HARDWARE, callback: getOneItemOnly
// // 			})
// // 	}
// // }