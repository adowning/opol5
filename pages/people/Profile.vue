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
      username: store.state.user.attributes.humanityUsername,
      password: store.state.user.attributes.humanityPassword,
      userId: store.state.user.attributes.humanityID
    }
    console.log(params)
    if (!store.state.humanity_attributes) {
      let { data } = await axios.post('/api/users/gethumanitydata', params)
      store.dispatch('humanityData', data)
     // store.dispatch('employeeTimeClockStatus', data)
    }
  },
  components: {
    Profile
  }
}
</script>
