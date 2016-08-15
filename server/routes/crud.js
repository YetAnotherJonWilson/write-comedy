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


router.delete('/deleteitem/:id', function(request, response) {
    console.log('id on server', request.params);
    var id = request.params.id;
    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('DELETE FROM titles WHERE id=$1;', [id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                removeFromSetups();
                removeFromPunchlines();
                removeFromThemes();
                removeFromTopics();
                removeFromSubjectMatter();
                removeFromAltSetups();
                removeFromAltPunchlines();
                removeFromAltThemes();
                removeFromAltTopics();
                removeFromAltSubjectMatter();
                response.sendStatus(200);
            }
            function removeFromSetups() {
                client.query('DELETE FROM setups WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromPunchlines() {
                client.query('DELETE FROM punchlines WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromThemes() {
                client.query('DELETE FROM themes WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromTopics() {
                client.query('DELETE FROM topics WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromSubjectMatter() {
                client.query('DELETE FROM subject_matter WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }
            function removeFromAltSetups() {
                client.query('DELETE FROM alt_setups WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromAltPunchlines() {
                client.query('DELETE FROM alt_punchlines WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromAltThemes() {
                client.query('DELETE FROM alt_themes WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromAltTopics() {
                client.query('DELETE FROM alt_topics WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }

            function removeFromAltSubjectMatter() {
                client.query('DELETE FROM alt_subject_matter WHERE title_id=$1;', [id], function (err, result) {
                    if (err) {
                        console.log(err);
                        done();
                    }

                });
            }


        });
    });
});




module.exports = router;