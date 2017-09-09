var express = require('express');
// Bootstrap express
var app = express();
//userModel
var userModel = require('./userModel.js');
//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// routes management
app.get('/users', function (req, res) {
    userModel.find({}, function (err, data) {
        res.send(data);
    });
});

app.get('/users/:userId', function (req, res) {
    if (req.params.userId) {
        userModel.find({ _id: req.params.userId }, function (err, data) {
            res.send(data);
        });
    }
});

app.post('/users',function (req, res) {
	var userdata = new userModel(
		{ firstName :req.body.firstName,
		  lastName: req.body.lastName,
		  emailId : req.body.emailId
		});
	userdata.save(function (err, data) {
		res.send(data);
	});

});

app.put('/users/:userId',function (req, res) {
	userModel.update({_id : req.params.userId },
		{
		  firstName :req.body.firstName,
		  lastName: req.body.lastName,
		  emailId : req.body.emailId
		},
		function (err, data) {
		res.send(data);
	});

});

app.delete('/users/:userId', function (req, res) {
	userModel.remove({ _id : req.params.userId}, function (err, data) {
		res.send(data);
	});
});

module.exports = app;
