var path = require('path');
var Albums = require(path.resolve(path.dirname(__dirname), 'local_modules/albums.js'));

module.exports = function(router) {
  router.get('/', function(req, res) {
    res.render('index');
  });
};
