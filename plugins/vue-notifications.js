// import Vue from 'vue'
// import VueNotifications from 'vue-notifications'
// // import iziToast from 'izitoast'// https://github.com/dolce/iziToast
// // import 'izitoast/dist/css/iziToast.min.css'
// // function toast ({title, message, type, timeout, cb}) {
// // 	if (type === VueNotifications.types.warn) type = 'warning'
// // 	return iziToast[type]({title, message, timeout})
// // }

// // const options = {
// // 	success: toast,
// // 	error: toast,
// // 	info: toast,
// // 	warn: toast
// // }
// // Vue.use(VueNotifications, options)
// Vue.use(VueNotifications)

import Vue from 'vue'
import Notifications from 'vue-notification/dist/ssr.js'
Vue.use(Notifications)