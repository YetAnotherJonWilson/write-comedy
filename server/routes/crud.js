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

router.put('/replacesetup/', function(request, response) {
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET setup_punch=$1 WHERE id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addtosetup/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET setup_punch = setup_punch || $1 WHERE id=$2 AND setup_punch IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET setup_punch = $1 WHERE id=$2 AND setup_punch IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});


router.put('/addtoSM/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }
        client.query('UPDATE titles SET subject_matter = subject_matter || $1 WHERE id=$2 AND subject_matter IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET subject_matter = $1 WHERE id=$2 AND subject_matter IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addtotopic/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET topics = topics || $1 WHERE id=$2 AND topics IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET topics = $1 WHERE id=$2 AND topics IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addtotheme/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET themes = themes || $1 WHERE id=$2 AND themes IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET themes = $1 WHERE id=$2 AND themes IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addstatement/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET statements = statements || $1 WHERE id=$2 AND statements IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET statements = $1 WHERE id=$2 AND statements IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addaltsetup/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET alt_setup_punch = alt_setup_punch || $1 WHERE id=$2 AND alt_setup_punch IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET alt_setup_punch = $1 WHERE id = $2 AND alt_setup_punch IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                response.sendStatus(200);
            }
            });
        });
    });
});

router.put('/addaltsm/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE titles SET alt_subject_matter = alt_subject_matter || $1 WHERE id=$2 AND alt_subject_matter IS NOT NULL;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('UPDATE titles SET alt_subject_matter = $1 WHERE id = $2 AND alt_subject_matter IS NULL;', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addalttopic/', function(request, response) {
    //console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE alt_topics SET topic = topic || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('INSERT INTO alt_topics(topic, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_topics WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addalttheme/', function(request, response) {
    console.log('request.body:', request.body);
    var id = request.body.id;
    var text = ' ' + request.body.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
        }

        client.query('UPDATE alt_themes SET theme = theme || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
            }
            client.query('INSERT INTO alt_themes(theme, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_themes WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                } else {
                    response.sendStatus(200);
                }
            });
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
        client.query('select titles.title, titles.id, alt_setups.setup, alt_punchlines.punchline, alt_subject_matter.subject_matter, alt_themes.theme, alt_topics.topic from titles ' +
            'left join alt_setups on alt_setups.title_id = titles.id left join alt_punchlines on alt_punchlines.title_id = titles.id left join alt_subject_matter on ' +
            'alt_subject_matter.title_id = titles.id left join alt_themes on alt_themes.title_id = titles.id left join alt_topics on alt_topics.title_id = titles.id where titles.id=$1 order by title;',
            [id], function(err, result){
                if (err){
                    console.log(err);
                    done();
                } else {
                    console.log(result.rows);
                    response.send(result.rows);
                    done();
                }
            });

    });
});

module.exports = router;