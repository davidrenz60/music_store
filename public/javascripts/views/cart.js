var CartView = Backbone.View.extend({
  el: '#cart',
  template: App.templates.cart,
  events: {
    'click a': 'destroy',
  },

  destroy: function(e) {
    e.preventDefault();
    var id = $(e.target).data('id');
    this.collection.trigger('destroy', id);
    this.render();
  },

  render: function() {
    this.$el.html(App.templates.cart({
      quantity: this.collection.getQuantity(),
      total: this.collection.getTotal(),
      items: this.collection.toJSON(),
    }));
  },

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'cart_updated', this.render);
  },
});