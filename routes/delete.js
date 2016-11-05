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

router.get('/', isLoggedIn, function(req, res) {
  var loggedin = req.isAuthenticated();
  
  Poll.remove({ _id : req.query.pollid }, function(err, callback){
    if (err) res.send('Error: Cannot delete poll.');
    res.redirect('../mypolls');

  });
  

});



module.exports = router;