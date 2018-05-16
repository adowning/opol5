<template>
    <TimeClocks></TimeClocks>
</template>

<script>
import TimeClocks from '../../components/timeclocks/'
import axios from 'axios'
import moment from 'moment'

export default {
  // async fetch({ store, pars }) {
  async asyncData (context) {
    console.log(context)
    let params = {
      start_date: moment()
        .subtract(4, 'w')
        .startOf('week')
        .format('YYYY-MM-DD'),
      end_date: moment()
        .endOf('week')
        .format('YYYY-MM-DD'),
      // userId: store.state.modules.AuthStore.humanity_attributes.humanityUserId,
      userId: context.store.state.modules.AuthStore.humanity_attributes.humanityUserId,
      // token: store.state.modules.AuthStore.humanity_attributes.currentToken
      token: context.store.state.modules.AuthStore.humanity_attributes.currentToken
    }
    if (!context.store.state.modules.TimeClockStore.timeClocks) {
      let { data } = await axios.post(
        // let { data } = axios.post(
        'https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/gethumanitytimeclocks',
        params
      )
      if (data) {
        // store.dispatch('modules/TimeClockStore/setTimeClocks', data)
        context.store.dispatch('modules/TimeClockStore/setTimeClocks', data)
      }
    }
    if (!context.store.state.modules.TimeClockStore.timeClockStatus) {
      let {data2} = await axios.post(
        // let data2 = axios.post(
        'https://h4d0oqhk00.execute-api.us-east-2.amazonaws.com/dev/gethumanitytimeclockstatus',
        params
      )
      if (data2) {
      // store.dispatch('modules/TimeClockStore/setEmployeeTimeClockStatus', data2)
        context.store.dispatch('modules/TimeClockStore/setEmployeeTimeClockStatus', data2)
      }
    }
  },
  components: {
    TimeClocks
  }
}
</script>
