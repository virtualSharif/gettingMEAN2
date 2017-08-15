var http = require('http');
var fs = require('fs');
var url = require('url');
//Create the Server
http.createServer(function (request, response){
	//Parse the request containing filename
	var pathname = url.parse(request.url).pathname;
	// Print the name of the file for which request is made.
	console.log("request for "+ pathname + " received");
	// Read the requested file content from file system
	fs.readFile(pathname.substr(1), function (err, data) {
		if(err){
			console.log(err);
			// HTTP Status: 404 : NOT FOUND
			response.writeHead(404, {'Content-Type': 'text/html'});
		} else {
			//HTTP status : 200 : OK
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(data.toString());
		}
		//send response body
		response.end();
	});
}).listen(19991);

console.log("Server is running at http://localhost:19991");
