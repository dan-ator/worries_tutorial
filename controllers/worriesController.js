var WorryModel = require("../models/worry")

var worriesController = {

  index: function(req, res){
    WorryModel.find({}, function(err, docs){
      res.render("worries/index", {worries: docs})
    })
  },

  new: function(req, res){
    res.render('worries/new')
  },

  create: function(req, res){
    var worry = new WorryModel({category: req.body.category, body: req.body.worry})
    worry.save(function(err){
      if(err){
        console.log(err)
      } else {
        res.redirect("/worries")
      }
    })
  },

  delete: function(req, res){
    WorryModel.remove({_id:req.params.id}, function (err){
      if (err){
        console.log(err)
      }else {
        res.redirect("/worries")
      }
    })
  }

}

module.exports = worriesController;
