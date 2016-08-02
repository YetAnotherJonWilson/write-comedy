var express = require('express');
var index = require('./index');
var passport = require('passport');
var app = express();

// This will configure Passport to use Auth0
var strategy = require('./setup-passport');

// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');

//"configs"
app.use(express.static('public'));
app.use(cookieParser());
// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({ secret: 'Txu1fhQu8ckqrNhjV0Q3lZFvKf3LF4npl27PXNPJxxzSOWfnUMy_2jkpbT40p82p', resave: false,  saveUninitialized: false }));


app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', index);


// Auth0 callback handler
// For security purposes, you must add the callback URL of your app to your Application Settings.
// In this case, the callbackURL should look something like:
// http://yourUrl/callback
// [?   localhost  ?]
app.get('/callback',
    passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
    function(req, res) {
        if (!req.user) {
            throw new Error('user null');
        }
        res.redirect("/user");
    });

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});



