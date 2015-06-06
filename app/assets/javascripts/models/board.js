TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: 'api/boards',

  initialize: function (options) {
    // this.lists = options.lists;
  },

  lists: function () {
    this._lists = this._lists || new TrelloClone.Collections.Lists();
    return this._lists;
  },

  parse: function (response) {
    if (response.lists) {
      this.lists().set(response.lists);
      delete response.lists;
    }
    return response;
  }
});
