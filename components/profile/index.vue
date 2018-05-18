<template>
  <v-container
    grid-list-md
    class="mt-3">
    <v-layout
      row
      wrap>
      <v-flex
        xl12
        lg12
        md12
        sm12
        xs12>
        <v-card class="elevation-0 transparent pa-4 ml-4 mr-4">
                <div class="headline mb-2">User Profile</div>

          <v-layout
            row
            justify-center>
            <v-flex
              xl4
              lg4
              md4
              sm4
              class="hidden-xs-only">
              <v-card class="elevation-0 mr-2 transparent">
                <!-- 140x140 -->
                <div class="body-1"></div>
            <v-card>
        <v-card-media :src="userModel.avatar_url" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{userModel.name.first}}, {{userModel.name.last}}</h3>
            <!-- <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div> -->
          </div>
        </v-card-title>
        <!-- <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions> -->
      </v-card>
              </v-card>
            </v-flex>
            <v-flex
              xl8
              lg8
              md8
              sm8>
              <v-card class="mb-2">
                <v-toolbar
                  dense
                  class="elevation-1">
                  <v-toolbar-title>Personal Details</v-toolbar-title>
                </v-toolbar>
                <app-user-name
                  :name="userModel.name"
                  @updateName="updateName($event)"/>
                <v-divider/>
                <app-user-email
                  :email="userModel.emailAddress"/>
                <v-divider/>
                <!-- <app-birth-date
                  :birthdate="userModel.birthDate"
                  :caption="'Birth Date'"
                  @updateBirthDate="updateBirthDate($event)"/> -->
                <v-divider/>
                <app-phone-number
                  :phone="userModel.phoneNumber"
                  @updatePhoneNumber="updatePhone($event)"/>
                <v-divider/>
                <app-address
                  :address="userModel.address"
                  :caption="'Home Address'"
                  @updateAddress="updateAddress($event, 'home')"/>
                <v-divider/>
              </v-card>
              <!-- <v-card class="mb-2 mt-4">
                <v-toolbar
                  dense
                  class="elevation-1">
                  <v-toolbar-title>Custom Attributes</v-toolbar-title>
                  <v-spacer/>
                  <v-btn
                    icon
                    small
                    dark
                    color="indigo mr-4"
                    @click="addCustomForm =! addCustomForm">
                    <v-icon
                      dark
                      small>add</v-icon>
                  </v-btn>
                </v-toolbar>
                <template v-for="(item, index) in userModel.custom">
                  <app-custom
                    :key="index"
                    :obj="item"
                    :new-entry="false"
                    :caption="'Custom Atribute' + ' ' + index"
                    @update="updateCustom($event, index)"
                    @delete="deleteCustom(index)"/>
                </template>
              </v-card> -->
              <v-dialog
                v-model="addCustomForm"
                max-width="500px">
                <v-card>
                  <v-toolbar
                    dense
                    class="elevation-0">
                    <v-toolbar-title>Add Custom Attribute</v-toolbar-title>
                  </v-toolbar>
                  <app-custom
                    :obj="{ prop1: '', prop2: '', prop3: '', prop4: '', prop5: '' }"
                    :new-entry="true"
                    :caption="'Custom Attribute'"
                    @add="addCustom($event)"
                    @close="addCustomForm =! addCustomForm"/>
                </v-card>
              </v-dialog>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import userName from './name.vue'
