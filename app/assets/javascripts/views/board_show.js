TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  events: {
    'sortupdate': 'updateOrd'
  },

  initialize: function (options) {
    this.lists = this.model.lists();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.lists, 'add', this.addListShow);

    this.lists.each(this.addListShow.bind(this));
    this.addListNewView();
  },

  addListShow: function (list) {
    var subview = new TrelloClone.Views.ListShow({
      model: list
    });
    this.addSubview('.lists-list', subview);
    console.log(list.get('ord'));
  },

  addListNewView: function () {
    var subview = new TrelloClone.Views.ListNew({
      collection: this.lists,
      model: this.model
    });
    this.addSubview('.new-list', subview);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    this.attachSubviews();
    $(".sortable").sortable();

    return this;
  },

  updateOrd: function (event) {
    var view = this;
    var $target = $(event.target);

    if ($target.attr('class') === "lists-list row sortable ui-sortable") {
      $target.children().each(function (i, list) {
        var listId = $(list).data('id');
        var listModel = view.lists.get(listId);
        listModel.set('ord', i);
        listModel.save();
      });
    } else {
      $target.children().each(function (i, card) {
        var cardId = $(card).data('id');
        var listId = $target.parent().parent().data('id');
        var listModel = view.lists.get(listId);
        var cardModel = listModel.cards().get(cardId);

        cardModel.set('ord', i);
        cardModel.save();
      });
    }
  }
});
