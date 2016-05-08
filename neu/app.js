var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var registration = require('./routes/registration');
var votersList = require('./routes/readdrive');
var unionmembers = require('./routes/unionmembers');
var donations = require('./routes/donations');
var future_plans = require('./routes/future_plans');
var gallery = require('./routes/gallery');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/lnp/js', express.static(path.join(__dirname, 'public/js')));
app.use('/lnp/placeholders', express.static(path.join(__dirname, 'public/placeholders')));
app.use('/lnp/css', express.static(path.join(__dirname, 'public/css')));
app.use('/lnp', express.static(path.join(__dirname, 'public')));

app.use('/lnp/fonts', express.static(path.join(__dirname, 'public/fonts')));
app.use('/lnp/icons', express.static(path.join(__dirname, 'public/icons')));
app.use('/lnp/images', express.static(path.join(__dirname, 'public/images')));


app.use('/lnp/font', express.static(path.join(__dirname, 'public/font')));
app.use('/lnp/pages', express.static(path.join(__dirname, 'public/pages')));
app.use('/lnp/pages', express.static(path.join(__dirname, 'public/pages')));



app.set('port', (process.env.PORT || 5000));

app.use('/', routes);
app.use('/users', users);
app.use('/api/register', registration);
app.use('/lnp/voters', votersList);
app.use('/lnp/union_members', unionmembers);
app.use('/lnp/donations', donations);
app.use('/lnp/future_plans', future_plans);
app.use('/lnp/gallery', gallery);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


module.exports = app;
