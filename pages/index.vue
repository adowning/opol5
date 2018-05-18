<template>
<section class="container">
  <div>
    <app-logo/>
    <h1 class="title">
      andrewsgroup.com
    </h1>
    <h2 class="subtitle">
ANDREWS ADMINISTRATION
    </h2>
    <div class="links">
      <!-- <no-ssr><router-link v-if="!authenticated" to="Auth/SignIn" class="button--grey">SignIn</router-link></no-ssr> -->
      <no-ssr><router-link v-if="authenticated" to="people/Profile" class="button--grey">Continue</router-link></no-ssr>
      <no-ssr><router-link v-if="authenticated" to="Auth/SignOut" class="button--grey">Log Out</router-link></no-ssr>
    </div>

  </div>
</section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  layout: 'nouser',
  middleware: 'need_auth',
  components: {
    AppLogo
  },
  computed: {
    authenticated() {return this.$store.getters.isAuthenticated  }
  },
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, sans-serif; /* 1 */
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
