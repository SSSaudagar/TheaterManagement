var express = require('express');
var hbs=require('hbs');
var bodyparser= require('body-parser');
var app = express();
var path = require('path');
app.set('views',path.join(__dirname, '/views'));
app.set('view engine','html');
app.engine('html',hbs.__express);
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())
app.use(express.static('public'));

//routes

app.listen(3000);