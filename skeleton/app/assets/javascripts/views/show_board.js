TrelloClone.Views.ShowBoard = Backbone.View.extend({
  template: JST["boards/show"],

  events: {
    "click .delete ": "deleteBoard",
  },

  render: function () {
    var content = this.template({ board: this.model })
    this.$el.html(content)
    return this;
  },

  deleteBoard: function (event) {
    event.preventDefault();
    this.model.destroy( {
      success: function () {
        Backbone.history.navigate("/#", {trigger: true})
      }
    })
  }
});