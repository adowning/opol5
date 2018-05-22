<template>
<v-app>
  <layout v-if="$_isAuthenticated" app/>
      <v-content>
        <v-container fluid>
          <nuxt />
        </v-container>
          <notifications group="auth" />
      </v-content>
 <coms-panel right-drawer="false"/>
  <a-footer
      v-if="$_isAuthenticated"
      app/>
   <!-- <dev-footer
      v-if="$_isAuthenticated"
      app/>      -->
</v-app>
</template>

<script>
import Layout from "../components/Layout"
import AFooter from "../components/AFooter"
// import DevFooter from "../components/DevFooter"
import ComsPanel from "../components/ComsPanel"

export default {
	components: {
		layout: Layout,
		"a-footer": AFooter,
		"coms-panel": ComsPanel,
		// "dev-footer": DevFooter
	}
}
</script>
