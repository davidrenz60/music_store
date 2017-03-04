describe('Index View', function() {
  var indexView;

  beforeEach(function() {
    indexView = new IndexView();
  });

  afterEach(function() {
    indexView.remove();
  });

  it('has a template defined', function() {
    expect(App.index.template).toBeDefined();
  });

  it('renders the index view when initialized', function() {
    expect($('footer').length).toBe(1);
    expect($('main').contents().length).toBeGreaterThan(0);
  });
});