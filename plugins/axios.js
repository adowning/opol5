export default function({ $axios, redirect }) {
	var token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJjMzhiMjRiMTZjN2QxNTRmOWQ5NjM5NDNhOTFkODYxYzY4NDYxM2UzNTgyNTExZjRhMzhhZjE3Y2YzYzlmYmU2NWY5N2Q2ZGQyODU0NWQxIn0.eyJhdWQiOiIxMCIsImp0aSI6IjJjMzhiMjRiMTZjN2QxNTRmOWQ5NjM5NDNhOTFkODYxYzY4NDYxM2UzNTgyNTExZjRhMzhhZjE3Y2YzYzlmYmU2NWY5N2Q2ZGQyODU0NWQxIiwiaWF0IjoxNTI2NDMzNjAyLCJuYmYiOjE1MjY0MzM2MDIsImV4cCI6MTU1Nzk2OTYwMiwic3ViIjoiMSIsInNjb3BlcyI6W119.W55LnoZLEYHG1cWYf1gzUymEZ9tpeDP8KtPn2Ln3gXaiyMx_OM5TeKM0_xB2P029JiQHsV_pNzx5ga55JXXkGs4fZmYQZN_6xKrhSNegO6x2oeqYkM52mwOREJvubSrYxKq-uCZAkBPQ_zBMdEbKx6Rc5w8rdjmb3LGUEemxO5GcTD2KcaXhxreZJjmE6h5epBxk5jyytqqLxhaQLSm8lK2kKOGdGu1McJOpUl8SHwtRzkIap5myk6f_nhuXT4aSHKaMFplgry7N2YoNepH5dL99zepFECkv1aJ4EkqhG8zSngrTYhtuP-JWTgU88w0MBJJuFlpH-14AjGShmCT7Dp7A_10PP6TUMeXnh_E2q-fPiftsG8cAq3cZ5DfOirem7EdgX_kPEGWXG-s3_ukENh0vBqZObsQgXj_LhFjG60NLWirH3vfvk0Ts69-3x947nyX_X8hDowhvBj8Xe2alekuGvs4iKvtaHgZmYkj0_0Yqr3cIPcm3_ju0rdJ2Dj5Rpo0ZXmyfzmKh4ScOcE3Veu4oGOaaLbAdzUzBHoADvLqGuBrdIl08IZqVTb8avzLnm112zRiz9hSKkcCjAfUNMTFnuw7TabFDMa_rqVgu9aBqZA7SDrbemrNfovfAsix6SWspecdoIDqkOMVw631qGrnS-zYZp-4FT_XDxAk4KX0"

	$axios.setToken(token, "Bearer")
	// Accept: application/json
	// Content-Type: application/json
	$axios.setHeader("Content-Type", "application/json", ["post"])
	$axios.setHeader("Accept", "application/json")

	$axios.onRequest(config => {
	  console.log("Making request to " + config.url)
	})

	$axios.onError(error => {
		const code = parseInt(error.response && error.response.status)
		if (code === 400) {
			redirect("/400")
		}
	})
}
