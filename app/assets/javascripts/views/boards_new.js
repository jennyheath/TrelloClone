TrelloClone.Views.BoardsNew = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  template: JST['boards/boards_form'],

  initialize: function (options) {
    this.model = new TrelloClone.Models.Board();
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);

    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().board;

    this.model.save(attrs, {
      wait: true,
      success: function () {
        this.collection.add(this.model);
        Backbone.history.navigate('', { trigger: true });
      }.bind(this)
    });
  }
});
