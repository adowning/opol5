var AWS = require('aws-sdk');

var transcribeservice = new AWS.TranscribeService();

exports.iterator = (event, context, callback)  => {

    transcribeservice.getTranscriptionJob({ TranscriptionJobName: event.TranscriptionJob.TranscriptionJobName }, function(err, data) {
          if (err) {console.log("Err",err);} // an error occurred
          else    {
              data["TranscriptionJob"]['continue'] = data.TranscriptionJob.TranscriptionJobStatus == "IN_PROGRESS";
              callback(null,data);
            }
    });
        
};
