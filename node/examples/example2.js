//step 1 : require module
var http = require("http");

//step 2 : create server
http.createServer(function (request, response){

	//create response head
	response.writeHead(200, {'Content-type': 'text/plain'});

	//send the response Body
	response.end('Hello, Node.js!');

})
//listening to the port
.listen(19991);

//console will print the message
console.log('Server running at http://127.0.0.1:19991');
