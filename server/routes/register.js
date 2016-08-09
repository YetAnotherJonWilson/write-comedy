var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/users');


router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../../public/views/register.html'));
});

router.post('/', function(req,res,next) {
    console.log(req.body);
    Users.create(req.body.username, req.body.password, function(err) {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        } else {
            res.redirect('/');
        }
    });
});

module.exports = router;