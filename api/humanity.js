'use strict'
const axios = require('axios')
// AWS.config.update({region: 'us-west-2'})
const uuid = require('uuid')
const dynamodb = require('./dynamodb')
const humanityBase = 'https://www.humanity.com/api/v2'
var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjJjMzhiMjRiMTZjN2QxNTRmOWQ5NjM5NDNhOTFkODYxYzY4NDYxM2UzNTgyNTExZjRhMzhhZjE3Y2YzYzlmYmU2NWY5N2Q2ZGQyODU0NWQxIn0.eyJhdWQiOiIxMCIsImp0aSI6IjJjMzhiMjRiMTZjN2QxNTRmOWQ5NjM5NDNhOTFkODYxYzY4NDYxM2UzNTgyNTExZjRhMzhhZjE3Y2YzYzlmYmU2NWY5N2Q2ZGQyODU0NWQxIiwiaWF0IjoxNTI2NDMzNjAyLCJuYmYiOjE1MjY0MzM2MDIsImV4cCI6MTU1Nzk2OTYwMiwic3ViIjoiMSIsInNjb3BlcyI6W119.W55LnoZLEYHG1cWYf1gzUymEZ9tpeDP8KtPn2Ln3gXaiyMx_OM5TeKM0_xB2P029JiQHsV_pNzx5ga55JXXkGs4fZmYQZN_6xKrhSNegO6x2oeqYkM52mwOREJvubSrYxKq-uCZAkBPQ_zBMdEbKx6Rc5w8rdjmb3LGUEemxO5GcTD2KcaXhxreZJjmE6h5epBxk5jyytqqLxhaQLSm8lK2kKOGdGu1McJOpUl8SHwtRzkIap5myk6f_nhuXT4aSHKaMFplgry7N2YoNepH5dL99zepFECkv1aJ4EkqhG8zSngrTYhtuP-JWTgU88w0MBJJuFlpH-14AjGShmCT7Dp7A_10PP6TUMeXnh_E2q-fPiftsG8cAq3cZ5DfOirem7EdgX_kPEGWXG-s3_ukENh0vBqZObsQgXj_LhFjG60NLWirH3vfvk0Ts69-3x947nyX_X8hDowhvBj8Xe2alekuGvs4iKvtaHgZmYkj0_0Yqr3cIPcm3_ju0rdJ2Dj5Rpo0ZXmyfzmKh4ScOcE3Veu4oGOaaLbAdzUzBHoADvLqGuBrdIl08IZqVTb8avzLnm112zRiz9hSKkcCjAfUNMTFnuw7TabFDMa_rqVgu9aBqZA7SDrbemrNfovfAsix6SWspecdoIDqkOMVw631qGrnS-zYZp-4FT_XDxAk4KX0'
const snipeit = axios.create({
  timeout: 5000,
  headers: {
    'Authorization': `Bearer ${token}`
  }
})

const getToken = requestData => {
  return new Promise(resolve =>
    axios
      .post('https://www.humanity.com/oauth2/token.php', requestData)
      .catch(error => {
        resolve('500', error)
      })
      .then(response => {
        console.log(response)
        resolve(response.data.access_token)
      })
  )
}

const getClockStatus = requestData => {
  // console.log(`https://www.humanity.com/api/v2/timeclocks/status/${requestData.userId}/0?access_token=${requestData.token}`)
  return new Promise(resolve =>
    axios
      .get(
        `${humanityBase}/timeclocks/status/${
          requestData.userId
        }/0?access_token=${requestData.token}`
      )
      .catch(error => {
      // console.log(error)
        resolve(error)
      })
      .then(response => {
        resolve(response)
      })
  )
}
const getMyDetails = requestData => {
  return new Promise(resolve =>
    axios
      .get(
      // `https://www.humanity.com/api/v2/me?access_token=${requestData.token}`
        `${humanityBase}/employees/${
          requestData.userId
        }?access_token=${requestData.token}`
      )
      .catch(error => {
        resolve(error)
      })
      .then(response => {
        resolve(response)
      })
  )
}

