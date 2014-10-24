TrelloClone.Views.NewCard = Backbone.View.extend({
  initialize: function (options) {
    this.card = options.card;
    this.list = options.list;
  },

  template: JST["cards/new"],

  tagName: 'form',

  id: "new-card",

  render: function () {
    console.log("rendering")
    var content = this.template({
      card: this.card,
      list: this.list
    });

    console.log("rendered")
    this.$el.html(content);
    console.log("replaced")
    return this;
  }
});