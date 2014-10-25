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

//Commit Friday's work to new branch
//Start work from home on master branch