var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// var CategorySchema = new Schema({
//   body: String
// });

var WorrySchema = new Schema({
  body: String,
  category: String
  // category: [CategorySchema]
});


var WorryModel = mongoose.model('Worry', WorrySchema);
// var CategoryModel = mongoose.model('Category', CategorySchema);
