"use strict"
const axios = require("axios")
const getToken = requestData => {
	return new Promise(resolve =>
		axios
			.post("https://www.humanity.com/oauth2/token.php", requestData)
			.catch(error => {
				resolve("500", error)
			})
			.then(response => {
				console.log(response)
				resolve(response.data.access_token)
			})
	)
}
