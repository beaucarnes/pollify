var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

/* GET home page. */
router.get('/', function(req, res, next) {
  Poll.find({}, function(err, polls) {
    res.render('index', { polls: polls });
  });
});

module.exports = router;
