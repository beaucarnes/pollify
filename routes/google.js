var express = require('express');
var router = express.Router();

var passportGoogle = require('../auth/google');

router.get('/', passportGoogle.authenticate('google', { scope: [ 'email' ] }));

module.exports = router;
