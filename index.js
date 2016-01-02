var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var worriesController = require('./controllers/worriesController')
var hbs = require('hbs');
var app = express();
app.set("view engine", "hbs")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'))

mongoose.connect('mongodb://localhost/worries')

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

app.get('/worries', worriesController.index)
app.get('/worries/new', worriesController.new)
app.post("/worries", worriesController.create)
app.delete("/worries/:id", worriesController.delete)
