/*
 * Modifications copyright (C) 2018 morimolymoly
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
  <div :style="theme.form">
    <h1 :style="theme.header">Sign Up</h1>
    <div :style="theme.inputRow">
      <input :style="theme.input" v-model="username" placeholder="Username" autofocus />
    </div>
    <div :style="theme.inputRow">
      <input :style="theme.input" v-model="password" type="password" placeholder="Password" />
    </div>
    <div :style="theme.inputRow">
      <input :style="theme.input" v-model="email" placeholder="Email" />
    </div>
    <div :style="theme.actionRow">
      <button :style="theme.action" v-on:click="signUp" :disabled="!username || !password">Sign Up</button>
    </div>
    <div :style="theme.footer">
      <div :style="theme.footerLeft">
        <a :style="theme.link" v-on:click="signIn">Back to Sign In</a>
      </div>
      <div :style="theme.footerRight">
        <a :style="theme.link" v-on:click="confirm">Confirm a Code</a>
      </div>
    </div>
  </div>
</template>

<script>
import { Auth, Logger } from 'aws-amplify'
import AmplifyTheme from './AmplifyTheme'

const logger = new Logger('SignUpComp')

export default {
  name: 'SignUp',
  data () {
    return {
      username: '',
      password: '',
      email: '',
      theme: AmplifyTheme,
      error: ''
    }
  },
  methods: {
    async signUp (event) {
      try {
        const data = await Auth.signUp(this.username, this.password, this.email)
        logger.debug('sign up success', data)
        this.$router.push('/Auth/ConfirmSignUp')
      } catch (err) {
        this.setError(err)
        this.fireAuthNotify(this.error)
      }
    },
    signIn () {
      this.$router.push('/Auth/SignIn')
    },
    confirm () {
      this.$router.push('/Auth/ConfirmSignUp')
    },
    setError (err) {
      this.error = err.message || err
    }
  }
}
</script>
