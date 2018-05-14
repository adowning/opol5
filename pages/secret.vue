<template>
<section class="container">
  <div>
    <app-logo/>
    <h1 class="title">
      SECRET PAGE
    </h1>
    <div class="links">
      <router-link to="/" class="button--grey">home</router-link>
      <no-ssr><router-link v-if="$_isAuthenticated" to="Auth/SignOut" class="button--grey">SignOut</router-link></no-ssr>
   <a  v-on:click="notify">Notify Test</a>
    </div>
    <no-ssr><p>{{ $_AuthUsername }}</p></no-ssr>
  </div>
</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  middleware: 'need_auth',
  components: {
    AppLogo
  },
  methods: {
    notify() {
      this.fireAuthNotify('asdf asdf')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
