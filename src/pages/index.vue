<template>
<section class="container">
  <div>
    <app-logo/>
    <h1 class="title">
      andrewsgroup.com
    </h1>
    <h2 class="subtitle">
ANDREWS ADMINISTRATION<br>
    </h2>
    <h3>{{version}}-{{$_isAuthenticated}}</h3>
    <div class="links">
      <!-- <no-ssr><router-link v-if="!authenticated" to="Auth/SignIn" class="button--grey">SignIn</router-link></no-ssr> -->
      <!-- <router-link v-if="$_isAuthenticated" to="people/Profile" class="button--grey">Continue</router-link>
     <router-link v-if="$_isAuthenticated" to="Auth/SignOut" class="button--grey">Log Out</router-link> -->
       <router-link v-if="!$_isAuthenticated" to="Auth/SignIn" class="button--grey">Sign In</router-link>
     <router-link v-if="!$_isAuthenticated" to="Auth/SignUp" class="button--grey">Sign Up</router-link>


    </div>

  </div>
</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
var pjson = require('../../package.json')
console.log(pjson.version);
export default {
	// layout: 'nouser',
	components: {
		AppLogo
	},
	computed: {
		// authenticated() {return this.$store.getters.AuthSisAuthenticated  },
		version() {return pjson.version}
	},
	methods: {
    		signIn(err) {
			this.$router.replace("/Auth/SignIn")
		},
    		signUp(err) {
			this.$router.replace("/Auth/SignUp")
		},
        		continueOn(err) {
			this.$router.replace("/people/Profile")
		},
    		logOut(err) {
			this.$router.replace("/Auth/SignOut")
		},
	}
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
