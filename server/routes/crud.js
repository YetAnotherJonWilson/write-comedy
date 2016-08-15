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

router.put('/replacesetup/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE setups SET setup=$1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/replacepunchline/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE punchlines SET punchline=$1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addtosetup/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE setups SET setup = setup || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addtopunchline/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE punchlines SET punchline = punchline || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addtoSM/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE subject_matter SET subject_matter = subject_matter || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addtotopic/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE topics SET topic = topic || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addtotheme/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE themes SET theme = theme || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            } else {
                response.sendStatus(200);
            }
        });
    });
});

router.put('/addaltsetup/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE alt_setups SET setup = setup || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            }
            client.query('INSERT INTO alt_setups (setup, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_setups WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                response.sendStatus(200);
            }
            });
        });
    });
});

router.put('/addaltpunchline/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client, next) {
        if (err) {
            console.log('connection error', err);
            done();
        }
        client.query('UPDATE alt_punchlines SET punchline = punchline || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            }
            client.query('INSERT INTO alt_punchlines(punchline, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_punchlines WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addaltsm/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE alt_subject_matter SET subject_matter = subject_matter || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            }
            client.query('INSERT INTO alt_subject_matter(subject_matter, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_subject_matter WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addalttopic/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE alt_topics SET topic = topic || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            }
            client.query('INSERT INTO alt_topics(topic, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_topics WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

router.put('/addalttheme/:id/:text', function(request, response) {
    console.log('request.params:', request.params);
    var id = request.params.id;
    var text = ' ' + request.params.text;

    pool.connect(function (err, client) {
        if (err) {
            console.log('connection error', err);
            done();
        }

        client.query('UPDATE alt_themes SET theme = theme || $1 WHERE title_id=$2;', [text, id], function (err, result) {
            if (err) {
                console.log(err);
                done();
            }
            client.query('INSERT INTO alt_themes(theme, title_id) SELECT $1, $2 WHERE NOT EXISTS (SELECT 1 FROM alt_themes WHERE title_id=$2);', [text, id], function (err, result) {
                if (err) {
                    console.log(err);
                    done();
                } else {
                    response.sendStatus(200);
                }
            });
        });
    });
});

module.exports = router;