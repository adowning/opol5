import Vue from "vue";
import App from "./App.vue";
import router from "./utils/router";
import store from "./utils/store";
import "./registerServiceWorker";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
//import { apolloProvider } from "./vue-apollo";
import { apolloProvider } from "./vue-apollo-appSync";
import Amplify, { Auth, Logger } from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

Amplify.Logger.LOG_LEVEL = "INFO";

const logger = new Logger("main");

Auth.currentUserInfo()
  .then(user => logger.info("Current User Email >> " + user.attributes.email))
  .catch(err => logger.info(err));

Vue.use(Vuetify, {
  theme: {
    primary: "#3FBA84",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

Vue.config.productionTip = false;

// new Vue({
//   el: "#app",
//   provide: apolloProvider.provide(),
//   router,
//   store,
//   template: "<App/>",
//   components: { App }
// });
new Vue({
  provide: apolloProvider.provide(),
  router: router,
  store,
  render: h => h(App)
}).$mount("#app");
