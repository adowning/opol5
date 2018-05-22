import Cookie from "js-cookie"
import { getTokenFromUser } from "../../utils/tokens"
import { Auth, API } from "aws-amplify"

export default {
	namespaced: true,
	state: {
		clocks: null,
		clockStatus: null
	},
	mutations: {
		SET_TIMECLOCKS(state, clocks) {
			state.clocks = clocks
		},
		SET_TIMECLOCK_STATUS(state, clockStatus) {
			state.clockStatus = clockStatus
			console.log(state.clockStatus)
		}
	},
	actions: {
		async setTimeClocks(context, value) {
			console.log(value)
			context.commit("SET_TIMECLOCKS", value)
			return value
		},
		async setTimeClockStatus(context, value) {
			console.log(value)
			context.commit("SET_TIMECLOCK_STATUS", value)
			return value
    }
	},
	getters: {
		// loggedinUser(state) {
		// 	return state.user
		// },
		// loggedinUserHToken(state) {
		// 	return state.htoken
		// },
		// isAuthenticated(state) {
		// 	return Boolean(state.user)
		// },
		// loggedinusername(state) {
		// 	return state.user ? state.user.username : ""
		// },
		// userVerification(state) {
		// 	return state.userVerification
		// }
	}
}
