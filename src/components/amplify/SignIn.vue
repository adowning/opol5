
<template>
  <v-container grid-list-md class="mt-3">
    <v-layout row wrap justify-center>
      <v-flex xl6 lg10 md10 sm12 xs10>
        <v-card class="pa-2 ml-4 mr-2">
          <v-layout row justify-center v-if="!$_isAuthenticated">
            <v-layout column align-center>
              <transition appear name="fadeout">
                <img class="aws-logo" style="width:140px;height:140px" src="../../static/logo.png">
              </transition>
                 <h2 class="subtitle">
						ANDREWS ADMINISTRATION<br>
								</h2>
    <h3>{{version}}</h3>
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
          </v-layout >
					<v-layout>
						
				
					
		 </v-layout>
       </v-card>
						  <!-- <v-card color="blue-grey darken-2" class="white--text"  v-show="$_isAuthenticated">
              <v-card-title primary-title>
                <div class="headline">You are already logged in</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </v-card-title>
              <v-card-actions>
          <v-btn flat dark v-on:click="logOut">Log Out</v-btn>
  				<v-btn flat dark v-on:click="continueOn">Continue</v-btn>
              </v-card-actions>
            </v-card>  -->
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Auth, JS } from 'aws-amplify'
import AmplifyTheme from './AmplifyTheme'


var pjson = require('../../../package.json')

export default {
	name: 'Login',
	computed:{
		version() {return pjson.version}		
	},
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
			const username = this.username
			const password = this.password
			this.$nuxt.$loading.start()
			try {//await Auth.signIn(this.username, this.password)
				const cognitoUser = await	this.$store.dispatch('auth/getUser', {username: username, password: password})
				const htoken = await	this.$store.dispatch('auth/getHumanityToken', {username: username, password: password})
				console.log(cognitoUser)
				console.log(htoken)
				// if(user && htoken){
				this.$nuxt.$loading.finish()
				this.$router.push('/people/Profile')
				// }
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
					this.$router.replace('/people/Profile')
				} else {
					this.$router.replace('/AuthStore/VerifyContact')
				}
			} catch (err) {
				console.log(err)
			}
		},
		async confirm() {
			try {
				await Auth.confirmSignIn(this.user, this.code)
				this.$router.replace('/people/Profile')
			} catch (err) {
				this.setError(err)
				this.fireAuthNotify(this.error)
			}
		},
		forgot() {
			this.$router.replace('/Auth/forgotPassword')
		},
		signUp() {
			this.$router.replace('/Auth/SignUp')
		},
		        		continueOn(err) {
			this.$router.replace("/people/Profile")
		},
    		logOut(err) {
			this.$router.replace("/Auth/SignOut")
		},
		setError(err) {
			this.error = err.message || err
		}
	}
}
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