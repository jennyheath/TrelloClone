TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  events: {
    'click .new-board': 'renderBoardForm',
    'submit .board-form': 'renderButton'
  },

  template: JST['boards/boards_index'],

  formTemplate: JST['boards/boards_form'],

  initialize: function (options) {
    this.boards = this.collection;
    this.listenTo(this.collection, 'sync', this.render);
  },

  boardForm: function () {
    var newBoard = '';
  },

  render: function () {
    var content = this.template({
      boards: this.collection
    });
    this.$el.html(content);

    this.boards.each(function (board) {
      var boardView = new TrelloClone.Views.BoardsIndexItem({
        model: board
      });
      this.$('.boards-list').append(boardView.render().$el);
    }.bind(this));

    return this;
  },

  renderBoardForm: function () {
    var content = this.formTemplate();
    this.$('.form-area').html(content);
    this.$('.new-board').css('display', 'none');

    return this;
  },

  renderButton: function (event) {
    event.preventDefault();
    var attrs = $(event.currentTarget).serializeJSON().board;
    var board = new TrelloClone.Models.Board();

    board.save(attrs, {
      wait: true,
      success: function () {
        this.boards.add(board);
      }.bind(this)
    });
  }
});
