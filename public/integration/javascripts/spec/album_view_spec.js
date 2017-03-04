describe('Album View', function() {
  describe('creating a view', function() {
    var albumView = new AlbumView({ model: album });

    it('creates a new album view', function() {
      expect(albumView instanceof AlbumView).toBe(true);
    });

    it('has a template property', function() {
      expect(albumView.template).toBeDefined();
    });
  });

  describe('rendering the view', function() {
    var albumView;
    var indexView;
    var $li;

    beforeEach(function () {
      indexView = new IndexView();
      albumView = new AlbumView({ model: album });
      $li = $('#index li');
    });

    afterEach(function() {
      indexView.remove();
    });

    it('appends the view to the indexView', function() {
      expect($li.length).toBe(1);
    });

    it('creates an id attribute', function() {
      expect(($li).first().attr('id')).toBe('album_0');
    });

    it('writes attributes to the template', function() {
      expect($li.find('h2').text()).toBe('Unbreakable Smile');
    });
  });

  describe('events', function() {
    beforeEach(function() {
      localStorage.clear();
      App.albums = albums;
      App.indexView();
    });

    afterEach(function() {
      App.index.remove();
      App.cart.view.remove();
      localStorage.clear();
    });

    it('Add to cart button adds an item to the cart', function() {
      App.$el.find('#index li a.button').first().trigger('click');
      expect($('#cart li').length).toBe(1);
    });

    // test deleteAlbum
  });
});