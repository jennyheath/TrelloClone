TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST['boards/boards_index'],

  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      boards: this.collection
    });
    this.$el.html(content);

    this.collection.each(function (board) {
      var boardView = new TrelloClone.Views.BoardsIndexItem({
        board: board
      });
      this.$('.boards-list').append(boardView.render().$el);
    }.bind(this));

    return this;
  }
});
