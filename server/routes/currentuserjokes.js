var express = require('express');
var router = require('express').Router();
var pg = require('pg');
var parseDbUrl = require("parse-database-url");
require('dotenv').config();

var config = parseDbUrl(process.env.DATABASE_URL);

var pool = new pg.Pool(config);

router.get('/', function(request, response){
    var currentUserId = request.user.id;

    pool.connect(function(err, client, done){
        if (err){
            console.log('connection error', err);
            done();
        }
        client.query('select titles.title, titles.id, titles.setup_punch, titles.subject_matter, titles.themes, titles.topics, titles.statements from titles ' +
            'where user_id=$1 order by title;',
            [currentUserId], function(err, result){
            if (err){
                console.log(err);
                console.log(currentUserId);
                console.log("Current User: ", request.user);
                response.sendStatus(400);
                done();
            } else {
                console.log('Current UserId', currentUserId);
                console.log("Current User: ", request.user.username);
                console.log(result.rows);
                response.send(result.rows);
                done();
            }
        });

    });
});

module.exports = router;