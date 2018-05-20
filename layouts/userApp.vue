<template>
<div class="application application--light">
    <v-app class="main" toolbar="toolbar">
        <v-navigation-drawer absolute="absolute" persistent="persistent" light="light" :mini-variant.sync="mini" v-model="drawer" overflow="overflow">
            <v-toolbar class="transparent" flat="flat">
                <v-list class="pa-0">
                    <v-list-tile tag="div">
                        <v-list-tile-content class="content-username">
                            <v-list-tile-title class="username">{{getUsername}}</v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon="icon" @click.native.stop="mini = !mini">
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            <v-list class="pt-0" dense="dense">
                <v-divider></v-divider>
                <v-list-tile v-for="item in items" :key="item.title" :to="item.route">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar class="primary darken-4" fixed="fixed" dark="dark">
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Oposition App</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon="icon" @click.prevent="logout()">
                <v-icon>exit_to_app</v-icon>
            </v-btn>
        </v-toolbar>
        <main>
            <v-container fluid="fluid">
                <transition name="fade" mode="out-in">
                    <nuxt></nuxt>
                </transition>
            </v-container>
        </main>
    </v-app>
</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'app',
  async beforeCreate() {
    try {
      !this.$nuxt.$isServer && await this.$store.dispatch('auth/GET_CURRENT_USER')
    } catch (error) {
      this.$router.push({ name: 'auth-login' })
    }
  },
  methods: {
    ...mapActions({
      logoutUser: 'auth/LOGOUT_USER'
    }),
    async logout() {
      await this.logoutUser()
      this.$router.push({ name: 'auth-login' })
    }
  },
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard', route: 'hello' },
        { title: 'English list', icon: 'view_list', route: 'list' }
      ],
      mini: false,
      right: null
    }
  },
  computed: {
    getUsername() {
      return this.$store.state.auth.user
    }
  }
}
</script>

<style>

</style>
