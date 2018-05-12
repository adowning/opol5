/*
 * Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with
 * the License. A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions
 * and limitations under the License.
 */

<template>
  <v-container
    grid-list-md
    class="mt-3">
    <v-layout
      row
      wrap
      justify-center>
      <v-flex
        xl8
        lg12
        md12
        sm12
        xs12>
        <v-card class="pa-4 ml-4 mr-4">
          <v-layout
            row
            justify-center>
            <v-layout
              column
              align-center>
              <transition
                appear
                name="fadeout">
                <img
                  class="aws-logo"
                  style="width:140px;height:140px"
                  src="../../assets/logo.png">
              </transition>
              <h3 class="mb-3 text-xs-center grey--text hidden-xs-only">Andrews Administration</h3>
            </v-layout>
            <v-flex
              xl6
              lg6
              md6
              sm6>
              <transition
                appear
                name="fadeout">
                <v-card class="elevation-0 pa-2 ml-1 mr-1">
                  <v-alert
                    v-model="showerr"
                    outline
                    type="error"
                    dismissible
                    class="ml-3 mr-3">
                    {{ error }}
                  </v-alert>
                  <v-card-title primary-title/>
                    
                  <v-card-text>
                    <v-form v-model="valid">
                      <v-text-field
                        v-model="username"
                        label="Username"
                        required/>
                      <v-text-field
                        v-model="password"
                        :rules="passRules"
                        :append-icon="hidepw ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (hidepw = !hidepw)"
                        :type="hidepw ? 'password' : 'text'"
                        label="Password"
                        hint="At least 8 characters"
                        required/>
                    </v-form>
                    <v-btn
                      :loading="loading"
                      :disabled="!valid"
                      block
                      class="mt-3 mb-3"
                      dark
                      color="primary"
                      @click.native="signIn">
                      Sign In
                      <span slot="loader">Connecting...</span>
                    </v-btn>
                    <div>
                      <!-- <router-link :to="'/forgot'">Forgot password?</router-link><br> -->
                      <router-link :to="'/auth/register'">Register new user</router-link>
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
import { Auth, Logger, JS } from 'aws-amplify'
import store from '../../utils/store'

const logger = new Logger('SignInComp')

export default {
  name: 'SignIn',
  data () {
    return {
      username: 'testgroupandrews.com',
      password: 'testgroupandrews.com',
      valid: false,
      loading: false,
      showerr: false,
      error: '',
      hidepw: true,
      passRules: [v => !!v || 'Password is required', v => v.length >= 8 || 'Password must be at least 8 characters'],
      user: null,
      confirmView: false,
      code: ''
    }
  },
  methods: {
    loadUserData: async function () {
      console.log()
      // Hub.listen('auth', this, 'MyListener')
      // Hub.dispatch('auth', { event: 'signIn', data: user }, 'Auth')
      // await PubSub.publish('myTopic1', { msg: 'Hello to all subscribers!' })
      let user = await Auth.currentUserInfo()
      // Auth.userAttributes
      console.log( user)
      // Cache.setItem('humanityToken', user, [options])
      // this.$router.push('/')

    },
    signIn: function () {
      const that = this
      Auth.signIn(this.username, this.password)
        .then(user => {
          logger.debug('sign in success', user)
          store.commit('setUser', user)
          return user
        })
        .then(user => {
          that.user = user
          if (user.challengeName === 'SMS_MFA') {
            that.confirmView = true
            return
          }
          this.checkUser()
        })
        .catch(err => this.setError(err))
    },
    checkUser: function () {
      const user = this.user
      if (!user) {
        return
      }

      Auth.verifiedContact(user).then(data => {
        logger.debug('verify result', data)
        store.commit('setUserVerification', data)
        if (!JS.isEmpty(data.verified)) {
          // this.$router.push("/");
          this.loadUserData(user)
        } else {
          this.$router.push('/auth/verifyContact')
        }
      })
    },
    confirm: function () {
      Auth.confirmSignIn(this.user, this.code)
        .then(() => {
          this.$router.push('/')
        })
        .catch(err => this.setError(err))
    },
    forgot: function () {
      this.$router.push('/auth/forgotPassword')
    },
    signUp: function () {
      this.$router.push('/auth/signUp')
    },
    setError: function (err) {
      this.showerr = true
      this.error = err.message || err
    }
  }
}
</script>
