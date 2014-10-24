TrelloClone.Collections.Cards = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.list = options.list;
  },

  model: TrelloClone.Models.Card,
  url: 'api/cards',

  comparator: function (card) {
    return card.get("ord");
  },

  getOrFetch: function (id) {
    var cards = this;
    var card = cards.get(id);
    if(!card) {
      card = new TrelloClone.Models.Card({ id: id, list_id: this.list.id });
      card.fetch({
        success: function () {
          cards.add(card)
        }
      })
    } else {
      card.fetch()
    }
    return card;
  }
});