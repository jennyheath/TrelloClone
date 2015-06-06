TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function (options) {
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);

    this.model.lists().each(function (list) {
      var $list = $('<li>').html(list.escape('title'));
      this.$('.lists-list').append($list);
    });

    return this;
  }
});
