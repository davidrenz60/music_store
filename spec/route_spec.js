var request = require('request');
var root = 'http://localhost:3000';
var albums;

describe('Music Store Routes', function() {
  describe("GET /", function() {
    it('returns status code 200', function(done) {
      request.get(root, function(e, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("GET /albums/new", function() {
    it('returns status code 200', function(done) {
      request.get(root + '/albums/new', function(e, res, body) {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });

  describe("POST /albums", function() {
    it('returns a json object', function(done) {
      var data = { data: "data" };
      request.post({
        url: root + '/albums',
        form: data,
      }, function(e, res, body) {
        var json = JSON.parse(body);
        expect(typeof json).toBe('object');
        expect(json.data).toBeDefined();
        done();
      });
    });
  });
});