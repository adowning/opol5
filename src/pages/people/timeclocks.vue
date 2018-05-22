<template>
  <TimeClocks></TimeClocks>
</template>

<script>
import TimeClocks from '../../components/timeclocks/'
import axios from 'axios'
import moment from 'moment'

export default {
	middleware: 'need_auth',
	// async fetch({ store, pars }) {
	async asyncData(context) {
		console.log(context)
		var paramString = context.store.state.auth.humanity_attributes.split(',')
		let params = {
			start_date: moment()
				.subtract(4, 'w')
				.startOf('week')
				.format('YYYY-MM-DD'),
			end_date: moment()
				.endOf('week')
				.format('YYYY-MM-DD'),
			// userId: context.store.state.auth.humanity_attributes.humanityUserId,
			userId: paramString[0]
			// token: context.store.state.auth.humanity_attributes.currentToken
			
		}
		if (!context.store.state.modules.TimeClockStore.timeClocks) {
			let { data } = await axios.post(
				// let { data } = axios.post(
				'/api/users/gethumanitytimeclocks',
				params
			)
			if (data) {
				// store.dispatch('modules/TimeClockStore/setTimeClocks', data)
				context.store.dispatch('modules/TimeClockStore/setTimeClocks', data)
			}
		}
		if (!context.store.state.modules.TimeClockStore.timeClockStatus) {
			let { data2 } = await axios.post(
				// let data2 = axios.post(
				'/api/users/gethumanitytimeclockstatus',
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
