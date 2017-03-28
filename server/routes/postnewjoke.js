var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/ComedyApp';
var express = require('express');
var router = express.Router();
var parseDbUrl = require("parse-database-url");
require('dotenv').config();

var config = parseDbUrl(process.env.DATABASE_URL);

var pool = new pg.Pool(config);


router.post('/', function(request, response){
    var title = request.body.title;
    var userId = request.user.id;
    var setup_punch = request.body.setup;
    var themes = request.body.theme;
    var subject = request.body.subject;
    var topics = request.body.topic;
    var statements = request.body.statements;

    pool.connect(function(err, client, done){
        if (err){
            console.log('connection error', err);
            done();
        }
        client.query('INSERT INTO titles (title, user_id, setup_punch, themes, subject_matter, topics, statements) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id', [title, userId, setup_punch, themes, subject, topics, statements], function(err, result){
            if (err){
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
                done();
            }
        });
    });
});




module.exports = router;