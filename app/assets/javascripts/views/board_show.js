TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/board_show'],

  events: {
    'sortupdate': 'updateOrd',
    'addListNewView': 'updateOrd'
    // 'click .delete-list': 'destroyList',
    // 'click .new-card': 'submit'
  },

  // submit: function (event) {
  //   event.preventDefault();
  //   var $target = $(event.currentTarget).serializeJSON();
  //   var attrs = $target.card;
  //   var cards = this.model.cards();
  //
  //   $target.card.list_id = this.model.id;
  //   var view = this;
  //
  //   var card = new TrelloClone.Models.Card();
  //   card.save(attrs, {
  //     success: function () {
  //       cards.add(card, { trigger: true });
  //       view.render();
  //     }
  //   });
  // },

  initialize: function (options) {
    this.lists = this.model.lists();

    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.lists, 'add', this.addListShow);

    this.lists.each(this.addListShow.bind(this));
    this.addListNewView();
  },

  // destroyList: function (event) {
  //   event.preventDefault();
  //   var listEl = event.target.parentElement.parentElement;
  //   var modelId = listEl.getAttribute('data-id');
  //   var model = this.lists.get(modelId);
  //   model.destroy({
  //     success: function () {
  //       listEl.remove();
  //     }
  //   });
  // },

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

    var $lists = this.subviews();
    // debugger;
    this.attachSubviews();
    // var listEls = $('.list');
    // $('.list').remove();
    // listEls.sort(function (a,b) {
    //   var an = a.getAttribute('data-ord'),
    //   bn = b.getAttribute('data-ord');
    //   if(an > bn) { return 1; }
    //   if(an < bn) { return -1; }
    //   return 0;
    // });
    // listEls.each(function (i, listEl) {
    //   $('.lists-list').append(listEl);
    // });

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
        listModel.save('ord', i, {
          success: function () {
            console.log("saved order");
            console.log("id: " + listId + " ord: " + i);
          }
        });
      });
    }
  }
});
