var express = require('express');
var router = require('express').Router();
// var app = express();
// var path = require('path');
var pg = require('pg');
var parseDbUrl = require("parse-database-url");
require('dotenv').config();

var config = parseDbUrl(process.env.DATABASE_URL);

router.get('/', function(request, response){
    var client = new pg.Client(config);
    console.log(request);


    client.connect(function(err){
        if (err){
            console.log('connection error', err);

        }
        client.query('SELECT * FROM exercises', [], function(err, result){
            if(err){
                console.log('Query error', err);
                response.sendStatus(500);
            }else{
                console.log('success');
                response.send(result.rows);
            }
        })
    })
});

module.exports = router;