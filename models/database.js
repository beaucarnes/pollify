var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Poll = new Schema({
  name: String,
  options: [{
    optionName: String,
    votes: Number
  }],
  chartType: String,
  creator: String
});

Poll
.virtual('totalVotes')
.get(function () {
  var votes = 0;
  for (var option of this.options) {
    votes += option.votes;
  }
  return votes;
});

mongoose.model('polls', Poll);

mongoose.connect('mongodb://localhost/database');
