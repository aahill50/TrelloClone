TrelloClone.Views.NewList = Backbone.View.extend({
  initialize: function (options) {
    this.board = options.board;
    this.model = options.model;
  },

  template: JST["lists/new"],

  events: {
    "submit form": "submit"
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();

    var board = this.board;
    var $formData = $(event.currentTarget);
    var params = $formData.serializeJSON();
    params.list.board_id = board.id;
    var list = new TrelloClone.Models.List;

    list.save(params, {
      success: function () {
        Backbone.history.navigate("boards/" + board.id, {trigger: true})
      }
    })

  }

});