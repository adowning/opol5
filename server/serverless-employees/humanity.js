"use strict";
const axios = require("axios");
const AWS = require("aws-sdk"); // eslint-disable-line import/no-extraneous-dependencies
// AWS.config.update({region: 'us-west-2'});
const uuid = require("uuid");
const dynamoDb = new AWS.DynamoDB.DocumentClient();
// const dynamodb = require('./dynamodb');

const getToken = requestData => {
  return new Promise(resolve =>
    axios
      .post("https://www.humanity.com/oauth2/token.php", requestData)
      .catch(error => {
        resolve("500", error);
      })
      .then(response => {
        resolve(response.data.access_token);
      })
  );
};

const getClockStatus = requestData => {
  // console.log(`https://www.humanity.com/api/v2/timeclocks/status/${requestData.userId}/0?access_token=${requestData.token}`)
  return new Promise(resolve =>
    axios
      .get(
        `https://www.humanity.com/api/v2/timeclocks/status/${
          requestData.userId
        }/0?access_token=${requestData.token}`
      )
      .catch(error => {
        // console.log(error);
        resolve(error);
      })
      .then(response => {
        console.log(response);
        resolve(response);
      })
  );
};
const getMyDetails = requestData => {
  return new Promise(resolve =>
    axios
      .get(
        // `https://www.humanity.com/api/v2/me?access_token=${requestData.token}`
        `https://www.humanity.com/api/v2/employees/${
          requestData.userId
        }?access_token=${requestData.token}`
      )
      .catch(error => {
        resolve(error);
      })
      .then(response => {
        resolve(response);
      })
  );
};

const insertIntDatabase = (dbData, requestData, callback) => {
  const timestamp = new Date().getTime();
  const params = {
    TableName: "serverless-dev-users",
    Item: {
      id: uuid.v1(),
      username: dbData.username,
      email: dbData.work_start_date,
      timezone: "88",
      dst: "0",
      time_format: "0",
      date_format: "0",
      language: "English",
      num_posts: dbData.num_posts,
      last_post: "1490873113",
      last_search: "1490872884",
      last_email_sent: "1430433881",
      registered: "1423094146",
      registration_ip: "74.192.243.28",
      last_visit: "1526116118",
      last_active: "1526124608",
      eid: "0001",
      status: "1",
      deleted: "0",
      deleted_by: "0",
      legal_agree: "1",
      referral: "0",
      wage: dbData.wage,
      name: dbData.name,
      firstname: dbData.firstname,
      lastname: dbData.lastname,
      nick_name: dbData.nick_name || "none",
      birth_day: dbData.birth_day || "none",
      birth_month: dbData.birth_month || "none",
      smsgateway: "33" || "none",
      cell_phone: dbData.cell_phone,
      cellphone_confirmed: dbData.cellphone_confirmed || "none",
      last_sms_sent: dbData.last_sms_sent || "none",
      home_phone: dbData.home_phone || "none",
      address: dbData.address || "none",
      city: dbData.city || "none",
      state: dbData.state || "none",
      zip: dbData.zip || "none",
      notes: "none",
      p_email: "1",
      p_phone: "1",
      notify_sms: "-1",
      notify_email: "1",
      e_new_pm: "0",
      ical:
        "https://www.humanity.com/ical/f536188bb24232bee8ed75e928617170.ics",
      startday: "1",
      pref_caltime: "10",
      pref_shift_autoconfirm: "-1",
      undertime: "0",
      overtime: dbData.overtime || "none",
      tut_v2_sched: "0",
      daily_overtime: dbData.daily_overtime || "none",
      monthly_undertime: dbData.monthly_undertime || "none",
      monthly_overtime: dbData.monthly_overtime || "none",
      avatar_url: "https://www.fakenamegenerator.com/images/sil-male.png",
      deactivated: "0",
      work_start_date: dbData.work_start_date || "none",
      screen_logger: "0",
      sc_freq: "-2",
      newsletter_receiver: "0",
      middle_name: dbData.middle_name || "none",
      gender: "M",
      pref_sp_skin: "1",
      teamtools_id: "1",
      updated_at: "2018-04-15 18:03:01",
      unique_id: uuid.v1(),
      employee_type: dbData.employee_type || "none",
      pay_type: "2",
      group: "2",
      timezone_name: "America/Chicago",
      group_name: dbData.group_name || "none",
      status_name: "Activated",
      skills: ["Can Breathe"],
      clockStatus: dbData.clockStatus || "none",
      humanityPassword: requestData.password || "none",
      humanityUserId: dbData.id || "none",
      createdAt: timestamp || "none",
      updatedAt: timestamp || "none"
    }
  };
  console.log(uuid.v1());
  console.log(params);
  dynamoDb.put(params, error => {
    // handle potential errors
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: {
          "Content-Type": "text/plain",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
          "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },

        body: error
      });
      return;
    }

    // create a response
    const response = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
      },
      body: JSON.stringify(params.Item)
    };
    callback(null, response);
  });
};

async function go(requestData, callback) {
  try {
    const token = await getToken(requestData);
    requestData.token = token;
    const [status, details] = await Promise.all([
      getClockStatus(requestData),
      getMyDetails(requestData)
    ]);
    details.data.data.clockStatus = status.data.data;
    details.data.data.token = details.data.token;
    insertIntDatabase(details.data.data, requestData, callback);
  } catch (e) {
    console.error(e); // 💩
  }
}

exports.getHumanityData = (event, context, callback) => {
  var requestData = {
    client_id: "1de720f9636d0f17d61540fbd9c030c30fae3f1f",
    client_secret: "33c1bfc4f96d5ca7e68b859af8d58fde36867bbd",
    grant_type: "password",
    username: JSON.parse(event.body)["username"],
    password: JSON.parse(event.body)["password"],
    userId: JSON.parse(event.body)["userId"]
  };
  go(requestData, callback);
};

exports.getHumanityToken = async (event, context, callback) => {
  var requestData = {
    client_id: "1de720f9636d0f17d61540fbd9c030c30fae3f1f",
    client_secret: "33c1bfc4f96d5ca7e68b859af8d58fde36867bbd",
    grant_type: "password",
    username: JSON.parse(event.body)["username"],
    password: JSON.parse(event.body)["password"],
    userId: JSON.parse(event.body)["userId"]
  };
  const token = await getToken(requestData);
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify(token)
  };
  callback(null, response);
  // var params = {
  //   TableName: "TABLE",
  //   Key: {
  //     KEY_NAME: { N: "001" }
  //   },
  //   ProjectionExpression: "ATTRIBUTE_NAME"
  // };

  // // Call DynamoDB to read the item from the table
  // ddb.getItem(params, function(err, data) {
  //   if (err) {
  //     console.log("Error", err);
  //   } else {
  //     console.log("Success", data.Item);
  //   }
  // });
};
