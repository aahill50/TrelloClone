TrelloClone.Views.ListNew = Backbone.View.extend({
	template: JST["lists/new"],

	render: function() {
		var content = this.template({ board: this.model });
		this.$el.html(content);
		return this;
	}
});