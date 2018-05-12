//A LAMBDA FUNCTION START A JOB FROM TRANSCRIBE

var AWS = require('aws-sdk');
var stepfunctions = new AWS.StepFunctions();

var transcribeservice = new AWS.TranscribeService();
var bucket = "";
var region = "us-east-2";
var params = {
    LanguageCode: 'en-US', /* required */
    Media: { /* required */
        MediaFileUri: ""
    },
    MediaFormat: 'wav',/* required */
    TranscriptionJobName: "", /* required */
    MediaSampleRateHertz: 8000,
};
var sfParams = {
    "stateMachineArn": 'arn:aws:states:us-east-2:742705829810:stateMachine:Waitstate', 
    "data": ''
    
};


exports.handler = (event, context, callback) => {
    console.log(event)
  params['Media']['MediaFileUri'] = event.url;
  params['TranscriptionJobName'] = event.jobName;
   transcribeservice.startTranscriptionJob( params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else{  
            console.log('///// should have waited i bet')
              callback(null,data);
        }
   });

};


function getName(key) {
    var arr = key.split("/");
    //var name = arr[arr.length-1].split("-");
    var name = arr[arr.length - 1];
    return name;
}

function getLink(bucket, key) {
    return "http://s3-" + region + ".amazonaws.com/" + bucket + "/" + key;
}

function getDate(key) {
    var arr = key.split("/");
    return arr[arr.length - 2];
}