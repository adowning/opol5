import axios from 'axios'

const doAsync = (store, { url, mutationTypes, stateKey }) => {
	store.commit(mutationTypes.PENDING)


	// setTimeout(() => {
	// 	axios(url, {})
	// 		.then(response => {
	// 			store.commit(mutationTypes.SUCCESS, response.data)
	// 		})
	// 		.catch(error => {
	// 			store.commit(mutationTypes.FAILURE)
	// 		})
	// }, 1500)
	setTimeout(() => {
		axios(url, {})
			.then(response => {
				store.commit(mutationTypes.SUCCESS, response.data)
			})
			.catch(error => {
				console.log(error.response.message)
				store.commit( mutationTypes.FAILURE, error.response.status)
			})
	}, 1500)
}

export default doAsync




// import axios from 'axios'

// const doAsync = (store, { url, mutationTypes, callback }) => {
// 	// store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: true })
// 	store.commit(mutationTypes.PENDING)

// 	return axios(url, {})
// 		.then(response => {
// 			console.log(response)
// 			let data = response
			
// 			if (callback) {
// 				data = callback(response)
// 			}

// 			store.commit(mutationTypes.BASE, { type: mutationTypes.SUCCESS, data, statusCode: response.status })
// 			store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false})
// 		})
// 		.catch(error => {
// 			store.commit(mutationTypes.BASE, { type: mutationTypes.PENDING, value: false })
// 			store.commit(mutationTypes.BASE, { type: mutationTypes.FAILURE, statusCode: error.response.status
// 			})
// 		})
// }
// export default doAsync