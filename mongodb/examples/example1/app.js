var express = require('express');

// Step 1 : Mongoose import
var mongoose = require('mongoose');

// Step 2 :Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost:27017/mongoose-test',{useMongoClient: true}, function (error) {
    if (error) {
        console.log(error);
    }
});

// Step 3 : Mongoose Schema definition
var userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String
});

// Step 4 : Mongoose Model definition
var user = mongoose.model('user', userSchema);

// Bootstrap express
var app = express();

// routes management
app.get('/api/users', function (req, res) {
    user.find({}, function (err, data) {
        res.send(data);
    });
});

app.get('/api/users/:userId', function (req, res) {
    if (req.params.userId) {
        user.findById(req.params.userId, function (err, data) {
            if(err){
              res.send('No record found');
            }
            res.send(data);
        });
    }
});

//default endpoint mapping
app.get('*', function(req, res) {
  var data ={
    'status': '404',
    'message': 'Oops! No endpoints exists',
    'request-url': req.url
  }
  res.send(data);
});

// Start the server
app.listen(19991, function () {
	console.log('Application is running at http://localhost:19991');

});
