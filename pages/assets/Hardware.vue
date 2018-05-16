<template>
    <div>
     <Hardware></Hardware>
    </div>
</template>

<script>
import Hardware from '../../components/assets/hardware'

export default {
  data: () => ({

  }),
  components: {
    Hardware
  }
//   async asyncData({ app }) {
//     const assets = await app.$axios.$get('/api/assets/hardware')
//     console.log(assets)
//     return { assets }
//   }
}
</script>
