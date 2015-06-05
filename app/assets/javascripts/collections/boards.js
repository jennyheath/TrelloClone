TrelloClone.Collections.Boards = Backbone.Collection.extend({
  model: TrelloClone.Models.Board,

  url: 'api/boards',

  getOrFetch: function () {
    console.log('complete getOrFetch');
  }
});
