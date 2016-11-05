var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		res.redirect('/auth/google');
	}
}

/* GET form. */
router.get('/', isLoggedIn, function(req, res) {
  Poll.find(function(err, polls){
    console.log(polls)
    res.render(
      'new',
      {title : 'New Poll', polls : polls, logged: true}
    );
  });
});

/* POST form. */
router.post('/', isLoggedIn, function(req, res) {
  var optionsTemp = (req.body.options).split("\r\n");
  var optionsArray = [];
  optionsTemp.forEach(function(option) {
    optionsArray.push({optionName: option, votes: 0})
});
  new Poll({name : req.body.name, options : optionsArray, creator : req.user.someID, chartType : req.body.chart})
  .save(function(err, poll) {
    res.render('poll',
      {poll : poll, logged: true});
  });
});

module.exports = router;