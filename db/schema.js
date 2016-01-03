var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var WorrySchema = new Schema({
  body: String,
  category: String
});


var WorryModel = mongoose.model('Worry', WorrySchema);
