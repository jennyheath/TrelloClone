TrelloClone.Views.CardShow = Backbone.View.extend({
  template: JST['cards/card_show'],

  events: {
    'click .delete-card': 'destroyCard'
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

    this.$el.html(content);
    return this;
  }
});