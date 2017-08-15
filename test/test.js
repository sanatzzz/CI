var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with This is CI test', function(done) {
    request(app).get('/').expect('This is CI test', done);
  });
});