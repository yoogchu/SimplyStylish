const http = require('http')
const express = require('express')
const fs = require('fs')
const formidable = require('formidable')
const server = express()
const port = 4000

server.use("/static", express.static('./static/'));
// replace this with the location to save uploaded files
var upload_path = "/Users/yoog/code/SimplyStylish";

http.createServer(function (req, res) {
	if (req.url == '/upload') {
		res.writeHead(200)
		res.write(fs.readFileSync('upload.html'))
		return res.end()
	} else if (req.url == '/upload_images') {
		var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
        	console.log(err)
        	console.log(fields)
        	console.log(files)
            // oldpath : temporary folder to which file is saved to
            var oldpath = files.file1.path;
            var newpath = upload_path + files.filetoupload.name;
            // copy the file to a new location
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                // you may respond with another html page
                res.write('File uploaded and moved!');
                res.end();
            })
        })
	}
}).listen(port)

// server.get('/', (req, res) => {
// 	res.sendFile(__dirname + '/upload.html')
// })
