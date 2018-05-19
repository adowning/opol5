<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

         <v-flex xs5 offset-xs2>
       <v-card >
           <v-card-title primary-title><div class="headline">Are you sure?</div> </v-card-title>
         <v-card-actions>
          <v-btn flat color="primary"  v-on:click="signOut">Sign Out</v-btn>
          <v-btn flat color="primary"  v-on:click="goBack">Return</v-btn>
        </v-card-actions>
        </v-card>
    </v-flex>
        
   
        </v-layout>
  </v-container>
</template>
              

<script>
import { Auth } from "aws-amplify"
import AmplifyTheme from "./AmplifyTheme"

export default {
	name: "SignOut",
	data() {
		return {
			error: "",
			theme: AmplifyTheme
		}
	},
	computed: {
		authenticated() {
			return this.$store.getters.isAuthenticated
		}
	},
	methods: {
		async signOut(event) {
			try {
				const data = await Auth.signOut()
				console.log(data)
				this.$store.dispatch("resetAll", null)
				this.$router.replace("/Auth/SignIn")
			} catch (err) {
				this.setError(err)
				this.fireAuthNotify(this.error)
			}
		},
		goBack(err) {
			this.$router.replace("/people/Profile")
		},
		setError(err) {
			this.error = err.message || err
		}
	}
}
</script>
