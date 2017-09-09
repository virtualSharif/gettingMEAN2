var express = require('express');
// Bootstrap express
var app = express();

var userController = require('./userController.js');

app.use('/api',userController);

// Start the server
app.listen(19991, function () {
	console.log('Application is running at http://localhost:19991');

});
