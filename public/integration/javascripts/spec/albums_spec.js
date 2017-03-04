var albums = new Albums(albums_scaffold.data);

describe('Albums Collection', function() {
  it('creates a collection of albums', function() {
    expect(albums instanceof Albums).toBe(true);
    expect(albums.models.length).toBe(9);
  });

  it('sets url to /albums', function() {
    expect(albums.url).toBe('/albums');
  });

  it('sets the model property', function() {
    expect(albums.model).toBe(Album);
  });
});