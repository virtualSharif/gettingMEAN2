var express = require('express');
var app = express();

//routes management
var userController = require('./controllers/userController.js');

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

//make all angular-dist directory files as public
var path = require('path');
app.use(express.static(path.join(__dirname, 'ng-app/dist')));

//all routes will go here
app.use('/api', userController);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'ng-app/dist/index.html'));
});

// Start the server
app.listen(19991, function() {
  console.log('Application is running at http://localhost:19991');

});
