TrelloClone.Views.CardNewView = Backbone.View.extend({
  template: JST['cards/card_form'],

  events: {
    'submit form': 'submit'
  },

  render: function () {
    var content = this.template();

    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget).serializeJSON();
    var attrs = $target.card;
    var cards = this.model.cards();

    $target.card.list_id = this.model.id;
    var view = this;

    var card = new TrelloClone.Models.Card();
    card.save(attrs, {
      success: function () {
        cards.add(card, { trigger: true });
        view.render();
      }
    });
  }
});
