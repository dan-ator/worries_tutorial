var mongoose = require('mongoose')
var WorryModel = require("../models/worry")
mongoose.connect('mongodb://localhost/worries')

WorryModel.remove({}, function(err){
  console.log(err)
}).then(function(){
    var worry1 = new WorryModel({
      body: "I won't be able to find a job after graduation",
      category: "employment"
    });

    var worry2 = new WorryModel({
      body: "I won't be able to stay on my diet",
      category: "health"
    });

    var worry3 = new WorryModel({
      body: "I don't really know anything about coding",
      category: "employment"
    });

    var worry4 = new WorryModel({
      body: "I won't get all my work done",
      category: "coding"
    });

    var worries = [worry1, worry2, worry3, worry4];
    worries.forEach(function(worry){
      worry.save(function(err){
        if (err){
          console.log(err)
        } else {
          console.log("worries are saved")
        }
      })
    })
})
