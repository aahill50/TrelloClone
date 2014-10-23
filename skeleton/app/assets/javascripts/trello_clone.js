window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    TrelloClone.boards = new TrelloClone.Collections.Boards();

    new TrelloClone.Routers.Boards({
      "$rootEl": $("#main")
    });

    Backbone.history.start();
  }
};

$(function () {
  TrelloClone.initialize();
})
