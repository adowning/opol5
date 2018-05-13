import Vue from 'vue'
import App from './App.vue'
import router from './utils/router'
import store from './utils/store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Amplify from 'aws-amplify'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)
Amplify.Logger.LOG_LEVEL = 'INFO'

Vue.use(Vuetify, {
  theme: {
    primary: '#3FBA84',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.config.productionTip = false

new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
