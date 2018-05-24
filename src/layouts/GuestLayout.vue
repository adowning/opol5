<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>Guest Layout</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Guest",
  data() {
    return {
      fixed: false
    };
  }
};
</script>
