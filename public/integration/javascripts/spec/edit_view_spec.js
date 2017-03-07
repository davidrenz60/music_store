describe('Edit View', function() {
  beforeEach(function() {
    this.editView = new EditAlbumView({ model: album });
  });

  afterEach(function() {
    this.editView.remove();
  });

  it('has a template property defined', function() {
    expect(this.editView.template).toBeDefined();
  });

  it('renders the view to the page', function() {
    expect($('h1').text()).toBe('Edit Album');
  });

  it('fills in the form with model data', function() {
    expect($("input[name='title']").val()).toBe(album.get('title'));
  });

  it('updates an album when form is submitted', function() {
    spyOn(album, 'save');
    $('form').trigger('submit');

    expect(album.save).toHaveBeenCalled();
  });
});