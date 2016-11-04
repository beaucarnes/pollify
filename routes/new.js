var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

/* GET form. */
router.get('/', function(req, res) {
  Poll.find(function(err, polls){
    console.log(polls)
    res.render(
      'new',
      {title : 'New Poll', polls : polls}
    );
  });
});

/* POST form. */
router.post('/', function(req, res) {
  var optionsTemp = (req.body.options).split("\r\n");
  var optionsArray = [];
  optionsTemp.forEach(function(option) {
    optionsArray.push({optionName: option, votes: 0})
});
  new Poll({name : req.body.name, options : optionsArray, chartType :req.body.chart})
  .save(function(err, poll) {
    console.log("!!!!!!" + poll)
    res.redirect('new');
  });
});

module.exports = router;