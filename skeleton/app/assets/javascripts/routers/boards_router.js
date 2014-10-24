TrelloClone.Routers.Boards = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
  },

  routes: {
    "": "boardsIndex",
    "boards/new": "newBoard",
    "boards/:id": "showBoard",
    "lists/:id": "showList",
    "cards/:id": "showCard",
    "boards/:board_id/lists/new": "newList"
  },

  boardsIndex: function () {
    // var indexView = new TrelloClone.Views.BoardsIndex({
    //   collection: TrelloClone.boards
    //   this._swapView(indexView)
    // })

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
    // var board = TrelloClone.boards.getOrFetch(id);
    // var showView = new TrelloClone.Views.ShowBoard({ model: board })
    // this._swapView(showView);

    var that = this;
    var board = TrelloClone.boards.getOrFetch(id);
    board.fetch({
      success: function () {
        var showView = new TrelloClone.Views.ShowBoard({
          model: board,
        })
        that._swapView(showView);
      }
    })
  },

  showList: function (id) {
    var that = this;
    var list = new TrelloClone.Models.List({ id: id })

    list.fetch({
      success: function () {
        console.log
        var view = new TrelloClone.Views.ShowList({model: list})
        that._swapView(view);
      }
    })
  },

  newList: function (board_id) {
    var list = new TrelloClone.Models.List;
    var board = TrelloClone.boards.getOrFetch(board_id);
    var view = new TrelloClone.Views.NewList({
      model: list,
      board: board
     })
    this._swapView(view)
  },

  newCard: function (list_id) {
    var $el = $('#new-card')
    var card = new TrelloClone.Models.Card();
    var list = new TrelloClone.Collections.Lists([],{}).getOrFetch(list_id);
    var view = new TrelloClone.Views.NewCard({card: card, list: list})

    this._swapView(view, $el)
  },

  _swapView: function (view, $newEl) {
    $newEl = $newEl || this.$rootEl
    this._currentView && this._currentView.remove();
    this._currentView = view;
    $newEl.html(view.render().$el);
  }
});