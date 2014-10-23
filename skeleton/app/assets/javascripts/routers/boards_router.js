TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "boardsIndex",
    "boards/new": "newBoard",
    "boards/:id": "showBoard",
    "boards/:board_id/lists/new": "newList"
  },

  boardsIndex: function () {
    var that = this;
    var boards = TrelloClone.boards

    boards.fetch({
      success: function () {
        var indexView = new TrelloClone.Views.BoardsIndex({
          collection: boards
        });
        that._swapView(indexView)
      }
    });
  },

  newBoard: function () {
    var board = new TrelloClone.boards.model;
    var newView = new TrelloClone.Views.NewBoard({
      model: board
    })

    this._swapView(newView);

  },

  showBoard: function (id) {
    var that = this;
    var board = TrelloClone.boards.getOrFetch(id);
    board.fetch({
      success: function () {
        var showView = new TrelloClone.Views.ShowBoard({ model: board })
        that._swapView(showView);
      }
    })
  },

  newList: function (board_id) {
    var list = new TrelloClone.Models.List
    var board = TrelloClone.boards.getOrFetch(board_id);
    var view = new TrelloClone.Views.NewList({
      model: list,
      board: board
     })
    this._swapView(view)
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});