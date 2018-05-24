import Vue from "vue";
import Vuex from "vuex";
import authModule from "./modules/auth";
import timeModule from "./modules/timeclocks";
// import productsModule from './modules/products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    timeclocks: timeModule
    // products: productsModule,
  }
  // getters: {
  //   isAuthenticated: state => {
  //     console.log(state)
  //     return state.auth.user.attributes
  //   }
  // }
});
