var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(req, res) {
    res.send(req.isAuthenticated());
});

router.get('/passportSuccess', function(req, res){
    res.sendStatus(200);
});

router.get('/passportFailure', function(req, res){
    res.sendStatus(401);
});

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/login/passportSuccess',
        failureRedirect: '/login/passportFailure'
    })
);


module.exports = router;