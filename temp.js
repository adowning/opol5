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
var fs = require('fs');
var parse = require('csv-parse');
var async = require('async');

var csv_filename = "/home/ash/Documents/result.csv";

rs = fs.createReadStream(csv_filename);
parser = parse({
    columns : true,
    delimiter : ','
}, function(err, data) {

    var split_arrays = [], size = 25;

    while (data.length > 0) {
        split_arrays.push(data.splice(0, size));
    }
    data_imported = false;
    chunk_no = 1;

    async.each(split_arrays, function(item_data, callback) {
        ddb.batchWriteItem({
            "TimeClocks" : item_data
        }, {}, function(err, res, cap) {
            console.log('done going next');
            if (err == null) {
                console.log('Success chunk #' + chunk_no);
                data_imported = true;
            } else {
                console.log(err);
                console.log('Fail chunk #' + chunk_no);
                data_imported = false;
            }
            chunk_no++;
            callback();
        })
      }, function() {
        // run after loops
        console.log('all data imported....');

    });

});
rs.pipe(parser);