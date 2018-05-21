import Vue from 'vue'
import { mapGetters } from 'vuex'
Vue.mixin({
	computed: {
	  ...mapGetters({
	    $_AuthUsername: 'auth/loggedinusername',
	    $_isAuthenticated: 'auth/isAuthenticated',
	    $_userVerification: 'auth/userVerification'
	  })
	},
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
