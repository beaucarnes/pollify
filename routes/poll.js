var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

router.get('/', function(req, res) {
  Poll.findById(req.query.pollid, function (err, poll) {
    if (err) return err;
    console.log('!!!!!!!!' +poll)
    res.render(
      'poll',
      {poll : poll}
    );
  });
});





module.exports = router;