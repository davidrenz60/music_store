var NewAlbumView = Backbone.View.extend({
  attributes: {
    id: "album_new"
  },

  template: App.templates.new_album,

  events: {
    submit: 'create',
  },

  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },

  create: function(e) {
    e.preventDefault();
    var $form = this.$('form');

    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
      success: function(json) {
        App.albums.add(json);
        App.indexView();
      },
    });
  },

  initialize: function() {
    this.render();
  }
});