var router = new (Backbone.Router.extend({
  routes: {
    "albums/new": App.newAlbum,
    "albums/edit/:id": 'editAlbum',
  },

  index: function() {
    App.indexView();
  },

  editAlbum: function(id) {
    App.editAlbum(id);
  },

  initialize: function() {
    this.route(/^\/?$/, 'index', this.index);
  }
}))();

Backbone.history.start({
  pushState: true,
});

$(document).on('click', "a[href^='/']", function(e) {
  e.preventDefault();
  router.navigate($(e.currentTarget).attr('href').replace(/\//, ''), {
    trigger: true,
  });
});
