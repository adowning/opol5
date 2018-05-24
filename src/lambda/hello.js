// const axios = require("axios")
// const humanityBase = "https://www.humanity.com/api/v2"

// export function handler(event, context, callback) {
//    console.log(event)
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ msg: "Hello, World from lambdaxx!" })
//   });
// }
/*eslint-disable */
exports.handler = async (event, context, callback) => {
  return new Promise((resolve, reject) => {
    resolve({ statusCode: 200, body: "yay!" });
  });
};

// exports.handler = async event => {
//   // var token = JSON.parse(event.body)["token"]
//   // var userId = JSON.parse(event.body)["userId"]

//   return new Promise((resolve, reject) => {
//     console.log(reject)
//     resolve({ statusCode: 200, body: "yay!" });

//     // resolve({
//     //   statusCode: 200,
//     //   headers: {
//     //     "Access-Control-Allow-Origin": "*"
//     //   },
//     //   body: JSON.stringify(event)
//     // });
//   });
// };

// export function handler(event, context, callback) {
//   var token = JSON.parse(event.body)["token"]
//   var userId = JSON.parse(event.body)["userId"]

//   try {
//     var result = await getClockStatusWithReturn(userId, token)
//     const response = {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*"
//       },
//       body: JSON.stringify(result.data)
//     }
//     callback(null, response)
//   } catch (err) {
//     console.log(err)
//     return
//     err
//   }
//   return result
// }

// exports.handler = async (event, context, callback) => {

//   var token = JSON.parse(event.body)["token"]
//   var userId = JSON.parse(event.body)["userId"]

//   try {
//     var result = await getClockStatusWithReturn(userId, token)
//     const response = {
//       statusCode: 200,
//       headers: {
//         "Access-Control-Allow-Origin": "*"
//       },
//       body: JSON.stringify(result.data)
//     }
//     callback(null, response)
//   } catch (err) {
//     console.log(err)
//     return
//     err
//   }
//   return result
// }

const getClockStatusID = (userId, token) => {
  console.log(
    `${humanityBase}/timeclocks/status/${userId}/1?access_token=${token}`
  );
  return new Promise(resolve =>
    axios
      .get(
        `${humanityBase}/timeclocks/status/${userId}/1?access_token=${token}`
      )
      .catch(error => {
        console.error(error);
        error.code = 500;
        resolve(error);
      })
      .then(res => {
        console.log(res);
        res.data.clockStatus = "in";
        console.error(error);
        err.code = 200;
        resolve(res);
      })
      .catch(error => {
        console.error(error);
        err.code = 500;
        resolve(err);
      })
  );
};
const getClockStatusWithReturn = (userId, token) => {
  console.log(
    `${humanityBase}/timeclocks/status/${userId}/0?access_token=${token}`
  );
  return new Promise(resolve =>
    axios
      .get(
        `${humanityBase}/timeclocks/status/${userId}/0?access_token=${token}`
      )
      .catch(err => {
        console.log(err);
        err.code = 501;
        resolve(err);
      })
      .then(res => {
        console.log(" you are ", res.data);
        if (res.data.data == "out") {
          res.code = 200;
          resolve(res.data);
        } else {
          console.log("moving on");
          getClockStatusID(requestData, callback);
        }
      })
      .catch(err => {
        err.code = 503;
        resolve(err);
      })
  );
};
// exports.getHumanityTimeClockStatus = async(event, context, callback) => {

// export function handler(event, context, callback) {
//    console.log(event)
//   callback(null, {
//     statusCode: 200,
//     body: JSON.stringify({ msg: "Hello, World from lambdaxx!" })
//   });
// }
