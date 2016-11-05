var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');

router.get('/', function(req, res) {
  var loggedin = req.isAuthenticated();
  var hasVoted = false;
  var votedPolls =  'undefined' !== typeof req.session.pollsVoted? req.session.pollsVoted : [];
  for(var i = 0; i<votedPolls.length; i++){
    if(req.query.pollid==votedPolls[i]){
      hasVoted = true;
      break;
    }
  }

  Poll.findById(req.query.pollid, function (err, poll) {
    if (err) res.send('Error: Cannot access poll.');
    res.render(
      'poll',
      {poll : poll, logged: loggedin, voted : hasVoted}
    );
  });
});





module.exports = router;