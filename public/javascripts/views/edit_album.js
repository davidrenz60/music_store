var EditAlbumView = Backbone.View.extend({
  attributes: {
    id: "album_edit"
  },

  template: App.templates.edit_album,

  events: {
    submit: 'update',
  },

  update: function(e) {
    e.preventDefault();
    var $form = $('form');
    var attrs = {};
    $form.serializeArray().forEach(function(obj) {
      attrs[obj.name] = obj.value;
    });

    this.model.save(attrs, {
      success: function() {
        App.indexView();
        router.navigate('/');
      }
    });
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },

  initialize: function() {
    this.render();
  },
});