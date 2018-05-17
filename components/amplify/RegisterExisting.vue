
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
                        <v-flex xl6 lg6 md6 sm6 v-if="!result">
                            <transition appear name="fadeout">
                                <v-card class="elevation-0">
                                    <v-alert v-model="error" outline type="error" dismissible class="ml-3 mr-3">
                                        {{ error }}
                                    </v-alert>
                                    <v-card-text>
                                        <div>
                                            <v-text-field v-model="humanityId" label="Humanity ID" required/>
                                        </div>
                                        <div>
                                            <v-text-field v-model="username" label="Humanity Username" required/>
                                        </div>
                                              <div>
                                 <v-text-field v-model="phone" label="Phone Number" required/>
                                        </div>
                                       
                                        <v-text-field v-model="password" :append-icon="hidepw ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (hidepw = !hidepw)" :type="hidepw ? 'password' : 'text'" label="Humanity Password" hint="At least 6 characters" required/>
                                        <div :style="theme.inputRow">
                                            <v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
                                                <img :src="imageUrl" height="150" v-if="imageUrl" />
                                                <v-text-field label="Profile Picture" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
                                                <input type="file" style="display: none" ref="image" accept="image/*" @change="onFilePicked">
                                            </v-flex>
                                            <!-- <input type="file" id="fileinput" /> -->
                                        </div>
                                        <v-btn color="#9c27b0" v-on:click="verify">
                                           Verify
                                        </v-btn>

                                        <div :style="theme.footer">

                                            <br>
                                            <span :style="theme.footerRight">
                                                <a :style="theme.link" v-on:click="signUp">Back to Sign In</a>
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
import { Auth, JS } from "aws-amplify";
import AmplifyTheme from "./AmplifyTheme";

export default {
  name: "RegisterExisting",
  data() {
    return {
      username: "testgroupandrews.com",
      password: "testgroupandrews.com",
      humanityId: "4041624",
      email: "",
      firstname: "",
      lastname: "",
      result: null,
      phone: "",
      imageUrl: "",
      imageName: "",
      // showerr: false,
      hidepw: true,
      error: "",
      user: null,
      confirmView: false,
      code: "",
      theme: AmplifyTheme
    };
  },
  methods: {
    async verify() {
      this.$nuxt.$loading.start();
      if (!this.imageName) {
      }
      let params = {
        username: this.username,
        password: this.password,
        userId: this.humanityId
      };
      this.$nuxt.$loading.start();
      this.email = "temp@groupandrews.com";
      // var phone_number = this.phone
      this.phone_number = "+19035301197";
      var oldname = this.username;
      if (process.env.NODE_ENV === "development") {
        var random = Math.floor(Math.random() * 100);
        this.username += random.toString();
      }
      var humanityLogin = this.username + ',' + this.password +','+ this.humanityId

      console.log('STARTIG')
      const [cognitoUser, details] = await Promise.all([
        Auth.signUp({
          'username': this.username,
          'password': this.password,
          'attributes': {
            'email': this.email,
            'phone_number': this.phone_number,
             'custom:humanityLogin': humanityLogin
          }
        }),
        this.$axios.$post("/api/users/gethumanitydata", params)
      ]);
 
      var moreData = {};
      // moreData.cognitoUser = cognitoUser;
      moreData.details = details;  
      if (process.env.NODE_ENV === "development") {
        var random = Math.floor(Math.random() * 100);
        this.email = random.toString() + this.email;
      }
      moreData.email = this.email
      moreData.username = this.username
      moreData.password = this.password
      moreData.phoneNumber = this.phone_number
      moreData.humanityId = this.humanityId
      
      console.log(moreData)
       let user = await this.$axios.$post("/api/users/createuser", moreData);
      this.$nuxt.$loading.finish();
      this.result = true;
      this.$router.push("/people/Profile");
    },
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;
      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }
        const fr = new FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0]; // this is an image file that can be sent to server...
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    async signIn(event) {
      this.$nuxt.$loading.finish();
      this.$router.push("/people/Profile");
      /* eslint-disable-next-line */
      if (user.challengeNa / me === "SMS_MFA") {
        this.confirmView = true;
        return;
      }
      await this.checkUser();
    },
    async checkUser() {
      const user = this.user;
      if (user) return;
      try {
        const data = await Auth.verifiedContact(user);
        this.$store.dispatch("modules/AuthStore/setVerification", data);
        if (!JS.isEmpty(data.verified)) {
          this.$router.push("/people/Profile");
        } else {
          this.$router.push("/Auth/VerifyContact");
        }
      } catch (err) {
        console.log(err);
      }
    },
    async confirm() {
      try {
        await Auth.confirmSignIn(this.user, this.code);
        this.$router.push("/people/Profile");
      } catch (err) {
        this.setError(err);
        this.fireAuthNotify(this.error);
      }
    },
    forgot() {
      this.$router.push("/Auth/forgotPassword");
    },
    signUp() {
      this.$router.push("/Auth/SignIn");
    },
    setError(err) {
      this.error = err.message || err;
    }
  }
};
</script>
