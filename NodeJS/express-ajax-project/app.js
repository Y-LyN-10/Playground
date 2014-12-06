var express = require('express'),
    path = require('path'),
    //favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    request = require('request');

//var routes = require('./routes/index');
//var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
//app.use('/users', users);

app.get('/', function(req, res) {res.render('index')});
app.get('/searching', function(req, res){
    // input value from search
    var val = req.query.search;
    console.log(val);

    var publicKey = 'put your public key here to work';
    var cx = 'put your cx here to work';
    var url = 'https://www.googleapis.com/customsearch/v1?key=' + publicKey + '&cx=' + cx +'&q=' + val;

    var jobOffers = {};

    request(url, function(err, resp, body) {
        var body = JSON.parse(body);
        if(body.items){
            var results = body.items;
            //results.forEach(function (item) {
			//		Collect only information that we need in a new object
            //});

            jobOffers['link'] = body.items[0].link;
            jobOffers['title'] = body.items[0].title;
        } else {
            jobOffers = 'No results found';
        }

        // pass back the results to client side
        console.log(body.items[0]);
        res.send(jobOffers);
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


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
