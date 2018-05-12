<template>
  <component :is="component">
    <slot />
  </component>
</template>

<script>
import Layout from "./components/Layout"
export default {
  name: "App",
  components: {
    Layout
  },
  computed: {
    component () {
      return Layout
    }
  }
}
</script>
