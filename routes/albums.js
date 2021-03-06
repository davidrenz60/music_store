var path = require('path');
var Albums = require(path.resolve(path.dirname(__dirname), 'local_modules/albums.js'));
var _ = require('underscore');

module.exports = function(router) {
  router.get('/albums', function(req, res) {
    res.json(Albums.get());
  });

  router.post('/albums', function(req, res) {
    var album = req.body;
    var albums = Albums.get();
    album.id = Albums.getLastID();
    albums.push(album);

    Albums.set(albums);
    res.json(album);
  });

  router.put('/albums/:id', function(req, res) {
    var albums = Albums.get();
    var currentAlbum = _(albums).findWhere({ id: +req.body.id });
    _.extend(currentAlbum, req.body);

    Albums.set(albums);
    res.json(currentAlbum);
  });

  router.delete('/albums/:id', function(req, res) {
    var albums = _(Albums.get()).reject(function(album) {
      return album.id === +req.params.id;
    });

    Albums.set(albums);
    res.status(200).end();
  });

  router.get('/albums/new', function(req, res) {
    res.render('new', {
      albums: Albums.get(),
    });
  });

  router.get('/albums/edit/:id', function(req, res) {
    res.render('edit', {
      albums: Albums.get(),
    });
  });
};