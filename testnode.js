const axios = require("./axios.js")
const humanityBase = "https://www.humanity.com/api/v2"
const getClockStatusID = (userId, token) => {
	console.log(
		`${humanityBase}/timeclocks/status/${userId}/1?access_token=${token}`
	)
	return new Promise(resolve =>
		axios
			.get(
				`${humanityBase}/timeclocks/status/${userId}/1?access_token=${token}`
			)
			.catch(error => {
				console.error(error)
				error.code = 500
				resolve(error)
			})
			.then(res => {
				console.log(res)
				res.data.clockStatus = "in"
				console.error(error)
				err.code = 200
				resolve(res)
			})
			.catch(error => {
				console.error(error)
				err.code = 500
				resolve(err)
			})
	)
}
const getClockStatusWithReturn = (userId, token) => {
	console.log(
		`${humanityBase}/timeclocks/status/${userId}/0?access_token=${token}`
	)
	return new Promise(resolve =>
		axios
			.get(
				`${humanityBase}/timeclocks/status/${userId}/0?access_token=${token}`
			)
			.catch(err => {
				console.log(err)
				err.code = 500
				resolve(err)
			})
			.then(res => {
				console.log(" you are ", res.data)
				if (res.data.data === "out") {
					res.code = 200
					resolve(res)
				} else {
					console.log("moving on")
					console.log(res) // getClockStatusID(requestData, callback)
				}
			})
			.catch(err => {
				err.code = 500
				resolve(err)
			})
	)
}
var handler = async event => {
	// var requestData = {
	// 	userId: JSON.parse(event.body)["userId"],
	// 	token: JSON.parse(event.body)["token"]
	// }

	// var userId = JSON.stringify(event.body.userId)
	// var token = JSON.stringify(event.body.token)
	var userId = event.body.userId
	var token = event.body.token
	console.log(userId)
	console.log(token)
	try {
		result = await getClockStatusWithReturn(userId, token)
	} catch (err) {
		console.log(err)
		return err
	}
	return result
}
var user = {
	'token': '638079541df28402b9637c01dda90a02941dc626',
	'username': '4041624'
}
handler(user)