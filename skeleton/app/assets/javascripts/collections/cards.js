TrelloClone.Collections.Cards = Backbone.Collection.extend({
	model: TrelloClone.Models.Card,
	
	url: 'api/cards',

	getOrFetch: function(id) {
		var cards = this;
		var card = cards.find(id);

		if(card) {
			card.fetch();
	
		} else {
			card = new TrelloClone.Models.Card({ id: id })
			card.fetch({
				success: function() {
					cards.add(card);
				}
			})
		}

		return card
	},

	comparator: function(card1, card2) {
		var ord1 = card1.get("ord");
		var ord2 = card2.get("ord");
		var crDate1 = card1.get("created_at");
		var crDate2 = card2.get("created_at");

		if (ord1 < ord2) {
			return -1
		}

		if (ord2 < ord1) {
			return 1
		}

		if (crDate1 < crDate2) {
			return -1
		}

		if (crDate2 < crDate1) {
			return 1
		}

		return 0
	}
});