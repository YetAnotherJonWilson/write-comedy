var pg = require('pg');
var express = require('express');
var router = express.Router();
var parseDbUrl = require("parse-database-url");
require('dotenv').config();

var config = parseDbUrl(process.env.DATABASE_URL);

var pool = new pg.Pool(config);

router.delete('/deleteitem/:id', function(request, response) {
    var id = request.params.id;
    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('DELETE FROM titles WHERE id=$1;', [id], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/replaceElements/', function(request, response) {
    var id = request.body.currentId;
    var setup_punch = request.body.currentJoke;
    var themes = request.body.currentTheme;
    var subject = request.body.currentSubject;
    var topics = request.body.currentTopic;
    var statements = request.body.currentStatements;

    pool.connect(function (err, client, done) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET setup_punch=$1, themes=$2, subject_matter=$3, topics=$4, statements=$5 WHERE id=$6', [setup_punch, themes, subject, topics, statements, id], function(err, result){
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

router.put('/replaceAltElements/', function(request, response) {
    var id = request.body.currentId;
    var setup_punch = request.body.currentAltSetup;
    var themes = request.body.currentAltThemes;
    var subject = request.body.currentAltSM;
    var topics = request.body.currentAltTopic;

    pool.connect(function (err, client, done) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET alt_setup_punch=$1, alt_themes=$2, alt_subject_matter=$3, alt_topics=$4 WHERE id=$5', [setup_punch, themes, subject, topics, id], function(err, result){
            if (err){
                done();
            } else {
                response.sendStatus(200);
                done();
            }
        });
    });
});

router.get('/alternatematerial/:id', function(request, response){
    var id = request.params.id;

    pool.connect(function(err, client, done){
        if (err){
            console.log('connection error', err);
            done();
        }
        client.query('select titles.title, titles.id, titles.setup_punch, titles.topics, titles.subject_matter, titles.statements, titles.themes, titles.alt_setup_punch, titles.alt_subject_matter, titles.alt_themes, titles.alt_topics from titles WHERE id=$1;', [id], function(err, result){
                if (err){
                    console.log(err);
                } else {
                    console.log("result.rows", result.rows);
                    response.send(result.rows);
                }
            });

    });
});

module.exports = router;