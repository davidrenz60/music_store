var CartItems = Backbone.Collection.extend({
  addItem: function(model) {
    var existingModel = this.get(model.get('id'));

    if (existingModel) {
      existingModel.set('quantity', existingModel.get('quantity') + 1);
    } else {
      existingModel = model.clone()
      existingModel.set('quantity', 1);
      this.add(existingModel);
    }

    this.update();
    this.trigger('cart_updated');
  },

  destroy: function(id) {
    this.remove(id);
    this.update();
  },

  getQuantity: function() {
    return this.quantity;
  },

  setQuantity: function() {
    this.quantity = this.toJSON().reduce(function(a, b){
      return a + b.quantity;
    }, 0);

    return this;
  },

  getTotal: function() {
    return this.total;
  },

  setTotal: function() {
    this.total = this.toJSON().reduce(function(a,b) {
      return a + b.price * b.quantity;
    }, 0);

    return this;
  },

  update: function() {
    this.setQuantity().setTotal().setStorage();
  },

  setStorage: function() {
    localStorage.setItem('cart', JSON.stringify(this.toJSON()));
  },

  getStorage: function() {
    var stored_cart = JSON.parse(localStorage.getItem('cart'));
    this.reset(stored_cart);
    this.setTotal().setQuantity();
  },

  initialize: function() {
    this.getStorage();
    this.on('destroy', this.destroy.bind(this));
  },
});