import Cookie from "js-cookie"
import { getTokenFromUser } from "../../utils/tokens"

function initialState() {
  return {
    user: null,
    humanity_attributes: null,
    userVerification: null
  }
}
// export const state = () => ({
//   user: null,
//   humanity_attributes: null,
//   userVerification: null
// })
export const state = () => ({
  // state: initialState
  user: null,
  humanity_attributes: null,
  userVerification: null
})

const getters = {
  loggedinUser: state => state.user,
  isAuthenticated: state => {
    return Boolean(state.user)
  },
  loggedinusername: state => {
    return state.user ? state.user.username : ""
  },
  userVerification: state => state.userVerification
}

const actions = {
  logOut({ commit, state }, value) {
    console.log(state)
    commit("reset", value)
  },
  setUser({ commit, state }, user) {
    console.log(state)
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
    commit("setUser", user)
  },
  setHumanityData({ commit, state }, data) {
    console.log(state)
    commit("SET_HUMANITY_ATTRIBUTES", data)
  },
  setVerification({ commit, state }, verification) {
    console.log(state)
    console.log(verification)

    commit("SET_VERIFICATION")
  }
}
const mutations = {
  reset(state, user) {
    console.log(user)
    const s = initialState()
    Object.keys(s).forEach(key => {
      state[key] = s[key]
    })
  },
  setUser(state, user) {
    state.user = user
    let token = getTokenFromUser(user)
    Cookie.set("tokens", token)
  },
  SET_VERIFICATION(state, verification) {
    state.userVerification.push(verification)
  },
  SET_HUMANITY_ATTRIBUTES(state, attributes) {
    state.humanity_attributes = attributes
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}

// loggedinUser(state) {
//   return state.user
// },
// isAuthenticated(state) {
//   return Boolean(state.user)
// },
// loggedinusername(state) {
//   return (state.user) ? state.user.username : ''
// },
// userVerification(state) {
//   return state.userVerification
// }

// logOut(context, value) {
//   context.commit('RESET', value)
// },

// value.attributes.humanityUsername = value.attributes['custom:humanityLogin'].split(',')[0]
// value.attributes.humanityPassword = value.attributes['custom:humanityLogin'].split(',')[1]
// value.attributes.humanityID = value.attributes['custom:humanityLogin'].split(',')[2]
// value.attributes['custom:humanityLogin'] = null

// RESET(state, value) {
//   // acquire initial state
//   const s = initialState()
//   Object.keys(s).forEach(key => {
//     state[key] = s[key]
//   })
// },
