<template>
<v-app>
  <layout
      v-if="authenticated"
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
      v-if="authenticated"
      app/>
   <dev-footer
      v-if="authenticated"
      app/>     
</v-app>
</template>

<script>
import Layout from "../components/Layout"
import AFooter from "../components/AFooter"
import DevFooter from "../components/DevFooter"
import ComsPanel from "../components/ComsPanel"

export default {
	components: {
		layout: Layout,
		"a-footer": AFooter,
		"coms-panel": ComsPanel,
		"dev-footer": DevFooter
	},
	computed: {
		authenticated() {
			return this.$store.getters.isAuthenticated
		}
	}
}
</script>
