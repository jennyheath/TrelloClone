TrelloClone.Views.BoardsIndexItem = Backbone.View.extend({
  template: JST['boards/boards_index_item'],

  events: {
    'click .delete': 'destroyBoard'
  },

  destroyBoard: function (event) {
    event.preventDefault();
    var view = this;

    this.model.destroy({
      success: function () {
        view.remove();
      }
    });
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);

    return this;
  }
});
