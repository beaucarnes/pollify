var express = require('express');
var router = express.Router();
var passport = require("passport")


router.post('/', passport.authenticate('local', 
    { successRedirect: '/',
    failureRedirect: '/login' }));


module.exports = router;
