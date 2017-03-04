describe('Cart Items Collection', function() {
  localStorage.clear();
  var cartItems = new CartItems();

  describe('adding models', function() {
    it('adds an album to the collection', function() {
      cartItems.addItem(new Album(albums_scaffold.data[0]));
      expect(cartItems.models.length).toBe(1);
    });

    it('adds a clone of the model to the collection', function() {
      cartItems.get(0).set('title', 'testing');
      expect(album.get('title')).not.toBe(cartItems.get(0).get('title'));
    });

    it('updates the quantity property when album is added', function() {
      cartItems.addItem(new Album(albums_scaffold.data[1]));
      expect(cartItems.quantity).toBe(2);
    });

    it('sets the quantity property of the model if the same album is added', function() {
      cartItems.addItem(new Album(albums_scaffold.data[0]));
      expect(cartItems.get(0).get('quantity')).toBe(2);
      expect(cartItems.quantity).toBe(3);
    });

    it('updates the total property', function() {
      var total = (cartItems.get(0).get('price') * 2) + (cartItems.get(0).get('price'));
      expect(cartItems.total).toBe(total);
    });
  });

  describe('removing models', function() {
    it('removes a model from the collection', function() {
      cartItems.destroy(1);
      expect(cartItems.models.length).toBe(1);
    });

    it('updates the quantity property', function() {
      expect(cartItems.quantity).toBe(2);
    });

    it('updates the total property', function() {
      expect(cartItems.total).toBe(cartItems.get(0).get('price') * 2);
    });
  });

  describe('using local storage', function() {
    it('loads the collection from local storage when initialized', function() {
      cartItems = new CartItems();
      expect(cartItems.models.length).toBe(1);
    });
  });
});