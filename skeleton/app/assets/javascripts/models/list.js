TrelloClone.Models.List = Backbone.Model.extend({
  urlRoot: '/api/lists',

  parse: function (resp) {
    if(resp.cards) {
      this.cards().set(resp.cards, { parse: true });
      delete resp.cards
    }
    return resp
  },

  cards: function () {
    this._cards = this._cards ||
      new TrelloClone.Collections.Cards([], { list: this });
    return this._cards
  }
});