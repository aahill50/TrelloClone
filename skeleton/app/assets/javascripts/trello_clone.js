window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  	new TrelloClone.Routers.AppRouter({
  		"$rootEl": $('#main'),
  		boards: new TrelloClone.Collections.Boards()
  	});

  	Backbone.history.start();

  }
};

