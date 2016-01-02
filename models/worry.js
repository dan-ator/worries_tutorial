require("../db/schema")
var mongoose = require('mongoose')

var WorryModel = mongoose.model("Worry")
module.exports = WorryModel
