<template>
  <v-footer
    flat
    dense
    app>

    <v-toolbar
      color="primary"
      style="max-height: 40px;"
      dense
      dark >
      <v-spacer/>
      <v-badge
        color="red"
        overlap>
        <i class="material-icons orange600">dialpad</i>

      </v-badge>
      <v-spacer/>
      <!-- <v-tooltip bottom>s -->

      <!-- <v-btn slot="activator" icon @click.stop="rightDrawer = !rightDrawer"> -->
      <v-btn class="pr-3" >
        <v-badge
          color="red"
          overlap>
          <span slot="badge">2</span>
          <i class="material-icons orange600">chat</i>
        </v-badge>
      </v-btn>
      <!-- </v-btn> -->
      <!-- <span>2 unread notifications</span> -->
      <!-- </v-tooltip> -->
      <v-menu
        bottom
        left>
        <v-btn
          slot="activator"
          icon>
          <!-- <v-avatar> <img
            :src="src"
            alt="avatar"></v-avatar> -->
          <v-avatar class="white" >
            <v-icon color="primary">person</v-icon>
          </v-avatar>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile

            to="/people/timeclocks">
            <v-list-tile-action>
              <v-icon>person</v-icon>

            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Time Clock</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider/>
          <v-list-tile
            to="/people/Profile">
            <v-list-tile-action>
              <v-icon>person</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Profile</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider/>

          <v-list-tile
            key="lock_open"
            @click="signOut">
            <v-list-tile-action>
              <v-icon>lock_open</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Logout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-footer>

</template>
<script>
import { Auth } from 'aws-amplify'
// import {state} from '../store/AuthStore'
// const logger = new Logger('SignOutComp')
export default {
  name: 'AFooter',
  data: () => ({
    rightDrawer: false,
    src: '../assets/logo.png'
  }),
  computed: {
    // user: function() {
    //   return state.user
    // },
    // userId: function() {
    //   return state.userId
    // }
  },
  watch: {
    // user: function() {
    //   // console.log(val);
    //   this.getPhoto()
    // }
  },
  mounted() {
    this.getPhoto()
  },
  methods: {
    async signOut(event) {
      try {
        const data = await Auth.signOut()
        console.log(data)
        this.$store.dispatch('AuthStore/setUser', null)
        this.$router.replace('/')
      } catch (err) {
        this.setError(err)
        this.fireAuthNotify(this.error)
      }
    },
    setError(err) {
      this.error = err.message || err
    },
    // signOut: function() {
    //   Auth.signOut()
    //     .then(() => {
    //       logger.debug('sign out success')
    //       this.$router.push('/signIn')
    //     })
    //     .catch(err => this.setError(err))
    // },
    getPhoto: function() {
      // Storage.get("avatars/" + this.user.username + ".jpg").then(url => {
      // Storage.get("avatars/" + this.user.username + ".png").then(url => {
      // Storage.get("avatars/logo.png").then(url => {
      //   this.src = url
      //   console.log(this.src)
      // })
      // console.log(this.src)
    }
  }
}
</script>
<style>
.v-footer {
  max-height: 20px;
}
.material-icons.orange600 {
  /* color: #424242; */
  font-size: 38px; /* Preferred icon size */
}
</style>
