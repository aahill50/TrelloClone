TrelloClone.Routers.AppRouter = Backbone.Router.extend({
	initialize: function(options) {
		this.$rootEl = options.$rootEl;
		this.boards = options.boards;
	},

	routes: {
		"": "boardsIndex",
		"boards/new": "boardNew",
		"boards/:id": "boardShow"
	},

	boardsIndex: function() {
		this.boards.fetch();
		var indexView = new TrelloClone.Views.BoardsIndex({
			collection: this.boards
		})

		this._swapView(indexView);
	},

	boardNew: function() {
		console.log("Create a new board");

	},

	boardShow: function(id) {
		var board = this.boards.getOrFetch(id);
		var showView = new TrelloClone.Views.BoardShow({ 
			model: board
		});
		this._swapView(showView);
	},

	boardNew: function() {
		var newView = new TrelloClone.Views.BoardNew();
		this._swapView(newView);
	},

	_swapView: function(view) {
		this._currentView && this._currentView.remove();
		this._currentView = view;
		this.$rootEl.html(view.render().$el);
	}
});

$(TrelloClone.initialize);