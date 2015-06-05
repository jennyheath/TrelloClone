TrelloClone.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    '': 'index'
  },

  index: function () {
    var boardsView = new TrelloClone.Views.BoardsIndex({
      collection: this.collection
    });

    this.$rootEl.html(boardsView.render().$el);
    // this._swapView(boardsView);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
