<template>
     <Profile></Profile>
</template>

<script>
import {  Storage } from 'aws-amplify'
import Profile from '../../components/profile/profile'
import axios from 'axios'

export default {
	middleware: 'need_auth',
	// async fetch({ store, pars }) {
	// 	let params = {
	// 		user: store.state.auth.user
		
	// 	}
	// 	console.log(params)
	// 	// if (!store.state.humanity_attributes) {
	// 	// 	let { data } = await axios.post('/api/users/gethumanitydata', params)
	// 	// 	store.dispatch('humanityData', data)
	// 	// 	// store.dispatch('employeeTimeClockStatus', data)
	// 	// }
	// },
	components: {
		Profile
	}
}
</script>
