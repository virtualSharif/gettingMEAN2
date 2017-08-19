var express = require('express');
var app = express();
var birds = require('./birds');

app.use('/birds', birds);

app.get('/', function (req, res) {
  res.send('Hello Express JS Framework');
});

app.listen(19991, function () {
  console.log('Server is running on http://localhost:19991');
});
