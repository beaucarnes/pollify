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

router.get('/', isLoggedIn, function(req, res, next) {

  Poll.find({creator: req.user.someID}, function(err, polls) {
    res.render('mypolls', { polls: polls, logged: true });
  });
});

module.exports = router;
