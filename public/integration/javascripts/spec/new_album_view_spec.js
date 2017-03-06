describe('New Album View', function() {
  var newAlbumView;
  App.albums = albums;

  beforeEach(function() {
    App.indexView();
    newAlbumView = new NewAlbumView();
  });

  afterEach(function() {
    newAlbumView.remove();
    App.index.remove();
    $('#cart').empty();
  });

  it('has a template property', function() {
    expect(newAlbumView.template).toBeDefined();
  });

  it('renders the template when initialized', function() {
    expect($('#album_new').length).toBe(1);
  });

  it('calls create when form is submitted', function() {
    spyOn($, 'ajax');
    $("input[type='submit']").trigger('submit');
    expect($.ajax).toHaveBeenCalled();
  });
});