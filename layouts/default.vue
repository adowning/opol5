<template>
<v-app>
  <layout
      v-if="$_isAuthenticated"
      app/>
       <!-- <main> -->
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
          <notifications group="auth" />
      </v-content>
    <!-- </main> -->
 <coms-panel right-drawer="false"/>
  <a-footer
      v-if="$_isAuthenticated"
      app/>
</v-app>
</template>

<script>
import Layout from '../components/Layout'
import AFooter from '../components/AFooter'
import ComsPanel from '../components/ComsPanel'

export default {
  components: {
    'layout': Layout,
    'a-footer': AFooter,
    'coms-panel': ComsPanel
  },
  data() {
    return {
      // clipped: true,
      // drawer: true,
      // fixed: false,
      // items: [
      //   { icon: 'apps', title: 'Welcome', to: '/' },
      //   { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
      //   { icon: 'group', title: 'Users', to: '/users' }
      // ],
      // miniVariant: true,
      // right: true,
      // rightDrawer: false,
      // title: 'Vuetify.js'
    }
  }
}
</script>
