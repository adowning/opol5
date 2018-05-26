<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
       
<router-link v-if="!$_isAuthenticated" to="auth/signin" class="button--grey">Sign In</router-link>
<router-link v-if="!$_isAuthenticated" to="Auth/SignUp" class="button--grey">Sign Up</router-link> 

        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
import { Form } from "vue-formio";
export default {
  name: "Home",
  components: { formio: Form },

  data() {
    return {
      options: { readOnly: false },

      submission: {
        data: {
          firstName: "Joe",
          lastName: "Smith",
          email: "joe@example.com"
        }
      }
      //   myForm: {
      //       components: [
      //   {
      //     type: 'textfield',
      //     key: 'UserName',
      //     label: 'First Name',
      //     placeholder: 'Enter your first name.',
      //     input: true
      //   },
      //   {
      //     type: 'textfield',
      //     key: 'lastName',
      //     label: 'Last Name',
      //     placeholder: 'Enter your last name',
      //     input: true
      //   },
      //   {
      //     type: 'button',
      //     action: 'submit',
      //     label: 'Submit',
      //     theme: 'primary'
      //   }
      // ]
      //   }
    };
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
