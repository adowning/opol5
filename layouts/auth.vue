<template>
<v-app class="application application--light">
    <main>
        <transition name="fade" mode="out-in">
            <v-card class="grey lighten-5" flat="flat">
                <v-toolbar class="primary elevation-3" dark="dark" extended="extended">
                    <v-toolbar-title>Opposition APP</v-toolbar-title>
                </v-toolbar>
                <v-layout row="row">
                    <nuxt></nuxt>
                </v-layout>
            </v-card>
        </transition>
    </main>
</v-app>
</template>

<script>
export default {
  name: 'app',
  async beforeCreate() {
    if (!this.$nuxt.$isServer && await this.$store.dispatch('auth/GET_CURRENT_USER')) {
      this.$router.push({ name: 'app-hello' })
    }
  }
}
</script>
<style>

</style>
