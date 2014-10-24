TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  parse: function (resp) {
    if(resp.lists) {
      this.lists().set(resp.lists, { parse: true });
      delete resp.lists
    }

    return resp
  },

  lists: function () {
    this._lists = this._lists ||
      new TrelloClone.Collections.Lists([], { board: this });
    return this._lists
  }
});