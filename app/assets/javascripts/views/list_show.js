TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
  className: 'list group',

  template: JST['lists/list_show'],

  initialize: function () {
    this.list = this.model;
    this.cards = this.model.cards();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.cards, 'add', this.addCardShow);

    this.cards.each(this.addCardShow.bind(this));
    this.addCardNewView();

    this.$el.attr('data-id', this.list.id);
  },

  events: {
    'click .delete-list': 'destroyList',
    'sortupdate': 'updateCardOrd'
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

          cardModel.set('ord', i);
          cardModel.save({
            success: function () {
              view.render();
            }
          });
        }
      });
    }
    // window.location.reload();
  }
});
