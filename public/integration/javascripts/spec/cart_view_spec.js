describe('Cart View', function() {
  var cartItems = new CartItems();
  var cartView;
  cartItems.addItem(album);

  afterEach(function() {
    $('#cart').empty();
  });

  it("renders '0 items' with an empty collection", function() {
    new CartView({ collection: new CartItems });
    expect($('#cart p').text()).toBe('0 items');
  });

  it('renders a model', function() {
    new CartView({ collection: cartItems });
    expect($('#items li').length).toBe(1);
    expect($('#items a').first().data('id')).toBe(album.get('id'));
  });

  it('deletes a model from the cart', function() {
    cartView = new CartView({ collection: cartItems });
    $('#items a').trigger('click');
    expect(cartView.collection.length).toBe(0);
    expect($('#cart p').text()).toBe('0 items');
  });
});