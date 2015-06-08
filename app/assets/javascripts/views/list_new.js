TrelloClone.Views.ListNew = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  initialize: function (options) {
    this.boardView = options.boardView;
    this.lists = this.collection;
  },

  template: JST['lists/lists_form'],

  render: function () {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget).serializeJSON();
    var attrs = $target.list;
    $target.list.board_id = this.model.id;
    var view = this;

    var list = new TrelloClone.Models.List();
    list.save(attrs, {
      wait: true,
      success: function () {
        view.lists.add(list, { trigger: true });
        view.render();
      }
    });
  }
});
