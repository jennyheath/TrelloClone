TrelloClone.Views.ListView = Backbone.View.extend({
  template: JST['lists/list_show'],

  initialize: function () {
    // this.listenTo(this.model.collection, 'add', this.render);
  },

  render: function () {
    var content = this.template({
      list: this.model
    });
    this.$el.html(content);
    return this;
  }
});
