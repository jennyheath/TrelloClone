TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

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
    // $( ".sortable" ).disableSelection();

    return this;
  }
});
