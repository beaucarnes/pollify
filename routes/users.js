var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Go back and register!');
});

module.exports = router;
