var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var file_path = path.resolve(path.dirname(__dirname), 'data/albums.json');

function getAlbums() {
  return JSON.parse(fs.readFileSync(file_path, 'utf-8'));
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    albums: getAlbums(),
  });
});

module.exports = router;
