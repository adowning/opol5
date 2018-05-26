import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth";
import timeModule from "./modules/timeclocks";
// import getAsyncModule from "@liqueflies/vuex-async-module";
// import axios from "axios";
// import productsModule from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    timeclocks: timeModule
    //eslint-disable-next-line
    // clocks: getAsyncModule({ xhr: axios.get })
    // products: productsModule,
  }
  // getters: {
  //   isAuthenticated: state => {
  //     console.log(state)
  //     return state.auth.user.attributes
  //   }
  // }
});
