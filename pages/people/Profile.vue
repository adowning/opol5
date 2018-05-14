<template>
    <div>
     <Profile></Profile>
    </div>
</template>

<script>
import Profile from '../../components/profile/'
import axios from 'axios'

export default {
  async fetch({ store, pars }) {
    console.log(store.state)

    let params = {
      username: store.state.AuthStore.user.attributes.humanityUsername,
      password: store.state.AuthStore.user.attributes.humanityPassword,
      userId: store.state.AuthStore.user.attributes.humanityID
    }
    let { data } = await axios.post(
      'https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/gethumanitydata',
      params
    )
    store.dispatch('AuthStore/setHumanityData', data)
  },
  components: {
    Profile
  }
}
</script>
