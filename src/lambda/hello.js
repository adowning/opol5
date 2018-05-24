/*eslint-disable */
const axios = require("axios")
axios.defaults.baseURL = 'https://www.humanity.com/api/v2'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/json'


const instance = axios.create({
  baseURL: 'https://www.humanity.com/api/v1',
  timeout: 1000,
  headers: {
    'Accpet': 'foobar'
  }
});


const fetchData = (path, callback) => {

  return new Promise(resolve =>
    axios({
      method: path.method,
      url: path.pathString,
      data: path.params
    })
    .then(result => {
      console.log(result.data)
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result.data)
      }
      callback(null, response)
    })
    .catch(error => {
     console.log(error)
      callback(null, error)
    })
  )

}

const getClockStatusID = (requestData, callback) => {
  return new Promise(resolve =>
    axios
    .get(
      `/timeclocks/status/${
          requestData.id
        }/1?access_token=${requestData.token}`
    )
    .catch(error => {
      // console.log(error)
      callback(null, error)
    })
    .then(res => {
      console.log(res.data)
      res.data.clockStatus = 'in'
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(res.data)
      }
      callback(null, response)
    })
    .catch(error => {
      // console.log(error)
      callback(null, error)
    })
  )
}



const startSequence = (action, requestData, callback) => {
  try {
    return new Promise(resolve =>
      axios
      .post('https://www.humanity.com/oauth2/token.php', requestData)
      .catch(error => {
        console.log(error)
        resolve('500', error)
      })
      .then(response => {
        console.log('from token ', response.data.access_token)
        requestData.token = response.data.access_token

        switch (action) {
          case "getTimeClocks":
            {
              const path = {
                pathString: `/timeclocks?access_token=${requestData.token}`,
                params: requestData,
                method: 'GET'
              }
              fetchData(path, callback)
              break;
            }
            // 
          case "employeeClockIn":
            {
              const path = {
                pathString: `/employees/${requestData.id}/clockin?access_token=${requestData.token}`,
                method: 'POST',
                params: requestData
              }
              fetchData(path, callback)
              break
            }
          case "employeeClockOut":
            {
              const path = {
                pathString: `/employees/${requestData.id}/clockout?access_token=${requestData.token}`,
                method: 'PUT',
                params: requestData
              }
              fetchData(path, callback)
              break
            }
            case "getClockStatus":
            {
              const path = {
                pathString: `/timeclocks/status/${  requestData.id  }/1?access_token=${ requestData.token }`,
                method: 'GET'
              }
              fetchData(path, callback)
              break
            }       
            case "getClockStatusID":
            {
              const path = {
                pathString: `/timeclocks/status/${  requestData.id  }/1?access_token=${ requestData.token }`,
                method: 'GET'
              }
              fetchData(path, callback)
              break
            }
          default:
            {
              const response = {
                statusCode: 200,
                headers: {
                  'Access-Control-Allow-Origin': '*'
                },
                body: "bad action"
              }
              callback(null, response)
              break;
            }
        }
      })
    )
  } catch (error) {
    console.log(error)
  }
}


exports.handler = function (event, context, callback) {
  const {
    action,
    username,
    password,
    start_date,
    id
  } = JSON.parse(event.body)

  // console.log(action, username, password, start_date, employee)
  if (!action || !username || !password || !id)
    return callback(null, {
      statusCode: 400,
      body: "Params not supplied"
    })
  var requestData = {
    client_id: '1de720f9636d0f17d61540fbd9c030c30fae3f1f',
    client_secret: '33c1bfc4f96d5ca7e68b859af8d58fde36867bbd',
    grant_type: 'password',
    username: username,
    password: password,
    id: id,
    start_date: start_date
  }
  // console.log(event.body)
  try {
    startSequence(action, requestData, callback)

  } catch (error) {
    console.log('return ', error)
  }
}

// const getClockStatus = (requestData, callback) => {
//   return new Promise(resolve =>
//     axios
//       .get(
//         `/timeclocks/status/${
//           requestData.id
//         }/0?access_token=${requestData.token}`
//       )
//       .catch(error => {
//       // console.log(error)
//         resolve(error)
//       })
//       .then(res => {
//         console.log(' you are ', res)
//         if (res.data.data === 'out') {
//           const response = {
//             statusCode: 200,
//             headers: {
//               'Access-Control-Allow-Origin': '*'
//             },
//             body: JSON.stringify(res.data)
//           }
//           callback(null, response)
//         } else {
//           getClockStatusID(requestData, callback)
//         }
//       })

//   )
// }

// const getTimeClocks = (requestData, callback) => {
//   console.log(requestData.id)
//   console.log(requestData.start_date)
//   console.log(requestData.token)
//   return new Promise(resolve =>
//     axios
//       .get(
//         `/timeclocks?access_token=${requestData.token}`, {
//           params: requestData
//         }
//       )
//       .catch(error => {
//         console.log(error)
//         resolve(error)
//       })
//       .then(res => {
//         // console.log(res.data)
//         console.log(res.data.data)
//         const response = {
//           statusCode: 200,
//           headers: {
//             'Access-Control-Allow-Origin': '*'
//           },
//           body: JSON.stringify(res.data.data)
//         }
//         callback(null, response)
//       })
//   )
// }