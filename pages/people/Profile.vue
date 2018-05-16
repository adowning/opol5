<template>
    <div>
     <Profile></Profile>
    </div>
</template>

<script>
import Profile from '../../components/profile/'
import axios from 'axios'

export default {
  middleware: 'need_auth',
  async fetch({ store, pars }) {
    let params = {
      username: store.state.modules.AuthStore.user.attributes.humanityUsername,
      password: store.state.modules.AuthStore.user.attributes.humanityPassword,
      userId: store.state.modules.AuthStore.user.attributes.humanityID
    }
    console.log(params)
    if (!store.state.modules.AuthStore.humanity_attributes) {
      let { data } = await axios.post('/api/users/gethumanitydata', params)
      store.dispatch('modules/AuthStore/setHumanityData', data)
      store.dispatch('modules/TimeClockStore/setEmployeeTimeClockStatus', data)
    }
  },
  components: {
    Profile
  }
}
</script>
