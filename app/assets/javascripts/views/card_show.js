TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/card_show'],

  initialize: function () {
    this.$el.attr('data-id', this.model.id);
  },

  events: {
    'click .delete-card': 'destroyCard'
    // 'renderCard': 'render'
  },

  destroyCard: function (event) {
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
      card: this.model
    });

    $(".cards").sortable();
    this.$el.html(content);

    return this;
  }
});
