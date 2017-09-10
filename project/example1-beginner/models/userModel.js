// Mongoose import
var mongoose = require('mongoose');
var config = require('../config/config.js');

// Mongoose connection to MongoDB
mongoose.connect(config.url,{useMongoClient: true},  function (error) {
    if (error) {
        console.log(error);
    }
});

// Mongoose Schema definition
var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String
});

// Mongoose Model definition
var userModel = mongoose.model('user', UserSchema);

module.exports = userModel;
