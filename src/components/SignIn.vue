<template>
  <v-container grid-list-md class="mt-3">
    <v-layout row wrap justify-center>
      <v-flex xl6 lg10 md10 sm12 xs10>
        <v-card class="pa-2 ml-4 mr-2">
          <v-layout row justify-center v-if="!$_isAuthenticated">

            <v-layout column align-center>
              <transition appear name="fadeout">
                <img class="aws-logo" style="width:140px;height:140px" src="../assets/logo.png">
              </transition>
              <h2 class="subtitle">
                ANDREWS ADMINISTRATION
                <br>
              </h2>
              <h3>{{version}}</h3>
            </v-layout>
            <v-flex xl6 lg6 md6 sm6>
              <transition appear name="fadeout">
                <v-card class="elevation-0">
                  <div :style="theme.error" v-if="error">
      {{ error }}
    </div>
                  <v-card-text>
                    <v-progress-circular v-if="loading" :size="90" :width="9" indeterminate color="primary"></v-progress-circular>
                    <div v-if="!confirmView && !loading">

                      <v-text-field v-model="username" label="Username" required/>
                      <v-text-field v-model="password" :append-icon="hidepw ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (hidepw = !hidepw)"
                        :type="hidepw ? 'password' : 'text'" label="Password" hint="At least 6 characters" required/>
                      <v-btn color="#9c27b0" v-on:click="signIn">
                        Sign In
                      </v-btn>
                    </div>

                    <div v-if="confirmView">
                      <div :style="theme.inputRow">
                        <input :style="theme.input" v-model="code" placeholder="Code" v-on:keyup.enter="confirm" />
                      </div>
                      <div :style="theme.actionRow">
                        <button :style="theme.action" v-on:click="confirm" :disabled="!code">Confirm</button>
                      </div>
                    </div>
                    <div :style="theme.footer">
                      <!-- <span :style="theme.footerLeft">
                        <a :style="theme.link" v-on:click="forgot">Forgot Password</a>
                      </span> -->
                      <br>
                      <!-- <span :style="theme.footerLeft">
                        <a :style="theme.link" v-on:click="signUp">Sign Up</a>
                      </span> -->
                    </div>
                  </v-card-text>
                </v-card>
              </transition>
            </v-flex>
          </v-layout>
          <v-layout>
          </v-layout>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Auth, JS, Logger } from "aws-amplify";
import AmplifyTheme from "./AmplifyTheme";
var pjson = require("../../package.json");
const logger = new Logger("Router");

export default {
  name: "SignIn",
  computed: {
    version() {
      return pjson.version;
    }
  },
  data() {
    return {
      username: "testgroupandrews.com",
      password: "testgroupandrews.com",
      // showerr: false,
      hidepw: true,
      error: "",
      loading: false,
      user: null,
      confirmView: false,
      code: "",
      theme: AmplifyTheme
    };
  },
  methods: {
    async signIn() {
      this.loading = true;
      const that = this;
      Auth.signIn(this.username, this.password)
        .then(user => {
          logger.debug("sign in success", user);
          this.$store.dispatch("auth/setUser", user);
          return user;
        })
        .then(user => {
          that.user = user;
          if (user.challengeName === "SMS_MFA") {
            that.confirmView = true;
            return;
          }
          this.checkUser();
          this.loading = false;
          this.$router.push("/Profile");
        })
        .catch(err => {
          this.loading = false;
          this.setError(err);
        });
    },
    async checkUser() {
      const user = this.user;
      if (user) return;
      try {
        const data = await Auth.verifiedContact(user);
        this.$store.dispatch("setVerification", data);
        if (!JS.isEmpty(data.verified)) {
          this.$router.replace("/people/Profile");
        } else {
          this.$router.replace("/AuthStore/VerifyContact");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async confirm() {
      try {
        await Auth.confirmSignIn(this.user, this.code);
        this.$router.replace("/people/Profile");
      } catch (err) {
        this.setError(err);
        this.fireAuthNotify(this.error);
      }
    },
    // forgot() {
    //   this.$router.replace('/Auth/forgotPassword')
    // },
    // signUp() {
    //   this.$router.replace('/Auth/SignUp')
    // },
    setError: function(err) {
      this.error = err.message || err;
    }
  }
};
</script>
<style scoped>
.subtitle {
  font-weight: 300;
  font-size: 18px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