const insertIntDatabase = (dbData, requestData, callback) => {
  console.log(dbData)
  console.log(requestData)
  const timestamp = new Date().getTime()
  const params = {
    TableName: 'serverless-dev-users',
    Item: {
      id: uuid.v1(),
      username: dbData.username,
      email: dbData.work_start_date,
      timezone: '88',
      dst: '0',
      time_format: '0',
      date_format: '0',
      language: 'English',
      num_posts: dbData.num_posts,
      last_post: '1490873113',
      last_search: '1490872884',
      last_email_sent: '1430433881',
      registered: '1423094146',
      registration_ip: '74.192.243.28',
      last_visit: '1526116118',
      last_active: '1526124608',
      eid: '0001',
      status: '1',
      deleted: '0',
      deleted_by: '0',
      legal_agree: '1',
      referral: '0',
      wage: dbData.wage,
      name: dbData.name,
      firstname: dbData.firstname,
      lastname: dbData.lastname,
      nick_name: dbData.nick_name || 'none',
      birth_day: dbData.birth_day || 'none',
      birth_month: dbData.birth_month || 'none',
      smsgateway: '33' || 'none',
      cell_phone: dbData.cell_phone,
      cellphone_confirmed: dbData.cellphone_confirmed || 'none',
      last_sms_sent: dbData.last_sms_sent || 'none',
      home_phone: dbData.home_phone || 'none',
      address: dbData.address || 'none',
      city: dbData.city || 'none',
      state: dbData.state || 'none',
      zip: dbData.zip || 'none',
      notes: 'none',
      p_email: '1',
      p_phone: '1',
      notify_sms: '-1',
      notify_email: '1',
      e_new_pm: '0',
      ical: 'https://www.humanity.com/ical/f536188bb24232bee8ed75e928617170.ics',
      startday: '1',
      pref_caltime: '10',
      pref_shift_autoconfirm: '-1',
      undertime: '0',
      overtime: dbData.overtime || 'none',
      tut_v2_sched: '0',
      daily_overtime: dbData.daily_overtime || 'none',
      monthly_undertime: dbData.monthly_undertime || 'none',
      monthly_overtime: dbData.monthly_overtime || 'none',
      avatar_url: dbData.avatar.large,
      deactivated: '0',
      work_start_date: dbData.work_start_date || 'none',
      screen_logger: '0',
      sc_freq: '-2',
      newsletter_receiver: '0',
      middle_name: dbData.middle_name || 'none',
      gender: 'M',
      pref_sp_skin: '1',
      teamtools_id: '1',
      updated_at: '2018-04-15 18:03:01',
      unique_id: uuid.v1(),
      employee_type: dbData.employee_type || 'none',
      pay_type: '2',
      group: '2',
      timezone_name: 'America/Chicago',
      group_name: dbData.group_name || 'none',
      status_name: 'Activated',
      skills: ['Can Breathe'],
      clockStatus: dbData.clockStatus || 'none',
      humanityPassword: requestData.password || 'none',
      humanityUserId: dbData.id || 'none',
      createdAt: timestamp || 'none',
      updatedAt: timestamp || 'none',
      currentToken: requestData.token || 'none'
    }
  }

  dynamodb.put(params, error => {
    // handle potential errors
    if (error) {
      console.error(error)
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: error
      })
    } else {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(params.Item)
      }
      callback(null, response)
    }

    // create a response
  })
}

async function _getHumanityData(requestData, callback) {
  try {
    const token = await getToken(requestData)
    requestData.token = token
    const [status, details] = await Promise.all([
      getClockStatus(requestData),
      getMyDetails(requestData)
    ])
    details.data.data.clockStatus = status.data.data
    details.data.data.token = details.data.token
    insertIntDatabase(details.data.data, requestData, callback)
  } catch (e) {
    console.error(e)
  }
}

