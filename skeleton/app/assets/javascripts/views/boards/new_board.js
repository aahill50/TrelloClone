TrelloClone.Views.NewBoard = Backbone.View.extend({
  template: JST["boards/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var content = this.template({ board: this.model});
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var board = this.model;

    var $formData = $(event.currentTarget);
    var params = $formData.serializeJSON();

    board.save(params, {
      success: function () {
        TrelloClone.boards.add(board);
        Backbone.history.navigate("boards/" + board.id, { trigger: true})
      },
      failure: function () {
        console.log("Issue saving")
      }
    })

  }
})