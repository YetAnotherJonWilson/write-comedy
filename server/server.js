var express = require('express');
var index = require('./routes/index');
var exlist = require('./routes/exlist');
var passport = require('passport');
var app = express();
var localStrategy = require('passport-local').Strategy;
var register = require('./routes/register');
var newjoke = require('./routes/newjoke');
var postNewJoke = require('./routes/postnewjoke');
var login = require('./routes/login');
var bodyParser = require('body-parser');
var User = require('./models/users');


// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');

// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({
    secret: 'maddon',
    key: 'user',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: 1800000, secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new localStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, function(username, password, done) {
    User.findAndComparePassword(username, password, function(err, isMatch, user){
        if (err) {
            return done(err);
        }

        if (isMatch) {
            // successfully auth the user
            return done(null, user);
        } else {
            done(null, false);
        }
    });
}));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if (err) {
            return done(err);
        }
        done(null, user);
    });
});

//"configs"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cookieParser());

//routes
app.use('/', index);
app.use('/getex', exlist);
app.use('/register', index);
app.use('/signup', register);
app.use('/login', login);
app.use('/newjoke', index);
app.use('/success', index);
app.use('/exercises', index);
app.use('/alternates', index);
app.use('/postNewJoke', postNewJoke);
app.get('/getCurrentUserName', function(request, response){
    // console.log(request);
    response.send(request.user.username);
});
app.get('/getCurrentUserId', function(request, response){
    var data = {id: request.user.id};
    response.send(data);
});
app.get('/getCurrentJokeById', function(request, response){
    console.log(request.user, request.body);
    // var data = {id: request.body.id};
    response.sendStatus(200);
});

app.use('/api', function(req, res, next){
    if (req.isAuthenticated()) {
        next();
    } else {
        res.sendStatus(403);
    }
});

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



