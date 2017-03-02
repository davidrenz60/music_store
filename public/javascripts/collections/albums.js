var Albums = Backbone.Collection.extend({
  url: '/albums',
  model: Album,
});