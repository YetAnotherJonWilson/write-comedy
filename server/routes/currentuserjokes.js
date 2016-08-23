var express = require('express');
var router = require('express').Router();
var pg = require('pg');
var parseDbUrl = require("parse-database-url");


// If we are running on Heroku, use the remote database (with SSL)
if(process.env.DATABASE_URL != undefined) {
    var config = parseDbUrl(process.env["DATABASE_URL"] + "?ssl=true");
} else {
    // running locally, use our local database instead
    var config = {
        database: 'ComedyApp',
        port: 5432,
        max: 15
    };
}

var pool = new pg.Pool(config);

router.get('/', function(request, response){
    var currentUserId = request.user.id;

    pool.connect(function(err, client, done){
        if (err){
            console.log('connection error', err);
            done();
        }
        client.query('select titles.title, titles.id, setups.setup, punchlines.punchline, subject_matter.subject_matter, themes.theme, topics.topic from titles ' +
            'left join setups on setups.title_id = titles.id left join punchlines on punchlines.title_id = titles.id left join subject_matter on ' +
            'subject_matter.title_id = titles.id left join themes on themes.title_id = titles.id left join topics on topics.title_id = titles.id where user_id=$1 order by title;',
            [currentUserId], function(err, result){
            if (err){
                console.log(err);
                console.log(currentUserId);
                done();
            } else {
                console.log('Current UserId', currentUserId);
                console.log(result.rows);
                response.send(result.rows);
                done();
            }
        });

    });
});

module.exports = router;