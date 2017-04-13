var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/ComedyApp';
var express = require('express');
var router = express.Router();
var parseDbUrl = require("parse-database-url");
require('dotenv').config();

var config = parseDbUrl(process.env.DATABASE_URL);

var pool = new pg.Pool(config);

var ranNumber = '';

function genRanNumber(){
    ranNumber = Math.floor(Math.random() * 47) + 1;
    return ranNumber;
}


router.get('/', function(request, response){
    genRanNumber();

    pool.connect(function(err, client){
        if (err){
            done();
        }
        client.query('SELECT * FROM exercises WHERE id=$1', [ranNumber], function(err, result){
            if (err){
                done();
            } else {
                response.send(result.rows[0]);
            }
        });

    });
});




module.exports = router;