import  axios from 'axios'
import humanity from '../api/humanityAPI';
import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      hardware: null,
      user: null,
      humanity_attributes: null,
      userVerification: null,
      timeClockStatus: null,
      timeClocks: null
    },
    actions: {
      async getHumanityData({ commit, state }, { skip, limit }) {
        // signal to the views that we are loading data
        // commit(SET_LOADING);
    
        const results = await humanity.getDetails(skip, limit);
    
        if (results) {
            commit(REMOVE_LOADING, { results, noMoreData: results.length < limit });
        } else {
            // commit(SET_FETCH_ERROR);
            return 'error'

          }
    },
    async createUser({ commit, state }, { skip, limit }) {
        // signal to the views that we are loading data
        commit(PROCESSING_CREATE_USER);
    
        const results = await humanity.createUser(skip, limit);
    
        if (results) {
            commit(RECEIVED_CREATE_USER, { results, noMoreData: results.length < limit });
        } else {
            commit(CREATE_USER_FETCHERRORS);
        }
    },
    
    resetAll({ commit, state }, value) {
        commit("resetAll", value)
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
      }
    },
    mutations: {
      SET_LOADING(state){
        this.loading = true
      },
      REMOVE_LOADING(){
        this.loading = false
      },
      SET_FETCH_ERROR() {
        this.fetchError = true
      },
      resetAll(state, user) {
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
    }
  })
}

export default createStore

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
