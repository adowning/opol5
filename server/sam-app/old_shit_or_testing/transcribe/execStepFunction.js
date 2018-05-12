
//event from s3, lambda function  execute a state machine.

var aws  = require('aws-sdk');
var stepfunctions = new aws.StepFunctions();
var region = "us-west-2";
var name;
var url = "";
var bucket = "";
var params = {
      stateMachineArn: 'arn:aws:states:us-west-2:048259780277:stateMachine:analizeAudio', /* required */
      input:  '',
      name: ''
};

exports.handler = (event, context, callback) => {
    initizialize(event);
    console.log(params);
    stepfunctions.startExecution(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
};


function initizialize(event){
    bucket = event.Records[0].s3.bucket.name
	name = getName(event.Records[0].s3.object.key);
	url = getLink(bucket,event.Records[0].s3.object.key);
	
	//var date = getDate(event.Records[0].s3.object.key);
	//var date_name = date +"-" +name; // 
	//params['name']= date +"-" +name; //step functions name fecha-hora
	params['name']= name; 
	params['input'] = '{"url": "'+url+ '", "jobName": "'+name+'"}'; // TRANSCRIBE JOB NAME
	
	
}

function getName(key){
    var arr = key.split("/");
	//var name = arr[arr.length-1].split("-");
	var name = arr[arr.length-1];
	return name;
}

function getLink(bucket,key){
	return "http://s3-"+region+".amazonaws.com/"+bucket+"/"+key;
}

function getDate(key){
    var arr = key.split("/");
	return arr[arr.length-2];
}
