import Cookie from 'js-cookie'
import { getTokenFromUser } from '../../utils/tokens'
import { Auth, API } from 'aws-amplify'


async function getHumanityToken(value) { 
	let apiName = 'dev-opol5-employees';
	let path = '/getHumanityToken';
	let myInit = { // OPTIONAL
		body: {username: value.username, password: value.password, userId: value.username}, // replace this with attributes you need
		// headers: {} // OPTIONAL
	}
	console.log(myInit)
	return await API.post(apiName, path, {"username": value.username, "password": value.password, "userId": value.username});

}
export default {
	namespaced: true,
	state: {
		user: null,
		// userVerification: []
	},
	mutations: {
		SET_USER (state, user) {
			state.user = user
			let token = getTokenFromUser(user)
			Cookie.set('tokens', token)
		},
		SET_HOTKEN (state, htoken) {
			state.htoken = htoken
			// Cookie.set('htoken', htoken)
		},
		SET_VERIFICATION (state, verification) {
			state.userVerification.push(verification)
		}
	},

	actions: {
		async logInUser( context, value ){
			var cognitoUser = null
			var htoken = null
			if(value){
				var username = value.username
		     	var password = value.password
				console.log(username + ' ' + password)
					[cognitoUser, htoken] = await Promise.all([
					
						Auth.signIn(
							username,  password
						).catch((err) =>{
							console.log(err)
							// this.fireAuthNotify('Authentication error.')            
						}),
						getHumanityToken(value)
					// this.$axios.$post("/api/users/getHumanityToken", {username: value.username, password: value.password, userId: value.username})
					])
				const attributes = await Auth.currentUserInfo()
				cognitoUser.attributes = attributes.attributes
     			context.commit('SET_USER', value)
     			context.commit('SET_USER', htoken)

			}
		},
	 setUser (context, value) {
	
			context.commit('SET_USER', value)
		},
		setVerification (context, value) {
			context.commit('SET_VERIFICATION')
		}
	},
	getters: {
		loggedinUser (state) {
			return state.user
		},
		isAuthenticated (state) {
			return Boolean(state.user)
		},
		loggedinusername (state) {
			return (state.user) ? state.user.username : ''
		},
		userVerification (state) {
			return state.userVerification
		}
	},
};

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