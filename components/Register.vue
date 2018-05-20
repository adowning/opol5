<template>
<v-flex xs12="xs12" sm10="sm10" offset-sm1="offset-sm1" md6="md6" offset-md3="offset-md3">
    <v-card class="card--flex-toolbar">
        <v-toolbar class="white" card="card" prominent="prominent">
            <v-icon>mood</v-icon>
            <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
            <form @keyup.enter="sendRegister">
                <v-text-field type="email" label="Email" v-model="email" required="required"></v-text-field>
                <v-text-field type="password" label="Password" hint="The length must be more than 8 characters" v-model="password" required="required"></v-text-field>
                <v-layout row="row" justify-space-between="justify-space-between"><small>*indicates required field</small>
                    <v-btn info="info" :loading="loading" @click.prevent="sendRegister" :disabled="loading">Sign up</v-btn>
                </v-layout>
                <v-alert error="error" dismissible="dismissible" transition="scale-transition" v-model="alert">{{error}}</v-alert>
            </form>
            <v-layout row="row" justify-space-between="justify-space-between">
                <v-btn small="small" flat="flat" primary="primary" :to="'Login'">Have you an account?</v-btn>
            </v-layout>
        </v-card-text>
    </v-card>
</v-flex>
</template>

<script>
import { mapActions } from 'vuex'
const debug = require('debug')('register')

export default {
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      alert: false,
      error: ''
    }
  },
  methods: {
    ...mapActions({
      registerUser: 'auth/REGISTER_USER'
    }),
    async sendRegister() {
      debug('Sending register form')
      this.loading = true

      try {
        let userConfirmed = await this.registerUser({ email: this.email.trim(), password: this.password.trim() })
        !userConfirmed && this.$router.push({ name: 'verification' })
      } catch (error) {
        debug('Error:', error.message)
        this.error = error.message
        this.alert = true
      }
      this.loading = false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
