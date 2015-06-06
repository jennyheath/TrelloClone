TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    '': 'index',
    'new': 'new',
    'boards/:id': 'show'
  },

  index: function () {
    var boardsView = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });

    this._swapView(boardsView);
  },

  new: function () {
    var boardNew = new TrelloClone.Views.BoardsNew({
      collection: this.collection
    });

    this._swapView(boardNew);
  },

  show: function (id) {
    var board = this.collection.getOrFetch(id);

    var boardShow = new TrelloClone.Views.BoardShow({
      model: board
    });

    this._swapView(boardShow);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
