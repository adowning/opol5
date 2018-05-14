<template>
    <div>
    <TimeClocks></TimeClocks>
    </div>
</template>

<script>
import TimeClocks from '../../components/timeclocks/'
import axios from 'axios'
import moment from 'moment'

export default {
  async fetch({ store, pars }) {
    let params = {
      start_date: moment()
        .subtract(4, 'w')
        .startOf('week')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .endOf('week')
        .format('YYYY-MM-DD'),
      employee: store.state.AuthStore.humanity_attributes.humanityUserId,
      token: store.state.AuthStore.humanity_attributes.currentToken
    }
    console.log(params)
    let { data } = await axios.post(
      'https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/gethumanitytimeclocks',
      params
    )
    store.dispatch('AuthStore/setTimeClocks', data)
  },
  components: {
    TimeClocks
  }
}
</script>
