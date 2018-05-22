import { Auth } from 'aws-amplify'
import { verifyTokens } from '../utils/tokens'

export default async function ({ store, redirect, req }) {
	let loggedin = false
	if (process.server) {
		loggedin = verifyTokens(req)
	} else {
		try {
			const user = await Auth.currentUserInfo()
			store.dispatch('auth/setUser', user)
			// console.log(user)
			loggedin = Boolean(user)
		} catch (e) {
			console.log(e)
		}
	}
	if (!loggedin) {
		store.dispatch('auth/setUser', null)
		return redirect('/')
	}
}
