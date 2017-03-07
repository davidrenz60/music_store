var App = {
  templates: JST,
  $el: $('main'),

  indexView: function() {
    this.index = new IndexView();
    this.renderAlbums();
    this.createCart();
    this.bindEvents();
  },

  createCart: function() {
    this.cart = new CartItems();
    this.cart.view = new CartView({
      collection: this.cart,
    });
  },

  renderAlbums: function() {
    this.albums.each(this.renderAlbumView);
  },

  renderAlbumView: function(album) {
    new AlbumView({
      model: album,
    });
  },

  newAlbum: function() {
    new NewAlbumView();
  },

  editAlbum: function(id) {
    new EditAlbumView({
      model: this.albums.get(id)
    });
  },

  bindEvents: function() {
    _.extend(this, Backbone.Events);
    this.on('add_to_cart', this.cart.addItem.bind(this.cart));
  },
};

Handlebars.registerHelper('format_price', function(price) {
  return (+price).toFixed(2);
});