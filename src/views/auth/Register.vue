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
              <!-- <transition
                appear
                name="fadeout">
                <img
                  class="aws-logo"
                  style="width:140px;height:140px"
                  src="../../../static/logo.png">
              </transition> -->
              <h3 class="mb-3 text-xs-center grey--text hidden-xs-only">Andrews Administration</h3>
              <!-- <h3 class="mb-3 text-xs-center grey--text hidden-xs-only">using Amazon Cognito and Vue.js with Material Design</h3> -->
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
                    {{ errmsg }}
                  </v-alert>
                  <v-card-title primary-title>
                    <div>
                      <!-- <h4 class="headline mb-0">Andrews Admin Application</h4> -->
                    </div>
                  </v-card-title>
                  <v-card-text>
                    <v-form v-model="valid">
                      <v-text-field
                        v-model="humanityID"
                        :rules="humanityIDRules"
                        label="Humanity ID"
                        hint="Click on your profile at humanity.com and type in 7 digit code at end"
                        required/>
                      <v-text-field
                        v-model="humanityUsername"
                        :rules="humanityRules"
                        label="Humanity Username"
                  
                        required/>
                      <v-text-field
                        v-model="humanityPassword"
                        :rules="humanityRules"
                        label="Humanity Password"
              
                        required/>
                      <v-btn
                        block
                        class="mt-3 mb-3"
                        outline
                        color="secondary"
                        @click.native="verifyHumanity">Submit</v-btn>
                      <v-alert
                        v-model="showConfirmation"
                        outline
                        type="info"
                        dismissible
                        class="ml-3 mr-3">
                        <v-text-field
                          v-model="code"
                          label="Confirmation Code"
                          required/>
                        <v-btn
                          block
                          class="mt-3 mb-3"
                          outline
                          color="secondary"
                          @click.native="confirmSignup">Submit</v-btn>
                      </v-alert>
                      <v-text-field
                        v-show="validHumanityID"
                        v-model="firstname"
                        disabled
                        label="First Name"
                        required/>
                      <v-text-field
                        v-show="validHumanityID "
                        v-model="lastname"
                        disabled
                        label="Last Name"
                        required/>
                      <v-text-field
                        v-show="validHumanityID "
                        v-model="password"
                        :rules="passRules"
                        :append-icon="hidepw ? 'visibility' : 'visibility_off'"
                        :append-icon-cb="() => (hidepw = !hidepw)"
                        :type="hidepw ? 'password' : 'text'"
                        label="New Password"
                        hint="At least 6 characters"
                        required/>
           
                    </v-form>
                    <!-- <v-btn :loading="loading" :disabled="!valid" block class="mt-3 mb-3" dark color="primary" @click.native="onSubmit()"> -->
                    <v-btn
                      :loading="loading"
                      :disabled="!valid"
                      block
                      class="mt-3 mb-3"
                      dark
                      color="primary"
                      @click.native="onSubmit()">
                      Register
                      <span slot="loader">Connecting...</span>
                    </v-btn>
                    <div>
                      <!-- <router-link :to="'/forgot'">Forgot password?</router-link><br> -->
                      <router-link :to="'/login'">Go to login</router-link>
                    </div>
                  </v-card-text>
                  <!-- <button
                    class="btn btn-outline-dark"
                    @click="authenticate()">Cognito Hosted UI</button> -->

                </v-card>
                <v-card >
                  <v-card-text>
                    <v-form v-model="valid">
                      <v-text-field
                        v-model="code"
                        label="Confirmation Code"
                        hint="Check your email"
                        required/>
                     
                      <v-btn
                        block
                        class="mt-3 mb-3"
                        outline
                        color="secondary"
                        @click.native="confirmSignup">Submit</v-btn>
           
                    </v-form>
                    <!-- <v-btn :loading="loading" :disabled="!valid" block class="mt-3 mb-3" dark color="primary" @click.native="onSubmit()"> -->
                    <v-btn
                      :loading="loading"
                      :disabled="!valid"
                      block
                      class="mt-3 mb-3"
                      dark
                      color="primary"
                      @click.native="onSubmit()">
                      Register
                      <span slot="loader">Connecting...</span>
                    </v-btn>
                    <div>
                      <!-- <router-link :to="'/forgot'">Forgot password?</router-link><br> -->
                      <router-link :to="'/login'">Go to login</router-link>
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
import router from '../../utils/router'
// import * as config from './config'
// eslint-disable-next-line
// var AmazonCognitoIdentity = require('amazon-cognito-identity-js')
import { Auth, API } from 'aws-amplify'
// import Amplify from 'aws-amplify';
// var userPool = []
// var attributeList = []
// var dataEmail = {
//   Name: 'email',
//   Value: ''
// }
// var dataHumanityID = {
//   Name: 'custom:humanity',
//   Value: ''
// }
// var dataSnipeitID = {
//   Name: 'custom:snipeit',
//   Value: ''
// }
export default {
  name: 'Register',
  data: function () {
    return {
      callback: false,
      showerr: false,
      errcode: '',
      // humanityID: '1444044',
      // humanityUsername: 'ash@andrewscarpetcleaning.com',
      // humanityPassword: 'sugarlips42',
      humanityID: '4041624',
      humanityUsername: 'testgroupandrews.com',
      humanityPassword: 'testgroupandrews.com',
      errmsg: '',
      showConfirmation: false,
      humanityInfo: '',
      validHumanityID: false,
      code: '',
      firstname: '',
      lastname: '',
      username: '',
      valid: false,
      snipeitID: '',
      password: '',
      humanityRules: [v => !!v || 'Humanity is required'],
      humanityIDRules: [
        v => !!v || 'HumanityID is required',
        v => v.length === 7 || 'HumanityID must be 7 characters'
        // v => /^(?=.*[0-9])/.test(v) || 'Password must contain at least 1 number',
        // v => /^(?=.*[a-z])/.test(v) || 'Password must contain at least 1 lower case letter',
        // v => /^(?=.*[A-Z])/.test(v) || 'Password must contain at least 1 upper case letter',
        // v => /^(?=.*[!@#$%^&*"])/.test(v) || 'Password must contain at least 1 special character (!@#$%^&*")'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be 6-20 characters'
        // v => /^(?=.*[0-9])/.test(v) || 'Password must contain at least 1 number',
        // v => /^(?=.*[a-z])/.test(v) || 'Password must contain at least 1 lower case letter',
        // v => /^(?=.*[A-Z])/.test(v) || 'Password must contain at least 1 upper case letter',
        // v => /^(?=.*[!@#$%^&*"])/.test(v) || 'Password must contain at least 1 special character (!@#$%^&*")'
      ],
      hidepw: true,
      loader: false,
      loading: false
    }
  },

  computed: {
    // username () {
    //   return (this.firstname.charAt(0) + '.' + this.lastname).toLowerCase()
    // },
    email () {
      return (this.firstname.charAt(0) + '.' + this.lastname).toLowerCase() + '@groupandrews.com'
    }
  },
  watch: {
    errcode () {
      console.log('watched error code: ' + this.errcode)
      if (this.errcode !== '') {
        if (this.errcode === '"UsernameExistsException"') {
          this.errmsg = 'An account with the given email already exists!'
        } else {
          this.errmsg = ' ' + this.errcode
        }
        this.showerr = true
      }
    }
  },
  methods: {
    // createSnipeitUser() {
    //   this.$http
    //     //eslint-disable-next-line
    //     .get(process.env.LAMBDA_API + '/createSnipeitUser', {
    //       params: { first_name: this.firstname, username: this.username }
    //     })
    //     // .get(process.env.LAMBDA_API + '/createSnipeitUser', { params: { user_info: data } })
    //     .then(response => {
    //       console.log(response.payload.id)
    //       return response
    //     })
    //     .catch(error => {
    //       console.error(error)
    //     })
    // },
    verifyHumanity () {
      let apiName = 'dev-serverless-employees'
      let path = '/gethumanitydata'
      let myInit = {
        body: {
          username: this.humanityUsername,
          password: this.humanityPassword,
          userId: this.humanityID
        },
        headers: {
          'Postman-Token': '05b077a8-3669-4de2-b8c6-002176118f50',
          'Cache-Control': 'no-cache',
          'Content-Type': 'application/json'
        }
      }
      API.post(apiName, path, myInit)
        .then(response => {
          // Add your code here
          this.humanityInfo = response
          console.log(response)
          var username = response.username
          this.username = username
          var password = this.humanityPassword
          var dynamoID = response.id
          var phone_number = null
          try {
            phone_number = '+1' + response.cell_phone.replace(/\D/g, '')
          } catch (err) {
            this.errcode = JSON.stringify(err.message)
          }
          // var email = (response.firstname.charAt(0) + '.' + response.lastname).toLowerCase() + '@groupandrews.com'
          var email = 'andrewsgroup2017@gmail.com'
          Auth.signUp({
            username,
            password,
            attributes: {
              'email': email, // optional
              'phone_number': phone_number, // optional - E.164 number convention
              // other custom attributes
             'custom:dynamoID': dynamoID 
            }
          })
            .then(data => {
              console.log(data)
              // this.confirmSignup(username, data.userSub)
              this.showConfirmation = true
   
           

      console.log(this.src)
                .then(result => console.log(result))
                .catch(err => console.log(err))
            })
            .catch(err => (this.errcode = JSON.stringify(err.message)))
        })
        .catch(error => {
          console.log('error msg = ')
          this.errcode = JSON.stringify(error.message)
        })
    },
    confirmSignup () {
      this.showConfirmation = true
      Auth.confirmSignUp(this.username, this.code)
        .then(data => {
          console.log(data)
          router.push('/signin')
        })
        .catch(err => (this.errcode = JSON.stringify(err.message)))
    },
    onSubmit () {
      this.loader = 'loading'
      const l = this.loader
      this[l] = !this[l]

      //   dataEmail.Value = this.email
      //   dataHumanityID.Value = this.humanityID
      //   dataSnipeitID.Value = this.snipeitID.toString()

      // var email = this.email
      // var humanityInfo = this.humanityInfo
      //   var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail)
      //   attributeList.push(attributeEmail)
      //   var attributeHumanityID = new AmazonCognitoIdentity.CognitoUserAttribute(dataHumanityID)
      //   attributeList.push(attributeHumanityID)
      //   var attributeSnipeitID = new AmazonCognitoIdentity.CognitoUserAttribute(dataSnipeitID)
      //   attributeList.push(attributeSnipeitID)
      var username = this.username
      var password = this.password
      Auth.signUp({
        username,
        password
      })
        .then(data => console.log(data))
        .catch(err => console.log(err))

      // Collect confirmation code, then

      //   userPool = new AmazonCognitoIdentity.CognitoUserPool(config.poolData)
      //   this.callback = false
      //   this.errcode = ''

      //   userPool.signUp(this.username, this.password, attributeList, null, (err, result) => {
      //     if (!this.callback) {
      //       this.callback = true
      //       console.log('register callback')
      //       if (err) {
      //         console.log('registration error: ' + JSON.stringify(err))
      //         this.errcode = JSON.stringify(err.code)
      //       } else {
      //         this.message = JSON.stringify(result.message)
      //         this.username = result.user.getUsername()
      //         this.$store.state.username = this.username
      //         router.push('/confirm')
      //       }
      //       this[l] = false
      //       this.loader = null
      //     }
      //   })
    },
    navRreset: function () {
      router.push('/reset')
    },
    getMessage: function () {
      return this.message
    }
  }
}
</script>

<style scoped>
.aws-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
