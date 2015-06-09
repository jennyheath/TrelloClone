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
  },

  events: {
    'click .delete-list': 'destroyList'
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
  }
});
