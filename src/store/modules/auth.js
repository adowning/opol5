import Cookie from "js-cookie"
import { getTokenFromUser } from "../../utils/tokens"
import { Auth, API } from "aws-amplify"

export default {
	namespaced: true,
	state: {
		user: null,
		htoken: null
	},
	mutations: {
		SET_USER(state, cognitoUser) {
			state.user = cognitoUser
			let token = getTokenFromUser(cognitoUser)
			Cookie.set("tokens", token)
		},
		SET_HTOKEN(state, htoken) {
			state.htoken = htoken
			console.log(state.htoken)
			// Cookie.set('htoken', htoken)
		},
		SET_VERIFICATION(state, verification) {
			state.userVerification.push(verification)
		}
	},

	actions: {
		// refreshMessage(context) {
		// 	return new Promise((resolve) => {
		// 	  this.$http.get('...').then((response) => {
		// 		context.commit('updateMessage', response.data.message);
		// 		resolve();
		// 	  });
		// 	});
		//   },
		async getHumanityToken(context, value) {
			const body = {
				username: value.username,
				password: value.password,
				userId: value.username
			}
			const htoken = await API.post(
				"dev-opol5-employees",
				"/gethumanitytoken",
				{
					body
				}
			)
			console.log(htoken)
			context.commit("SET_HTOKEN", htoken)
			return htoken
		},
		async getUser(context, value) {
			var username = value.username
			var password = value.password
			const cognitoUser = await Auth.signIn(username, password).catch(err => {
				console.log(err)
			})
			context.commit("SET_USER", cognitoUser)
			return cognitoUser
		},
		setUser(context, value) {
			context.commit("SET_USER", value)
		},
		setHToken(context, value) {
			context.commit("SET_HTOKEN", value)
		},
		setVerification(context, value) {
			context.commit("SET_VERIFICATION")
		}
	},
	getters: {
		loggedinUser(state) {
			return state.user
		},
		loggedinUserHToken(state) {
			return state.htoken
		},
		isAuthenticated(state) {
			return Boolean(state.user)
		},
		loggedinusername(state) {
			return state.user ? state.user.username : ""
		},
		userVerification(state) {
			return state.userVerification
		}
	}
}

// export const state = () => ({
//   user: null,
//   userVerification: []
// })

// export const mutations = {
//   SET_USER (state, user) {
//     state.user = user
//     let token = getTokenFromUser(user)
//     Cookie.set('tokens', token)
//   },
//   SET_VERIFICATION (state, verification) {
//     state.userVerification.push(verification)
//   }
// }

// export const actions = {
//   setUser (context, value) {
//     context.commit('SET_USER', value)
//   },
//   setVerification (context, value) {
//     context.commit('SET_VERIFICATION')
//   }
// }

// export const getters = {
//   loggedinUser (state) {
//     return state.user
//   },
//   isAuthenticated (state) {
//     return Boolean(state.user)
//   },
//   loggedinusername (state) {
//     return (state.user) ? state.user.username : ''
//   },
//   userVerification (state) {
//     return state.userVerification
//   }
// }
