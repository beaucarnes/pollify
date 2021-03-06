var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Poll = mongoose.model('polls');


router.post('/', function(req, res) {
  if (typeof req.session.pollsVoted === 'undefined') {
  req.session.pollsVoted = [];
  }
  var optionvote = 'options[' + req.body.option + '].votes';
  req.session.pollsVoted.push(req.body.pollid);
  Poll.findById(req.body.pollid, function(err,doc){
      if (err) {
        console.log("Error!!!!" + err);
      }
        //update the proper subdocument
        doc.options[req.body.option].votes++;
        //then mark it as modified and save it
        doc.markModified('brackets.rounds');
        //save the model
        doc.save();
});
  res.redirect('/poll?pollid='+req.body.pollid);
});


router.get('/', function(req, res) {
  if (req.query.pollid)
  Poll.findById(req.query.pollid, function(err, poll){
      if (err) {
        console.log("Error!!!!" + err);
      }
    res.json(poll);
});

});

module.exports = router;