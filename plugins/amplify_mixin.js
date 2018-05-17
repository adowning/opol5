import Vue from "vue"
import { mapGetters } from "vuex"
import AsyncComputed from 'vue-async-computed'
Vue.use(AsyncComputed);

Vue.mixin({
  computed: {
    ...mapGetters({
      $_AuthUser: "loggedinUser",
      $_AuthUsername: "loggedinusername",
      $_isAuthenticated: "isAuthenticated",
      $_userVerification: "userVerification"
      // $_AuthUser: "modules/AuthStore/loggedinUser",
      // $_AuthUsername: "modules/AuthStore/loggedinusername",
      // $_isAuthenticated: "modules/AuthStore/isAuthenticated",
      // $_userVerification: "modules/AuthStore/userVerification"
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
