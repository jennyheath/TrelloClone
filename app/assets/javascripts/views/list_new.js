TrelloClone.Views.ListNew = Backbone.View.extend({
  events: {
    'submit form': 'submit'
  },

  initialize: function (options) {
    this.boardView = options.boardView;
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
    // $target.list.board_id = this.model.id;

    var list = new TrelloClone.Models.List();
    list.save(attrs, {
      wait: true,
      success: function () {
        this.collection.add(this.model, { trigger: true });
        this.model.fetch();
        // this.boardView.render();
        // Backbone.history.navigate("/boards/" + this.model.id, { trigger: true });
      }.bind(this)
    });
  }
});
