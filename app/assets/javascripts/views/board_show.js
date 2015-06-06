TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  initialize: function (options) {
    this.model = options.model;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addListView);
    this.collection.each(this.addListView.bind(this));
    this.addListNewView();
  },

  addListView: function (list) {
    var subview = new TrelloClone.Views.ListView({
      model: list
    });
    this.addSubview('.lists-list', subview);
  },

  addListNewView: function () {
    var subview = new TrelloClone.Views.ListNew({
      collection: this.collection,
      model: this.model,
      boardView: this
    });
    this.addSubview('.new-list', subview);
  },

  render: function () {
    var content = this.template({
      board: this.model
    });
    this.$el.html(content);
    this.attachSubviews();

    // this.model.lists().each(function (list) {
    //   var $list = $('<li>').html(list.escape('title'));
    //   this.$('.lists-list').append($list);
    // });

    return this;
  }
});
