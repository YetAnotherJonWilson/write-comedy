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
            done();
        }
        client.query('select titles.title, titles.id, titles.setup_punch, titles.subject_matter, titles.themes, titles.topics, titles.statements, ' +
            'users.username from titles inner join users on titles.user_id=users.id where user_id=$1;',
            [currentUserId], function(err, result){
            if (err){
                response.sendStatus(400);
                done();
            } else {
                response.send(result.rows);
                done();
            }
        });

    });
});

module.exports = router;