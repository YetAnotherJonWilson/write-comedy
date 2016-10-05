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
    var setup = request.body.setup;
    var punchline = request.body.punchline;
    var theme = request.body.theme;
    var subject = request.body.subject;
    var topic = request.body.topic;

    pool.connect(function(err, client, done){
        if (err){
            console.log('connection error', err);
            done();
        }
        client.query('INSERT INTO titles (title, user_id) VALUES ($1, $2) RETURNING id', [title, userId], function(err, result){
            if (err){
                console.log(err);
                done();
            } else {
                var returnedId = result.rows[0].id;
                insertSetup(returnedId);
                insertPunchline(returnedId);
                insertTheme(returnedId);
                insertSubject(returnedId);
                insertTopic(returnedId);
                response.sendStatus(200);
                done();
            }

            function insertSetup(id){
                client.query('INSERT INTO setups (setup, title_id) VALUES ($1, $2)', [setup, id], function(err, result){
                    if(err){
                        console.log('err', err);
                    } else {

                        console.log('Inserted setup successfully');
                    }
                });
            }
            function insertPunchline(id){
                client.query('INSERT INTO punchlines (punchline, title_id) VALUES ($1, $2)', [punchline, id], function(err, result){
                    if(err){
                        console.log('err', err);
                    } else {

                        console.log('Inserted punchline successfully');
                    }
                });
            }
            function insertTheme(id){
                client.query('INSERT INTO themes (theme, title_id) VALUES ($1, $2)', [theme, id], function(err, result){
                    if(err){
                        console.log('err', err);
                    } else {

                        console.log('Inserted theme successfully');
                    }
                });
            }
            function insertSubject(id){
                client.query('INSERT INTO subject_matter (subject_matter, title_id) VALUES ($1, $2)', [subject, id], function(err, result){
                    if(err){
                        console.log('err', err);
                    } else {

                        console.log('Inserted subject-matter successfully');
                    }
                });
            }
            function insertTopic(id){
                client.query('INSERT INTO topics (topic, title_id) VALUES ($1, $2)', [topic, id], function(err, result){
                    if(err){
                        console.log('err', err);
                    } else {

                        console.log('Inserted topic successfully');
                    }
                });
            }
        });
    });
});




module.exports = router;