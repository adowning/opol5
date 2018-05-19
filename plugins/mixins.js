import Vue from 'vue'
import { mapGetters } from 'vuex'
Vue.mixin({
	// computed: {
	//   ...mapGetters({
	//     $_AuthUsername: 'loggedinusername',
	//     $_isAuthenticated: 'isAuthenticated',
	//     $_userVerification: 'userVerification'
	//   })
	// },
	methods: {
		fireAuthNotify (msg) {
			this.$notify({
				group: 'auth',
				title: 'Authentication',
				text: msg || ''
			})
		}
	}
})
