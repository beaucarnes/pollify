var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

router.get('/', function(req, res, next) {
  var loggedin = req.isAuthenticated()

  Poll.find({}, function(err, polls) {
    res.render('index', { polls: polls, logged: loggedin });
  });
});

module.exports = router;
