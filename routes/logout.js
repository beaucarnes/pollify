var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

router.get('/', function(req, res, next) {
  		req.logout();
			res.redirect('/');
});

module.exports = router;
