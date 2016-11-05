//mongoose config
require('./models/database');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var express = require('express');
var router = express.Router();



var routes = require('./routes/index');
var users = require('./routes/users');
var new_poll = require('./routes/new');
var poll = require('./routes/poll');
var delete_poll = require('./routes/delete');
var mypolls = require('./routes/mypolls');
var vote = require('./routes/vote');
var login = require('./routes/login')
var logout = require('./routes/logout')
var google = require('./routes/google');
var googlecallback = require('./routes/googlecallback')

var app = express();

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/new', new_poll);
app.use('/create', new_poll);
app.use('/poll', poll);
app.use('/poll/delete', delete_poll)
app.use('/mypolls', mypolls);
app.use('/vote', vote)
app.use('/login', login);
app.use('/logout', logout);
app.use('/auth/google', google)
app.use('/auth/google/callback', googlecallback);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});








module.exports = app;
