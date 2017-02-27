var path = require('path');
var Albums = require(path.resolve(path.dirname(__dirname), 'local_modules/albums.js'));

module.exports = function(router) {
  router.post('/albums', function(req, res) {
    var album = req.body;
    var albums = Albums.get();
    album.id = Albums.getLastID();
    albums.push(album);

    Albums.set(albums);
    res.json(album);
  });

  router.get('/albums/new', function(req, res, next) {
    res.render('new', {
      albums: Albums.get(),
    });
  });
}
