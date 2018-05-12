//A LAMBDA FUNCTION START A JOB FROM TRANSCRIBE

var AWS = require('aws-sdk');
var stepfunctions = new aws.StepFunctions();

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
    stateMachineArn: 'arn:aws:states:us-east-2:742705829810:stateMachine:TaskTimerStateMachine-yegTea0blfH4', /* required */
    // input: '',
    name: ''
};


exports.handler = (event, context, callback) => {
    bucket = event.Records[0].s3.bucket.name
    params['Media']['MediaFileUri'] = getLink(bucket, event.Records[0].s3.object.key);
    params['TranscriptionJobName'] = getName(event.Records[0].s3.object.key);
    
    sfParams['TranscriptionJobName'] = getName(event.Records[0].s3.object.key);

    transcribeservice.startTranscriptionJob(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else {
            stepfunctions.startExecution(sfParams, function (err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else console.log(data);           // successful response
            });
            callback(null, data);
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