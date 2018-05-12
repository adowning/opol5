import Vue from "vue"
import App from "./App.vue"
import router from "./utils/router"
import store from "./utils/store"
import "./registerServiceWorker"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
//import { apolloProvider } from "./vue-apollo";
// import { apolloProvider } from "./utils/vue-apollo-appSync"
import Amplify, {Storage } from "aws-amplify"
import aws_exports from "./aws-exports"
// import { PubSub } from 'aws-amplify'
// import { AWSIoTProvider } from 'aws-amplify/lib/PubSub/Providers'
// Amplify.addPluggable(new AWSIoTProvider({
//   aws_pubsub_region: 'us-east-2',
//   aws_pubsub_endpoint: 'wss://xxxxxxxxxxxxx.iot.us-east-2.amazonaws.com/mqtt',
// }))
// PubSub.subscribe('myTopic').subscribe({
//   next: data => console.log('Message received', data),
//   error: error => console.error(error),
//   close: () => console.log('Done'),
// })
// Storage.put('../../assets/logo.png', 'Private Content', {
//   level: 'private',
//   contentType: 'image/png'
// })  

Amplify.configure(aws_exports)

 Amplify.Logger.LOG_LEVEL = "INFO"

// const logger = new Logger("main")

// Auth.currentUserInfo()
//   .then(user => logger.info("Current User Email >> " + user.attributes.email))
//   .catch(err => logger.info(err))

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
})

Vue.config.productionTip = false

// new Vue({
//   el: "#app",
//   provide: apolloProvider.provide(),
//   router,
//   store,
//   template: "<App/>",
//   components: { App }
// });
new Vue({
  // provide: apolloProvider.provide(),
  router: router,
  store,
  render: h => h(App)
}).$mount("#app")
