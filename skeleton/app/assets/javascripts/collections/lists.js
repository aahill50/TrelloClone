TrelloClone.Collections.Lists = Backbone.Collection.extend({
  model: TrelloClone.Models.List,
  url: '/api/lists',

  initialize: function (models, options) {
    this.board = options.board;
  },

  comparator: function (list) {
    return list.get("ord");
  },

  getOrFetch: function (id) {
    var lists = this;
    var list = lists.get(id);

    if (!list) {
      list = new TrelloClone.Models.List({id: id});
      list.fetch({
        success: function () {
          lists.add(list);
        }
      })
    } else {
      list.fetch()
    }

    return list;
  }
});