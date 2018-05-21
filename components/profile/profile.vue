
<template>
  <div style="textAlign: 'center'">
    <!-- <a-photo-picker
      :defSrc="'/static/avatar.png'"
      :path="'avatars/' + userId"
      :theme="theme"
      v-if="userId"
    /> -->

    <div v-if="user">{{user.username}}</div>

    <a-simple-form
      :path="'profiles/' + userId"
      :fields="fields"
      
      v-if="userId"
    />
  </div>
</template>

<script>
import { Auth, Storage, Logger } from 'aws-amplify'
import SimpleForm from './SimpleForm'
export default {
  name: 'Profile',
  components: {
      'a-simple-form': SimpleForm 
  },
  data () {
    return {
      fields: [
        { type: 'string', name: 'firstName', label: 'FirstName' },
        { type: 'string', name: 'lastName', label: 'LastName' },
        { type: 'lineBreak' },
        { type: 'string', name: 'nickname', label: 'Nickname' }
      ],
    }
  },
  computed: {
    user: function() { return this.$store.state.auth.user },
    userId: function() { return this.$store.state.auth.user.username }
  }
}
</script>
<style scoped>
</style>
