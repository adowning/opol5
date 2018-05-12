# Convert audio to Text with AWS TRANSCRIBE


1. Create a **state machine** with aws step functions. (stepfunction.json).
	- step function input:
	{
	    "url": url_s3_audio,
	    "jobName": "testStepFunction"
	}
2. Create a lambda function to star a transcribe job. (startJob.js).
3. Create a lambda function to get the result from the job. (getJob.js).
4. Create a lambda function to extract the text and upload to s3. (audioAnalyse.js).
5. (optional) Set an S3 put event to execute the state machine through a lambda (execStepFunction.js)
6. Let's Rock.

 