import userEmail from './email.vue'
import birthDate from './birthdate.vue'
import phoneNumber from './phone.vue'
import address from './address.vue'
import custom from './custom.vue'
// import axios from 'axios'
// eslint-disable-next-line
var AmazonCognitoIdentity = require('amazon-cognito-identity-js')
export default {
  components: {
    'app-user-name': userName,
    'app-user-email': userEmail,
    'app-birth-date': birthDate,
    'app-phone-number': phoneNumber,
    'app-address': address,
    'app-custom': custom
  },
  // asyncData (context) {
  //   return { project2: 'nuxt' }
  // },
  data: () => ({
    userModel: {
      name: { first: '', middle: '', last: '' },
      emailAddress: '',
      project: 'default',
      birthDate: '',
      phoneNumber: { mobile: '', business: '', home: '' },
      address: {
        line: '',
        city: '',
        state: '',
        zipcode: '',
        country: ''
      },
      custom: []
    },
    addCustomForm: false
  }),

  beforeMount: function() {
    this.getAttributes()
    // }
  },
  methods: {
    getAttributes: function() {
      this.mapAttributes(this.$store.state.humanity_attributes)
    },
    mapAttributes: function(result) {
      // this.userModel = result
      this.userModel.emailAddress = 'info@andrewsgroup.com'
      this.userModel.avatar_url = result.avatar_url
      this.userModel.address = {
        line: result.line || 'NA',
        city: result.city || 'NA',
        state: result.state || 'NA',
        zipcode: result.zipcode || 'NA',
        country: result.country || 'NA'
      }
      console.log(this.userModel.address)
      this.userModel.name = {
        first: result.firstname,
        middle: result.middle_name,
        last: result.lastname
      }
      this.userModel.phoneNumber = {
        mobile: result.cell_phone,
        home: result.cell_phone,
        business: result.cell_phone
      }
      // this.userModel.name.last = result.lastname
      // this.userModel.name.emailAddress = result.lastname

      // for (let attribute of result) {
      //   if (attribute.Name === 'given_name') {
      //     this.userModel.name.first = attribute.Value
      //   } else if (attribute.Name === 'middle_name') {
      //     this.userModel.name.middle = attribute.Value
      //   } else if (attribute.Name === 'family_name') {
      //     this.userModel.name.last = attribute.Value
      //   } else if (attribute.Name === 'birthdate') {
      //     this.userModel.birthDate = attribute.Value
      //   } else if (attribute.Name === 'email') {
      //     this.userModel.emailAddress = attribute.Value
      //   } else if (attribute.Name === 'custom:phone_numbers') {
      //     this.userModel.phoneNumber = JSON.parse(attribute.Value)
      //   } else if (attribute.Name === 'custom:home_address') {
      //     this.userModel.homeAddress = JSON.parse(attribute.Value)
      //   } else if (attribute.Name === 'custom:business_address') {
      //     this.userModel.businessAddress = JSON.parse(attribute.Value)
      //   } else if (attribute.Name === 'custom:custom_attribute') {
      //     this.userModel.custom = JSON.parse(attribute.Value)
      //   }
      //   console.log('property:' + attribute.Name + ' value:' + attribute.Value)
      // }
    },
    updateName: function(name) {
      console.log('updating name...')
      let attributeList = []
      let attributeFirstName = { Name: 'given_name', Value: name.first }
      let attributeMiddleName = { Name: 'middle_name', Value: name.middle }
      let attributeLastName = { Name: 'family_name', Value: name.last }
      let firstName = new AmazonCognitoIdentity.CognitoUserAttribute(
        attributeFirstName
      )
      let middleName = new AmazonCognitoIdentity.CognitoUserAttribute(
        attributeMiddleName
      )
      let lastName = new AmazonCognitoIdentity.CognitoUserAttribute(
        attributeLastName
      )
      attributeList.push(firstName)
      attributeList.push(middleName)
      attributeList.push(lastName)
      this.$store.state.cognitoUser.updateAttributes(
        attributeList,
        (err, result) => {
          if (err) {
            console.log('error: ' + err)
            return
          }
          console.log('call result: ' + result)
          this.userModel.name.first = name.first
          this.userModel.name.middle = name.middle
          this.userModel.name.last = name.last
        }
      )
    },
    updateBirthDate: function(date) {
      console.log('updating birthday date...')
      let attributeList = []
      let attributeBirthDate = { Name: 'birthdate', Value: date }
      let birthDate = new AmazonCognitoIdentity.CognitoUserAttribute(
        attributeBirthDate
      )
      console.log(birthDate)
      attributeList.push(birthDate)
      this.$store.state.cognitoUser.updateAttributes(
        attributeList,
        (err, result) => {
          if (err) {
            console.log('error: ' + err)
            return
          }
          this.userModel.birthDate = date
        }
      )
    },
    updatePhone: function(phone) {
      console.log('updating phone number...')
      var attributeList = []
      var phoneNumbers = JSON.stringify(phone)
      var attributePhoneNumber = {
        Name: 'custom:phone_numbers',
        Value: phoneNumbers
      }
      var phoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
        attributePhoneNumber
      )
      attributeList.push(phoneNumber)
      this.$store.state.cognitoUser.updateAttributes(
        attributeList,
        (err, result) => {
          if (err) {
            console.log('error: ' + JSON.stringify(err))
            return
          }
          console.log('call result: ' + result)
          this.userModel.phoneNumber = JSON.parse(JSON.stringify(phone))
        }
      )
    },
    updateAddress: function(newAddress, type) {
      console.log('updating address...')
      let attributeList = []
      let addressJSON = ''
      if (type === 'home') {
        addressJSON = JSON.stringify(newAddress)
      } else if (type === 'business') {
        addressJSON = JSON.stringify(newAddress)
      } else {
        return
      }
      var attributeAddress = {
        Name: 'custom:' + type + '_address',
        Value: addressJSON
      }
      var address = new AmazonCognitoIdentity.CognitoUserAttribute(
        attributeAddress
      )
      attributeList.push(address)
      this.$store.state.cognitoUser.updateAttributes(
        attributeList,
        (err, result) => {
          if (err) {
            console.log('error: ' + JSON.stringify(err))
            return
          }
          console.log('call result: ' + result)
          if (type === 'home') {
            console.log('home address updated')
            this.userModel.homeAddress = JSON.parse(JSON.stringify(newAddress))
          } else if (type === 'business') {
            console.log('business address updated')
            this.userModel.businessAddress = JSON.parse(
              JSON.stringify(newAddress)
            )
          }
        }
      )
    },
    addCustom: function(value) {
      console.log('adding custom attribute ...')
      let newCustom = this.userModel.custom.slice()
      newCustom.push(value)
      this.updateCustomAtrribute(newCustom)
    },
    updateCustom: function(value, index) {
      console.log('updating custom attribute ...')
      let newCustom = this.userModel.custom.slice()
      newCustom.splice(index, 1, value)
      this.updateCustomAtrribute(newCustom)
    },
    deleteCustom: function(index) {
      console.log('deleting custom attribute at index ' + index)
      let newCustom = this.userModel.custom.slice()
      if (index > -1) {
        newCustom.splice(index, 1)
      }
      this.updateCustomAtrribute(newCustom)
    },
    updateCustomAtrribute: function(customAttribute) {
      console.log('xxxx')
      let attributeList = []
      let attribute = {
        Name: 'custom:custom_attribute',
        Value: JSON.stringify(customAttribute)
      }
      var newAttribute = new AmazonCognitoIdentity.CognitoUserAttribute(
        attribute
      )
      attributeList.push(newAttribute)
      console.log(this.$store.state.cognitoUser)
      this.$store.state.cognitoUser.updateAttributes(
        attributeList,
        (err, result) => {
          if (err) {
            console.log('error: ' + JSON.stringify(err))
            return
          }
          console.log('call result: ' + result)
          console.log('custom attribute updated')
          this.addCustomForm = false
          this.userModel.custom = customAttribute.slice()
        }
      )
    }
  }
}
</script>
<style scoped>
.tool {
  position: relative;
  padding: 0px;
  margin: 0px;
}
.topright {
  position: absolute;
  top: 0px;
  right: 10px;
}
</style>
