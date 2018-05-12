
var AWS = require('aws-sdk')

var transcribeservice = new AWS.TranscribeService()
var params = {
  TranscriptionJobName: "", /* required */
};

exports.handler = (event, context, callback) => {
  const sns = new AWS.SNS();

  console.log(event)
  console.log(event.TranscriptionJob.TranscriptionJobName)
  transcribeservice.getTranscriptionJob({ TranscriptionJobName: event.TranscriptionJob.TranscriptionJobName }, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else {
      console.log(data);
      data.default = data
      const params = {
        // default: data.toString(),
        Message: data.toString(),
        TopicArn: `arn:aws:sns:us-east-2:742705829810:phone-recording`
      };
    
      sns.publish(params, (error, data) => {
        if (error) {
          callback(error);
        }
        
        callback(null, { message: 'Message successfully published to SNS topic "dispatcher"', event });
      });
    }       // successful response
  })
}
// exports.handler = (event, context, callback) => {

//   params['TranscriptionJobName'] = event.jobName;

//  transcribeservice.getTranscriptionJob(params, function(err, data) {
//    if (err) console.log(err, err.stack); // an error occurred
//    else     console.log(data);  
//             // successful response
//  })
// }


// { TranscriptionJob:
//   { TranscriptionJobName: 'mark2.wav',
//     TranscriptionJobStatus: 'COMPLETED',
//     LanguageCode: 'es-US',
//     MediaSampleRateHertz: 8000,
//     MediaFormat: 'wav',
//     Media:
//      { MediaFileUri: 'http://s3-us-west-2.amazonaws.com/andrewsonsip/mark.wav' },
//     Transcript:
//      { TranscriptFileUri: 'https://s3.us-east-2.amazonaws.com/aws-transcribe-us-east-2-prod/742705829810/mark2.wav/asrOutput.json?X-Amz-Security-Token=FQoDYXdzEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDKq8gseqPY7KQ5txviK3A61%2FikNh%2Fyqm4Zt7faEW0Dcph1mvfc3t6tBwjury0Y9MORvw%2F28O4spo2OEHk1c1XPJd%2FNYs5C%2F35YXkhHNS1xJJ009lNRMAhUF46zodbcbvZQ%2BJtnw4YNoQSBKLw8GLVpuKtO1qtkn4lheYgo%2F%2BQiYdEKn1T1sDMyTqUuoVvixrWnvJHyxvYGSzvarWfcJhZ%2B6bVzMaF7AdROp1AAZXyf8ij4jxMF9xQmMRZ553IcModS9UPFncMItFWSAJ4WkgI%2B6YRUMEy%2FAo22pU8A3DpiKZTFY7fcdRQ5w5TjMpbVsyX8vedusdSHmK2aRbBic2JDmui1h84pfgvypTtUwPQMRFJwQZkAIkj5fGyUVIg2XAVyZbX2%2F0kHFeOZqBKwAtRpY32%2BU1Yg%2BWCIy4O%2FOGRu0no6C1AzUljFZeQaguWByUbdpPOPev5j5pS4MZ5xcA270Rf5gBK64Cu%2BPPNCnRUdf%2F3MIvb%2B1kv77tjSE1HpxDtMQ8Mifu820PsC1Dasb%2FdWBH7r6HMqpGqOsaQ8huAR42p%2FNpGsdCQ%2Bu4GP7LNaDoMzMBhrsXy4Pe3zJ%2FCUCQomhsvF65bOIo163Q1wU%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180510T102929Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIAIXAH6QCZBNSZEC2A%2F20180510%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=005081f2940915bb48f99a4c5cf2223c4269e05bf162fc4e9650a682cae2aa89' },
//     CreationTime: 2018-05-10T10:27:18.604Z,
//     CompletionTime: 2018-05-10T10:29:20.782Z } }