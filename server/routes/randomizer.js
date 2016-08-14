var pg = require('pg');
// var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/ComedyApp';
var express = require('express');
var router = express.Router();

var config = {
    database: 'ComedyApp',
    port: 5432,
    max: 15
};

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
            console.log('connection error', err);
            done();
        }
        client.query('SELECT * FROM exercises WHERE id=$1', [ranNumber], function(err, result){
            if (err){
                console.log(err);
                done();
            } else {
                console.log('random ex sent');
                console.log(result.rows[0]);
                response.send(result.rows[0]);
            }
        });

    });
});




module.exports = router;