"use strict"
const axios = require("axios")

const getToken = (data) => {
  return new Promise(resolve =>
    axios
      .post("https://www.humanity.com/oauth2/token.php", {
        client_id: "1de720f9636d0f17d61540fbd9c030c30fae3f1f",
        client_secret: "33c1bfc4f96d5ca7e68b859af8d58fde36867bbd",
        grant_type: "password",
        username: data.username,
        password: data.password
      })
      .catch(error => {
        resolve("500", error)
      })
      .then(response => {
        resolve(response.data.access_token)
      })
  )
}

const getClockStatus = (data) => {
  return new Promise(resolve =>
    axios
      .get(
        `https://www.humanity.com/api/v2/timeclocks/status/${
          data.userId
        }/0?access_token=${data.token}`
      )
      .catch(error => {
        console.log(error)
        resolve(error)
      })
      .then(response => {
        resolve(response)
      })
  )
}
const getMyDetails = (data) => {
  return new Promise(resolve =>

  axios
    .get(`https://www.humanity.com/api/v2/me?access_token=${data.token}`)
    .catch(error => {
      callback("500", error);
    })
    .then(response => {
      resolve(response)
    })
  )
  };

async function go(data) {
try {
// but first, coffee
console.log(data)
const token = await getToken(data)
data.token = token
// then we grab some data over an Ajax request
const getClockStatus = (data)
const  getMyDetails = (data)
// console.log(info) // mediocre code
// console.log(token) // ☕
// console.log(data) // ☕
const [status, details] = await Promise.all([ getClockStatus, getMyDetails]);
// // many requests should be concurrent - don't slow things down!
// // fire off three requests and save their promises
// const wordPromise = axios('http://www.setgetgo.com/randomword/get.php');
// const userPromise = axios('https://randomuser.me/api/');
// const namePromise = axios('https://uinames.com/api/');
// // await all three promises to come back and destructure the result into their own variables
// const [word, user, name] = await Promise.all([wordPromise, userPromise, namePromise]);
// console.log(word.data, user.data, name.data); // cool, {...}, {....}
} catch (e) {
console.error(e) // 💩
}
}

exports.initUserData = (event, context, callback) => {
var data = {
client_id: "1de720f9636d0f17d61540fbd9c030c30fae3f1f",
client_secret: "33c1bfc4f96d5ca7e68b859af8d58fde36867bbd",
grant_type: "password",
username: event.username,
// password: event.request.userAttributes.sub
password: event.password,
userId: event.userId
}
go(data)
}

// {
//     "status": 1,
//     "data": {
//       "id": "85447577",
//       "store": "135324",
//       "status": "0",
//       "schedule": null,
//       "notes": null,
//       "created": "1525784083",
//       "in_timestamp": "1525784100",
//       "in_day": "3296",
//       "out_timestamp": "0",
//       "out_day": "0",
//       "in_hour": "33",
//       "out_hour": "0",
//       "in_location": "47.219.112.177",
//       "out_location": "Website",
//       "in_terminal": "0",
//       "out_terminal": "-98",
//       "approved_by": "0",
//       "approved_time": "0",
//       "approved_notes": "",
//       "in_picture": null,
//       "out_picture": "",
//       "screenshots": null,
//       "break_time": "0",
//       "start_timestamp": "2018-05-08 07:55:00",
//       "end_timestamp": null,
//       "in_picture_url": "",
//       "out_picture_url": null,
//       "in_gps": "{\"latitude\":\"32.3211359\",\"longitude\":\"-95.2424218\",\"supported\":1}",
//       "out_gps": null,
//       "in_distance": null,
//       "out_distance": null,
//       "unique_id": null,
//       "shift": null,
//       "employee": {
//         "id": "1444044",
//         "name": "Ash Downing"
//       },
//       "in_time": {
//         "time": "07:55",
//         "day": "May 8, 2018",
//         "timestamp": "2018-05-08 07:55:00"
//       },
//       "start": {
//         "id": 3296,
//         "month": 5,
//         "day": 8,
//         "wday": 2,
//         "year": 2018,
//         "weekday": "Tue",
//         "mname": "May",
//         "week": 19,
//         "dayid": 3,
//         "timeid": 33,
//         "timeid_exact": 32,
//         "formatted": "May 8, 2018",
//         "iso8601": "2018-05-08T07:55:00-0500",
//         "time": "07:55",
//         "timestamp": 1525784100,
//         "hours": 7,
//         "minutes": 55,
//         "seconds": 0,
//         "date": "2018-05-08 07:55:00",
//         "day_of_year": "127",
//         "week_adjusted": 19,
//         "sp_wday": 3
//       },
//       "length": [],
//       "out_time": [],
//       "end": [],
//       "current_length": {
//         "hours": 2,
//         "mins": 24,
//         "total_hours": "2.40"
//       },
//       "events": []
//     },
//     "token": "559ab8b31217ecaef732b3eb81c8a680586c567a",
//     "error": null
//   }
//   var params = {
//     TableName = 'Table',
//     Item: {
//        HashKey: 'haskey',
//        NumAttribute: 1,
//        BoolAttribute: true,
//        ListAttribute: [1, 'two', false],
//        MapAttribute: { foo: 'bar'},
//        NullAttribute: null
//     }
//   };
  
// // Load the AWS SDK for Node.js
// var AWS = require('aws-sdk');
// // Set the region 
// AWS.config.update({region: 'us-east-1'});

// // Create DynamoDB document client
// var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});

// var params = {
//   TableName: 'TABLE',
//   Item: {
//     'HASHKEY': VALUE,
//     'ATTRIBUTE_1': 'STRING_VALUE',
//     'ATTRIBUTE_2': VALUE_2
//   }
// };

// docClient.put(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log("Success", data);
//   }
// });

/*eslint-disable */

// var fs = require('fs');
// var parse = require('csv-parse');
// var async = require('async');

// var csv_filename = "/home/ash/Documents/result.csv";

// rs = fs.createReadStream(csv_filename);
// parser = parse({
//     columns : true,
//     delimiter : ','
// }, function(err, data) {

//     var split_arrays = [], size = 25;

//     while (data.length > 0) {
//         split_arrays.push(data.splice(0, size));
//     }
//     data_imported = false;
//     chunk_no = 1;

//     async.each(split_arrays, function(item_data, callback) {
//         ddb.batchWriteItem({
//             "TimeClocks" : item_data
//         }, {}, function(err, res, cap) {
//             console.log('done going next');
//             if (err == null) {
//                 console.log('Success chunk #' + chunk_no);
//                 data_imported = true;
//             } else {
//                 console.log(err);
//                 console.log('Fail chunk #' + chunk_no);
//                 data_imported = false;
//             }
//             chunk_no++;
//             callback();
//         })
//       }, function() {
//         // run after loops
//         console.log('all data imported....');

//     });

// });
// rs.pipe(parser);