import Cookie from 'js-cookie'
import {
  getTokenFromUser
} from '../utils/tokens'
// import axios from 'axios'

export const state = () => ({
  user: null,
  humanity_attributes: null,
  userVerification: [],
  timeClocks: []
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
    let token = getTokenFromUser(user)
    Cookie.set('tokens', token)
  },
  SET_VERIFICATION(state, verification) {
    state.userVerification.push(verification)
  },
  SET_HUMANITY_ATTRIBUTES(state, attributes) {
    state.humanity_attributes = attributes
  },
  SET_TIME_CLOCKS(state, clock) {
    state.timeClocks.push(clock)
  }
}

export const actions = {
  setUser(context, value) {
    console.log(context.isServer)
    if (value) {
      value.attributes.humanityUsername = value.attributes['custom:humanityLogin'].split(',')[0]
      value.attributes.humanityPassword = value.attributes['custom:humanityLogin'].split(',')[1]
      value.attributes.humanityID = value.attributes['custom:humanityLogin'].split(',')[2]
      value.attributes['custom:humanityLogin'] = null
    }
    context.commit('SET_USER', value)
  },
  setHumanityData(context, value) {
    console.log(value)
    context.commit('SET_HUMANITY_ATTRIBUTES', value)
  },
  setTimeClocks(context, value) {
    console.log(value.data)
    for (let o of value.data) {
      context.commit('SET_TIME_CLOCKS', o)
    }
  },
  setVerification(context, value) {
    context.commit('SET_VERIFICATION')
  }
  // async setHumanityData({
  //   commit
  // }) {
  //   const {
  //     data
  //   } = await axios.post('https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/gethumanitydata', {})
  //   commit('SET_HUMANITY_ATTRIBUTES', data)
  // }
}

export const getters = {
  loggedinUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return Boolean(state.user)
  },
  loggedinusername(state) {
    return (state.user) ? state.user.username : ''
  },
  userVerification(state) {
    return state.userVerification
  }
}
