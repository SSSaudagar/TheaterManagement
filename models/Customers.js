var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-node.js');
//var crypto = require('crypto');
var customerSchema=new mongoose.Schema({
    name:String,
    password:String,
    email: String
});
module.exports= mongoose.model('Customer',customerSchema);