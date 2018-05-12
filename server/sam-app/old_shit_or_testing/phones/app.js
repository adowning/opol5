
//A LAMBDA FUNCTION START A JOB FROM TRANSCRIBE

var AWS = require('aws-sdk');

var transcribeservice = new AWS.TranscribeService();
var params = {
  LanguageCode: 'es-US', /* required */
  Media: { /* required */
    MediaFileUri: ""
  },
  MediaFormat: 'wav',/* required */
  TranscriptionJobName: "", /* required */
  MediaSampleRateHertz: 16000,
};

exports.handler = (event, context, callback) => {

  var srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "))
  params['Media']['MediaFileUri'] = 'https://s3.us-east-2.amazonaws.com/andrewsonsip/' + srckey
  params['TranscriptionJobName'] = event.jobName

  transcribeservice.startTranscriptionJob(params, function (err, data) {
    if (err) console.log(err, err.stack); 
    else {
      callback(null, data)
    }
  });

  /*
output:
  data = { 
  
      'TranscriptionJob': { 
         'TranscriptionJobName' : 'testLambda5',
          'TranscriptionJobStatus': 'IN_PROGRESS',
          'LanguageCode': 'es-US',
          'MediaSampleRateHertz': 16000,
          'MediaFormat': 'wav',
          'Media': { 'MediaFileUri' : 'https://s3-us-west-2.amazonaws.com/rekognition-output/audio/audio2.wav' },
          'CreationTime': '2018-04-25T17:51:09.152Z'
      }
  }
  */


};
// let response;

// exports.lambda_handler = async (event, context, callback) => {
//   console.log(event)
//   var srcKey = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
//   console.log('https://s3.us-east-2.amazonaws.com/andrewsonsip/' + srckey)
//   var params = {
//     LanguageCode: 'en-US',
//     Media: { 
//       MediaFileUri: 'https://s3.us-east-2.amazonaws.com/andrewsonsip/'+key
//     },
//     MediaFormat: 'wav',
//     TranscriptionJobName: 'srcKey',
//      MediaSampleRateHertz: 8000,
//     Settings: {
//       MaxSpeakerLabels: 2,
//       ShowSpeakerLabels: true
//     }
//   };

//   try {
//     const ret = await transcribeservice.startTranscriptionJob(params, function(err, data) {
//     response = {
//       'statusCode': 200,
//       'body': JSON.stringify({
//         message: 'hello world',
//         location: ret.data.trim()
//       })
//     }
//   }
//   catch (err) {
//     console.log(err);
//     callback(err, null);
//   }

//   callback(null, response)
// };
