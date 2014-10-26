TrelloClone.Collections.Lists = Backbone.Collection.extend({
	initialize: function(models, options) {
		this.board = options.board;
	},

	model: TrelloClone.Models.List,

	url: "api/lists",

	comparator: function(list1, list2) {
		var ord1 = list1.get("ord");
		var ord2 = list2.get("ord");
		var crDate1 = list1.get("created_at");
		var crDate2 = list2.get("created_at");

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