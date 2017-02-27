var path = require('path');
var fs = require('fs');

var Albums = {
  file_path: path.resolve(path.dirname(__dirname), 'data/albums.json'),

  get: function() {
    return JSON.parse(fs.readFileSync(this.file_path, 'utf-8')).data;
  },

  set: function(albums) {
    var id = this.getLastID() + 1;
    var data = { last_id: id, data: albums }
    fs.writeFileSync(this.file_path, JSON.stringify(data), 'utf8');
  },

  getLastID: function() {
    return JSON.parse(fs.readFileSync(this.file_path, 'utf-8')).last_id;
  },
}

module.exports = Albums;
