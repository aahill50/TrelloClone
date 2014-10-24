TrelloClone.Views.BoardsIndex = Backbone.View.extend({
  template: JST["boards/index"],
  tagName: 'ul',

  initialize: function () {
    this.listenTo(this.collection, "add change:title remove reset", this.render);
  },

  render: function () {
    var content = this.template({
      boards: this.collection
    });

    this.$el.html(content)

    return this;
  }
});