//lambda function download the s3 file response from transcribe, and extract only the text, then upload to our own s3 bucket.


var https = require('https');
var fs = require('fs');

var aws = require('aws-sdk');
var s3 = new aws.S3();

var tmp = '/tmp/';
var outputBucket =""; //bucket donde se sube nuestro archivo resultante
var file_name;
var f;
var file;
var url = "";
var txt_key = "";

var s3url = "";
var ext;
exports.handler=function(event,context,callback){
    url = event.TranscriptionJob.Transcript.TranscriptFileUri;
    s3url = event.TranscriptionJob.Media.MediaFileUri;
    txt_key = getPath(s3url);
    file_name = getName(s3url);
    f = tmp+file_name;
    file = fs.createWriteStream(f);
    //descarga achivo JSON que genera TRANSCRIBE, lo guardamos en memoria tmp, lo abrimos y extraemos la cadena de texto,
    //finalmente lo guardamos en nuestro S3.
    download(url).then(readFile).then(extractText).then(upload).catch((err)=>{
    	console.log("Error"+err);
    });
}

function download(url){
return new Promise(function(resolve,reject){
	var request = https.get(url,(res)=>{
		res.pipe(file);

		file.on('finish', function(){
	            resolve(f);
		});
		
		file.on('error', function(err){
	           reject(err);
		});
	});
	
});
}

function readFile(file){
	
	return new Promise((resolve,reject)=>{
		fs.readFile(file,'utf8',(err,data)=>{
			if(err) reject(err);
			else resolve(data);
		});
		
	});
}

function extractText(file){
	return new Promise((resolve,reject)=>{
		var json_response=JSON.parse(file);
		var texto = json_response.results.transcripts[0].transcript;
		resolve(texto);
	});
	
	
}

function upload(body){
	return new Promise((resolve,reject)=>{
		s3.putObject({
			Bucket:outputBucket,
			Key: txt_key,
			Body: body,
			ACL: 'public-read'			
		},function(err,data){
			if(err)	{ 	console.log(err); }		
			else {
				console.log("success");
			}
	});	
	});
	
}

function getName(key){
	console.log(key);
    var arr = key.split('/');
    return arr[arr.length-1];
}

function getExt(key){
    var arr = key.split('/');
    var name = arr[arr.length-1];
    var arr_name = name.split('.');
    return arr_name[1];
}


function getPath(url){
        var arr = url.split("/");
        ext = getExt(url);
        
        file_name = arr[arr.length-1].replace("."+ext,".txt");
        outputBucket = arr[3];
        var path = arr[4]+"/"+arr[5]+"/"+arr[6]+"/"+arr[7]+"/"+file_name;
        
        return path;
}
