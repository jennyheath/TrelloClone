TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  className: 'list group',

  template: JST['lists/list_show'],

  events: {
    'sortupdate': 'updateCardOrd'
  },

  initialize: function () {
    this.list = this.model;
    this.cards = this.model.cards();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.cards, 'add', this.addCardShow);

    this.cards.each(this.addCardShow.bind(this));
    this.addCardNewView();

    this.$el.attr('data-id', this.list.id);
  },

  addCardShow: function (card) {
    var subview = new TrelloClone.Views.CardShow({
      model: card,
      list: this.list
    });
    this.addSubview('.cards', subview);
  },

  addCardNewView: function () {
    var subview = new TrelloClone.Views.CardNewView({
      model: this.list
    });
    this.addSubview('.cards', subview);
  },

  render: function () {
    var content = this.template({
      list: this.model
    });

    this.$el.html(content);
    this.$el.attr('data-ord', this.list.get('ord'));
    this.attachSubviews();

    return this;
  },

  updateCardOrd: function (event) {
    var view = this;
    var $target = $(event.target);

    if ($target.attr('class') === "cards sortable ui-sortable") {
      $target.children().each(function (i, card) {
        if (card.children[0].className == "card") {
          var cardId = $(card).data('id');
          var cardModel = view.model.cards().get(cardId);

          // cardModel.set('ord', i);
          cardModel.save("ord", i, {
            success: function () {
              console.log("card ord saved");
              $('.cards').sortable();
              // view.render();
              // cardModel.trigger('renderCard');
            }
          });
        }
      });
    }
    // window.location.reload();
  }
});
