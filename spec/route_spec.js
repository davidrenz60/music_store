var request = require('request');
var root = 'http://localhost:3000';

describe("GET /", function() {
 it('renders the layout', function(done) {
   request.get(root, function(e, res, body) {
    expect(res.statusCode).toBe(200);
    expect(body).toMatch(/<main>/);
    done();
   });
 });
});