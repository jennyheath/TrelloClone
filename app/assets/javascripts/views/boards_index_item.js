TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/boards_index_item'],

  initialize: function (options) {
    this.model = options.board;
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);

    return this;
  }
});
