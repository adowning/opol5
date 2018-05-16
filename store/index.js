import Vue from "vue"
import Vuex from "vuex"
// import createLogger from 'vuex/dist/logger'
import AuthStore from "./modules/AuthStore"
import TimeClockStore from "./modules/TimeClockStore"
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== "production"
export const plugins = [createPersistedState()]
export const store = () =>
  new Vuex.Store({
    modules: {
      AuthStore: AuthStore,
      TimeClockStore
    },
    strict: debug
  })
console.log(store)
