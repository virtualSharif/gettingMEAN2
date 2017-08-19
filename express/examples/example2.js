var express = require('express');
var app = express();

//Respond with Hello World! on the homepage:
app.get('/', function (req, res) {
  res.send('Hello Express JS Framework!');
});

//Respond to GET request on the /user route
app.get('/users', function (req, res) {
  res.send('Got a Get request at /users');
});

//Respond to POST request to the /user route

app.post('/users', function (req, res) {
  res.send('Got a POST request at /users');
});

//Respond to a PUT request to the /user route:

app.put('/users', function (req, res) {
  res.send('Got a PUT request at /users');
});

//Respond to a DELETE request to the /user route:

app.delete('/users', function (req, res) {
  res.send('Got a DELETE request at /users');
});

app.listen(19991, function () {
  console.log('Server is running on http://localhost:19991');
});
