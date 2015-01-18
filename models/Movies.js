var mongoose = require('mongoose');
//var bcrypt = require('bcrypt-node.js');
//var crypto = require('crypto');
var customerSchema=new mongoose.Schema({
    movie_name:String,
    movie_categ: String,
    movie_release: Date,
    starring_actor: String
});
module.exports= mongoose.model('Customer',customerSchema);