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


    //   async nuxtServerInit({ state, commit }, { isDev, req, redirect }) {
    //   //   if (isDev) {
    //   //     commit('setApiURI', 'http://localhost:4000')
    //   //   }
    //   //   const hostParts = (req.headers.host || '').replace('.org', '').split('.')
    //   //   // If url like ja.nuxtjs.org
    //   //   if (hostParts.length === 2) {
    //   //     if (hostParts[0] === 'www') return redirect(301, 'https://nuxtjs.org' + req.url)
    //   //     commit('setLocale', hostParts[0])
    //   //   }
    //   //   try {
    //   //     const resReleases = await axios(state.apiURI + '/releases')
    //   //     commit('setGhVersion', resReleases.data[0].name)
    //   //     const resLang = await axios(state.apiURI + '/lang/' + state.locale)
    //   //     commit('setLang', resLang.data)
    //   //     commit('setDocVersion', resLang.data.docVersion)
    //   //     const resMenu = await axios(state.apiURI + '/menu/' + state.locale)
    //   //     commit('setMenu', resMenu.data)
    //   //   } catch (e) {
    //   //     console.error('Error on [nuxtServerInit] action, please run the docs server.') // eslint-disable-line no-console
    //   //   }
    //   // }
    // },

  //   setEmployeeTimeClockStatus({
    //     commit,
    //     state
    //   }, value) {
    //     console.log(value)
    //     var newValue = {}
    //     if (value !== 'in' && value !== 'out') {
    //       if (value.address) {
    //         newValue.clockStatus = value.clockStatus
    //         newValue.clockID = 'blank'
    //         console.log('newval ', newValue)
    //         newValue.updatedAt = moment().format('HH:MM:SS')
    //         commit('SET_TIME_CLOCK_STATUS', newValue)
    //         return 'clocked employee out or in'
    //       } else {
    //         if (value.data.data === 'out') {
    //           newValue.clockStatus = 'out'
    //           newValue.clockID = 'blank'
    //           console.log('newval ', newValue)
    //           newValue.updatedAt = moment().format('HH:MM:SS')
    //           commit('SET_TIME_CLOCK_STATUS', newValue)
    //           return 'clocked employee out'
    //         }
    //         if (value.data.clockStatus === 'in') {
    //           newValue.clockStatus = 'in'
    //           newValue.clockID = value.data.data.id
    //           console.log('newval ', newValue)
    //           newValue.updatedAt = moment().format('HH:MM:SS')
    //           commit('SET_TIME_CLOCK_STATUS', newValue)
    //           return 'clocked employee in'
    //         }
    //         if (value.data.end_timestamp) {
    //           newValue.clockStatus = 'out'
    //           newValue.clockID = 'blank'
    //           console.log('newval ', newValue)
    //           newValue.updatedAt = moment().format('HH:MM:SS')
    //           commit('SET_TIME_CLOCK_STATUS', newValue)
    //           return 'clocked employee out'
    //         } else {
    //           newValue.clockStatus = 'in'
    //           newValue.clockID = value.data.id
    //           console.log('newval ', newValue)
    //           newValue.updatedAt = moment().format('HH:MM:SS')
    //           commit('SET_TIME_CLOCK_STATUS', newValue)
    //           return 'clocked employee in'
    //         }
    //       }
    //     } else {
    //       console.log(value)
    //       if (value === 'out') {
    //         newValue.clockStatus = 'out'
    //         newValue.clockID = 'blank'
    //         console.log('newval ', newValue)
    //         newValue.updatedAt = moment().format('HH:MM:SS')
    //         commit('SET_TIME_CLOCK_STATUS', newValue)
    //         return 'clocked employee out'
    //       } else {
    //         console.log('error')
    //       }
    //     }
    //   }
    // },

// import Vue from "vue"
// import Vuex from "vuex"
// // import createLogger from 'vuex/dist/logger'
// // import AuthStore from "./modules/AuthStore"
// // import TimeClockStore from "./modules/TimeClockStore"
// // import createPersistedState from "vuex-persistedstate"
// import actions from "./actions"
// import mutations from "./mutations"

// Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== "production"
// // export const plugins = [createPersistedState()]
// export const store = () =>
//   new Vuex.Store({
//     state: {
//       hardware: {},
//       user: null,
//       humanity_attributes: null,
//       userVerification: null,
//       timeClockStatus: null,
//       timeClocks: null
//     },
//     modules: {
//       // AuthStore,
//       // TimeClockStore,
//       // Assets,
//       mutations,
//       actions
//     },

//     strict: debug
//   })
