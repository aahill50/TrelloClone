TrelloClone.Models.Board = Backbone.Model.extend({
  urlRoot: "/api/boards",

  parse: function (resp) {
    return resp
  }
});