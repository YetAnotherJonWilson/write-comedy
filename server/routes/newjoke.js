var express = require('express');
var router = express.Router();
var passport = require('passport');
var path = require('path');
var Users = require('../models/users');

router.get('/', function(req, res, next){
    res.sendFile(path.resolve(__dirname, '../../public/views/newjoke.html'));
});

module.exports = router;