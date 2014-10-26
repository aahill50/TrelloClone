TrelloClone.Views.BoardNew = Backbone.View.extend({
	template: JST["boards/new"],

	events: {
		"submit #new-board": "addBoard"
	},

	render: function() {
		var content = this.template();
		this.$el.html(content);
		return this;
	},

	addBoard: function(event) {
		event.preventDefault();
		var params = $(event.target).serializeJSON()["board"]
		var board = new TrelloClone.Models.Board;

		board.save(params, {
			success: function() {
				Backbone.history.navigate("", { trigger: true })
			}
		})
	}
});