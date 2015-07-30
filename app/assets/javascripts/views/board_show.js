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
    // console.log(list.get('ord'));
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

    var $lists = this.subviews();
    $lists.sort(function (a,b) {
      var an = a.getAttribute('ord'),
      bn = b.getAttribute('ord');
      if(an > bn) {
        return 1;
      }
      if(an < bn) {
        return -1;
      }
      return 0;
    });

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
        listModel.save({
          success: function () {
            view.render();
          }
        });
      });
      window.location.reload();
    }
  }
});
