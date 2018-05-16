import Vue from "vue"
import { mapGetters } from "vuex"
Vue.mixin({
  computed: {
    ...mapGetters({
      $_AuthUser: "modules/AuthStore/loggedinUser",
      $_AuthUsername: "modules/AuthStore/loggedinusername",
      $_isAuthenticated: "modules/AuthStore/isAuthenticated",
      $_userVerification: "modules/AuthStore/userVerification"
    })
  },
  methods: {
    fireAuthNotify(msg) {
      this.$notify({
        group: "auth",
        title: "Authentication",
        text: msg || ""
      })
    }
  }
})
