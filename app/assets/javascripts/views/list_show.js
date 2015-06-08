TrelloClone.Views.ListShow = Backbone.View.extend({
  template: JST['lists/list_show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click .delete': 'destroyList'
  },

  destroyList: function (event) {
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
      list: this.model
    });
    this.$el.html(content);
    return this;
  }
});
