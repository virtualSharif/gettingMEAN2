var express = require('express');
var app = express();
var users = require('./users');

app.use('/api/users', users);

app.get('/', function (req, res) {
  res.send('Users APIs can be found at /api/users');
});

app.listen(19991, function () {
  console.log('Server is running on http://localhost:19991');
});
