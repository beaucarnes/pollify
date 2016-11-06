var express = require('express');
var router = express.Router();

var passportGoogle = require('../auth/google');

router.get('/',
  passportGoogle.authenticate('google', { successRedirect: '/', failureRedirect: '/' }),
  function(req, res) {
    res.json(req.user);
  });


module.exports = router;

