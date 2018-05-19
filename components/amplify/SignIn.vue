
<template>
  <v-container grid-list-md class="mt-3">
    <v-layout row wrap justify-center>
      <v-flex xl6 lg10 md10 sm12 xs10>
        <v-card class="pa-2 ml-4 mr-2">
          <v-layout row justify-center>
            <v-layout column align-center>
              <transition appear name="fadeout">
                <img class="aws-logo" style="width:140px;height:140px" src="../../static/logo.png">
              </transition>
              <h3 class="text-xs-center grey--text hidden-xs-only">Andrews Administration</h3>
            </v-layout>
            <v-flex xl6 lg6 md6 sm6>
              <transition appear name="fadeout">
                <v-card class="elevation-0">
                  <v-alert v-model="error" outline type="error" dismissible class="ml-3 mr-3">
                    {{ error }}
                  </v-alert>
                  <v-card-text>
                    <div v-if="!confirmView">

                      <v-text-field v-model="username" label="Username" required/>
                    </div>
                    <v-text-field v-model="password" :append-icon="hidepw ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (hidepw = !hidepw)" :type="hidepw ? 'password' : 'text'" label="Password" hint="At least 6 characters" required/>
                    <v-btn color="#9c27b0" v-on:click="signIn">
                      Sign In
                    </v-btn>
                    <div v-if="confirmView">
                      <div :style="theme.inputRow">
                        <input :style="theme.input" v-model="code" placeholder="Code" v-on:keyup.enter="confirm" />
                      </div>
                      <div :style="theme.actionRow">
                        <button :style="theme.action" v-on:click="confirm" :disabled="!code">Confirm</button>
                      </div>
                    </div>
                    <div :style="theme.footer">
                      <span :style="theme.footerLeft">
                        <a :style="theme.link" v-on:click="forgot">Forgot Password</a>
                      </span>
                      <br>
                      <span :style="theme.footerRight">
                      <a :style="theme.link" v-on:click="signUp">Sign Up</a>
                      </span>
                    </div>
                  </v-card-text>
                </v-card>
              </transition>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Auth, JS } from 'aws-amplify'
import AmplifyTheme from './AmplifyTheme'

export default {
	name: 'Login',
	data() {
		return {
			username: 'testgroupandrews.com',
			password: 'testgroupandrews.com',
			// showerr: false,
			hidepw: true,
			error: '',
			user: null,
			confirmView: false,
			code: '',
			theme: AmplifyTheme
		}
	},
	methods: {
		async signIn(event) {
			this.$nuxt.$loading.start()
			try {
				const user = await Auth.signIn(this.username, this.password)
				const attributes = await Auth.currentUserInfo()
				user.attributes = attributes.attributes
				this.$store.dispatch('setUser', user)
				this.$nuxt.$loading.finish()
				this.$router.push('/people/Profile')
				/* eslint-disable-next-line */
       if (user.challengeNa === 'SMS_MFA') {
					this.confirmView = true
					this.$nuxt.$loading.finish()
          
					return
				}
				// await this.checkUser()
			} catch (err) {
				this.setError(err)
				this.fireAuthNotify(this.error)
				this.$nuxt.$loading.finish()        
			}
		},
		async checkUser() {
			const user = this.user
			if (user) return
			try {
				const data = await Auth.verifiedContact(user)
				this.$store.dispatch('setVerification', data)
				if (!JS.isEmpty(data.verified)) {
					this.$router.push('/people/Profile')
				} else {
					this.$router.push('/Auth/VerifyContact')
				}
			} catch (err) {
				console.log(err)
			}
		},
		async confirm() {
			try {
				await Auth.confirmSignIn(this.user, this.code)
				this.$router.push('/people/Profile')
			} catch (err) {
				this.setError(err)
				this.fireAuthNotify(this.error)
			}
		},
		forgot() {
			this.$router.push('/Auth/forgotPassword')
		},
		signUp() {
			this.$router.push('/Auth/SignUp')
		},
		setError(err) {
			this.error = err.message || err
		}
	}
}
</script>
