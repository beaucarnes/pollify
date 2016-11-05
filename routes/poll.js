var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

router.get('/', function(req, res) {
  var loggedin = req.isAuthenticated();
  Poll.findById(req.query.pollid, function (err, poll) {
    if (err) res.send('Error: Cannot access poll.');
    res.render(
      'poll',
      {poll : poll, logged: loggedin}
    );
  });
});





module.exports = router;