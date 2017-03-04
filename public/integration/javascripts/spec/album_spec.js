var album = new Album(albums_scaffold.data[0]);

describe('Album Model', function() {
  it('creates an album model', function() {
    expect(album instanceof Album).toBe(true);
  });

  it('has a title attribute', function() {
    expect(album.attributes.title).toBe("Unbreakable Smile");
  });
});