var express = require('express');
var router = require('express').Router();
var passport = require('passport');
var path = require('path');

router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../../public/views/index.html'));
});

module.exports = router;
