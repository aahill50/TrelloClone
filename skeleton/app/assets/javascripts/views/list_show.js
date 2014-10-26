TrelloClone.Views.ListShow = Backbone.CompositeView.extend({
	initialize: function(options) {
		this.listenTo(this.model, "sync remove", this.render)
		this.listenTo(this.model.cards(), "add", this.addCard);
		// this.listenTo(this.model.cards(), "remove", this.removeCard);
	},

	template: JST["lists/show"],

	render: function() {
		var content = this.template({ list: this.model });
		this.$el.html(content)
		this.renderCards()
		return this;
	},

	addCard: function(card) {

		var view = new TrelloClone.Views.CardShow({ model: card });
		this.addSubview('.list-cards', view)
	},

  renderCards: function () {
  	this.model.cards().each(this.addCard.bind(this));
  },
});