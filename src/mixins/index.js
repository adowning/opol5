import Vue from "vue";
import { mapGetters } from "vuex";
Vue.mixin({
  computed: {
    ...mapGetters({
      $_AuthUser: "auth/getUser",
      $_isAuthenticated: "auth/isAuthenticated",
      $_userVerification: "auth/userVerification"
    })
  },
  methods: {
    fireNotify(msg, group, type) {
      this.$notify({
        group: group || "all",
        title: "Authentication",
        type: type || "",
        text: msg || "",
        width: "100%"
      });
    }
  }
});
