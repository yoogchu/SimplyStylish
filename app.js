var bucket = "simplystylish"
var bucketRegion = "us-east-1"
var IdentityPoolId = "us-east-1:85f07d02-2161-4fb0-83f4-ed60ce27da8e"

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucket }
});

function upload_file() {
	const file1 = document.getElementById('file1')
	const file2 = document.getElementById('file2')
	s3.putObject( {Key: file1})
} 

