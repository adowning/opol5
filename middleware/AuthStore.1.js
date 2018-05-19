// import Cookie from 'js-cookie'
// import {
//   getTokenFromUser
// } from '../utils/tokens'
// // import axios from 'axios'

// function initialState () {
//   return {
//     user: null,
//     humanity_attributes: null,
//     userVerification: null,
//     timeClockStatus: null,
//     timeClocks: null
//   }
// }

// export const state = () => ({
//   state: initialState
// })

// export const mutations = {
//   RESET(state, value) {
//     // acquire initial state
//     const s = initialState()
//     Object.keys(s).forEach(key => {
//       state[key] = s[key]
//     })
//   },
//   SET_USER(state, user) {
//     state.user = user
//     let token = getTokenFromUser(user)
//     Cookie.set('tokens', token)
//   },
//   SET_VERIFICATION(state, verification) {
//     state.userVerification.push(verification)
//   },
//   SET_HUMANITY_ATTRIBUTES(state, attributes) {
//     state.humanity_attributes = attributes
//   },
//   SET_TIME_CLOCKS(state, clocks) {
//     state.timeClocks = clocks
//   },
//   SET_TIME_CLOCK_STATUS(state, status) {
//     state.timeClockStatus = status
//   }

// }

// export const actions = {
//   logOut(context, value) {
//     context.commit('RESET', value)
//   },
//   setUser(context, value) {
//     // if (value) {
//     value.attributes.humanityUsername = value.attributes['custom:humanityLogin'].split(',')[0]
//     value.attributes.humanityPassword = value.attributes['custom:humanityLogin'].split(',')[1]
//     value.attributes.humanityID = value.attributes['custom:humanityLogin'].split(',')[2]
//     value.attributes['custom:humanityLogin'] = null
//     context.commit('SET_USER', value)
//     // } else {
//     //   context.commit('SET_HUMANITY_ATTRIBUTES', null)
//     //   context.commit('SET_TIME_CLOCKS', null)
//     //   context.commit('SET_TIME_CLOCK_STATUS', null)
//     //   context.commit('SET_USER', value)
//     // }
//   },
//   setHumanityData(context, value) {
//     console.log(value)
//     context.commit('SET_HUMANITY_ATTRIBUTES', value)
//     context.commit('SET_TIME_CLOCK_STATUS', value.clockStatus)
//   },
//   setTimeClocks(context, value) {
//     var clocks = []
//     for (let o of value.data) {
//       // context.commit('SET_TIME_CLOCKS', o)
//       if (o.in_time && o.out_time) {
//         clocks.push(o)
//       }
//     }
//     console.log(clocks)
//     context.commit('SET_TIME_CLOCKS', clocks)
//   },
//   setEmployeeTimeClockStatus(context, value) {
//     console.log(value.data)
//     context.commit('SET_TIME_CLOCK_STATUS', value)
//   },
//   setVerification(context, value) {
//     context.commit('SET_VERIFICATION')
//   }
// }

// export const getters = {
//   loggedinUser(state) {
//     return state.user
//   },
//   isAuthenticated(state) {
//     return Boolean(state.user)
//   },
//   loggedinusername(state) {
//     return (state.user) ? state.user.username : ''
//   },
//   userVerification(state) {
//     return state.userVerification
//   }
// }
