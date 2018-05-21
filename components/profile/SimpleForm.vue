<template>
  <div >
    <div v-for="field in fields">
      <div v-if="field.type === 'string'">
        <label >{{field.label || field.name}}</label>
        <input
          v-model="profile[field.name]"
          v-bind:placeholder="field.label || field.name"
        />
      </div>
      <div  v-if="field.type === 'lineBreak'"></div>
    </div>
    <div>
      <button v-on:click="save">Save</button>
    </div>
  </div>
</template>

<script>
 import { Auth, Storage } from 'aws-amplify'
// import AmplifyStore from '../../AmplifyStore'
// import AmplifyTheme from '../../AmplifyTheme'
export default {
  name: 'SimpleForm',
  data () {
    return {
      profile: {},
    }
    },
  props: ['path', 'fields'],
 
  
  computed: {
    userId: function() { return this.$store.state.userId }
  },
  created() {
    console.debug('simple form created...')
    this.load()
  },
  methods: {
    load() {
      Storage.get(this.path, { download: true })
        .then(data => {
          const body = data.Body.toString('utf8')
          this.profile = JSON.parse(body)
        })
        .catch(err => console.error(err))
    },
    save() {
      if (!this.userId) { return }
      const data = JSON.stringify(this.profile)
      Storage.put(this.path, data, { contentType: 'application/json' })
        .then(data => console.debug(data))
        .catch(err => console.error(err))
    }
  }
}
</script>