import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/amplify";
import App from "./App.vue";
import router from "./router";
import store from "./vuex/store";
import "./registerServiceWorker";
import "./plugins/vue-notification";
import "./mixins/";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