// https://www.humanity.com/api/v2/timeclocks?access_token=xxxxxxx
const getTimeClocks = (requestData, callback) => {
  return new Promise(resolve =>
    axios
      .get(
        `${humanityBase}/timeclocks?access_token=${requestData.token}`, {
          params: requestData
        }
      )
      .catch(error => {
        resolve(error)
      })
      .then(res => {
        console.log(res.data)
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(res.data)
        }
        callback(null, response)
      })
  )
}
const getClockStatusID = (requestData, callback) => {
  return new Promise(resolve =>
    axios
      .get(
        `${humanityBase}/timeclocks/status/${
          requestData.userId
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

const getClockStatusWithReturn = (requestData, callback) => {
  return new Promise(resolve =>
    axios
      .get(
        `${humanityBase}/timeclocks/status/${
          requestData.userId
        }/0?access_token=${requestData.token}`
      )
      .catch(error => {
      // console.log(error)
        resolve(error)
      })
      .then(res => {
        console.log(' you are ', res)
        if (res.data.data === 'out') {
          const response = {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(res.data)
          }
          callback(null, response)
        } else {
          getClockStatusID(requestData, callback)
        }
      })

  )
}

const employeeClockIn = (requestData, callback) => {
  return new Promise(resolve =>
    axios
      .post(
        `https://www.humanity.com/api/v2/employees/${requestData.userId}/clockin?access_token=${requestData.token}`
      )
      .then(res => {
        console.log(res.data)
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
      /* eslint-disable-next-line */
      callback('500', error)
      })
  )
}
const employeeClockOut = (requestData, callback) => {
  return new Promise(resolve =>
    axios
      .put(
        `https://www.humanity.com/api/v2/employees/${requestData.userId}/clockout?access_token=${requestData.token}`
      )

      .then(res => {
      // console.log(res.data)
        const response = {
          statusCode: 200,
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(res.data)
        }
        // console.log(res.data)
        callback(null, response)
      })
      .catch(error => {
      /* eslint-disable-next-line */
      callback('501', error)
      })
  )
}
const createSnipeitUser = (requestData, callback) => {
  return new Promise(resolve =>
    snipeit
      .post(
        `http://192.168.1.171:83/api/v1/users`, {
          first_name: requestData.firstname,
          last_name: requestData.lastname,
          username: requestData.username,
          password: requestData.password
        }
      )
      .then(res => {
        console.log(res.data)
        resolve(res)
      })
      .catch(error => {
        console.log(error)
      /* eslint-disable-next-line */
      callback(500, error)
      })
  )
}
async function _gatherForCreate(requestData, callback) {
  try {
    const token = await getToken(requestData)
    requestData.token = token
    const [snipeitID, details] = await Promise.all([
      createSnipeitUser(requestData),
      getMyDetails(requestData)
    ])
    var info = {}
    info.snipeit = snipeitID
    info.humanity = details
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(info)
    }
    callback(null, response)

  } catch (e) {
    console.error(e)
  }
}

exports.gatherForCreate = (event, context, callback) => {
  var requestData = {
    client_id: '1de720f9636d0f17d61540fbd9c030c30fae3f1f',
    client_secret: '33c1bfc4f96d5ca7e68b859af8d58fde36867bbd',
    grant_type: 'password',
    username: JSON.parse(event.body)['username'],
    password: JSON.parse(event.body)['password'],
    userId: JSON.parse(event.body)['userId']
  }
  _gatherForCreate(requestData, callback)
}
exports.employeeClockIn = (event, context, callback) => {
  var requestData = {
    userId: JSON.parse(event.body)['userId'],
    token: JSON.parse(event.body)['token']
  }
  employeeClockIn(requestData, callback)
}
exports.employeeClockOut = (event, context, callback) => {
  var requestData = {
    userId: JSON.parse(event.body)['userId'],
    token: JSON.parse(event.body)['token']
  }
  employeeClockOut(requestData, callback)
}
exports.getHumanityTimeClockStatus = (event, context, callback) => {
  var requestData = {
    userId: JSON.parse(event.body)['userId'],
    token: JSON.parse(event.body)['token']
  }
  console.log(requestData)
  getClockStatusWithReturn(requestData, callback)
}

exports.getHumanityTimeClocks = (event, context, callback) => {
  var requestData = {
    start_date: JSON.parse(event.body)['start_date'],
    end_date: JSON.parse(event.body)['end_date'],
    userId: JSON.parse(event.body)['employee'],
    token: JSON.parse(event.body)['token']
  }
  console.log(requestData)
  getTimeClocks(requestData, callback)
}

exports.getHumanityData = (event, context, callback) => {
  var requestData = {
    client_id: '1de720f9636d0f17d61540fbd9c030c30fae3f1f',
    client_secret: '33c1bfc4f96d5ca7e68b859af8d58fde36867bbd',
    grant_type: 'password',
    username: JSON.parse(event.body)['username'],
    password: JSON.parse(event.body)['password'],
    userId: JSON.parse(event.body)['userId']
  }
  _getHumanityData(requestData, callback)
}

exports.getHumanityToken = async function (event, context, callback) {
  var requestData = {
    client_id: '1de720f9636d0f17d61540fbd9c030c30fae3f1f',
    client_secret: '33c1bfc4f96d5ca7e68b859af8d58fde36867bbd',
    grant_type: 'password',
    username: JSON.parse(event.body)['username'],
    password: JSON.parse(event.body)['password'],
    userId: JSON.parse(event.body)['userId']
  }
  const token = await getToken(requestData)
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(token)
  }
  callback(null, response)
}
