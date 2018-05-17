import Vue from "vue"
import Vuex from "vuex"
// import createLogger from 'vuex/dist/logger'
import AuthStore from "./modules/AuthStore"
import TimeClockStore from "./modules/TimeClockStore"
import createPersistedState from "vuex-persistedstate"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== "production"
export const plugins = [createPersistedState()]
export const store = () =>
  new Vuex.Store({
    state: {
      hardware: {},
      user: null,
      humanity_attributes: null,
      userVerification: null,
      timeClockStatus: null,
      timeClocks: null
    },
    modules: {
      // AuthStore,
      // TimeClockStore,
      // Assets,
      mutations,
      actions
    },

    strict: debug
  })
