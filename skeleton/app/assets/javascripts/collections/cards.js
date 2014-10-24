TrelloClone.Collections.Cards = Backbone.Collection.extend({
  model: TrelloClone.Models.Card,
  url: 'api/cards',

  comparator: function (card) {
    return card.get("ord");
  },

  getOrFetch: function (id) {
    var cards = this;
    var card = cards.get(id);

    if(!card) {
      card = new TrelloClone.Models.Card({ id: id });
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