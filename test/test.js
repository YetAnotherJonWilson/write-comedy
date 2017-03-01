var chai = require('chai');
var assert = require('chai').assert;
var expect = require('chai').expect;
var chaiHttp = require('chai-http');
var server = require('../server/server');
var should = chai.should();
var routes = require('../server/routes');

chai.use(chaiHttp);

describe('exercises', function() {
    it('should send random exercise from /exerciseRandomizer GET', function(done) {
        chai.request(server)
            .get('/exerciseRandomizer')
            .end(function(err, res){
                res.should.be.an('object');
                done();
            });
    });
});