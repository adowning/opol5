import { Auth } from "aws-amplify"
import { verifyTokens } from "../utils/tokens"

export default async function({ store, redirect, req }) {
	let loggedin = false
	if (process.server) {
		loggedin = verifyTokens(req)
	} else {
		try {
			const user = await Auth.currentUserInfo()
			loggedin = Boolean(user)
			store.dispatch("auth/setUser", user)
		} catch (e) {
			console.log(e)
		}
	}
	console.log(loggedin)
	console.log(" cant go there user is logged in")
	if (loggedin) {
		return redirect("/")
	}
}
