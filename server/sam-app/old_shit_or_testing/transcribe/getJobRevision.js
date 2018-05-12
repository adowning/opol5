
var AWS = require('aws-sdk')

var transcribeservice = new AWS.TranscribeService()
var params = {
  TranscriptionJobName: "", /* required */
};

exports.handler = (event, context, callback) => {
    
   params['TranscriptionJobName'] = event.jobName;

  transcribeservice.getTranscriptionJob(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  })
}
