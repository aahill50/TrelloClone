TrelloClone.Views.ShowBoard = Backbone.View.extend({
  initialize: function (options) {
    this.board = options.model;
    this.lists = options.lists;
    this.listenTo(this.lists, "all", this.render)
  },


  template: JST["boards/show"],

  events: {
    "click .board.delete ": "deleteBoard",
    "click .add-card-link": "showCardForm",
    "submit .card-container": "addCard",
    "click .card.delete": "deleteCard"
  },

  render: function () {
    console.log("rendering")
    var content = this.template({ board: this.board, lists: this.lists })
    var lists = this.lists;
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
  },

  showCardForm: function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    var $el = $('.new-card')
    var $form = $el.find("form").filter(function () {
      return $(this).data("list-id") === $target.data("list-id")
    })

    $target.addClass("inactive");
    $form.removeClass("inactive");

  },

  addCard: function (event) {
    event.preventDefault();
    var view = this;
    var $target = $(event.currentTarget);
    var $el = $('.new-card');
    var $link = $target.find('a');
    var $form = $target.find('form');
    var params = $form.serializeJSON();
    params.card.list_id = $form.data("list-id")

    var card = new TrelloClone.Models.Card;

    card.save( params, {
      success: function () {
        $form.addClass("inactive");
        $link.removeClass("inactive");
        view.model.fetch({
          success: function () {
            view.render();
          }
        })
      },
      failure: function () {
        console.log("unable to save")
      }
    })

  },

  deleteCard: function (event) {

    event.preventDefault(event);
    var that = this;
    var $target = $(event.currentTarget)
    var card = new TrelloClone.Models.Card({id: $target.data("card-id")})
    var list = new TrelloClone.Models.List({id: $target.data("list-id")})

    card.destroy({
      success: function () {
        console.log("triggering")
        debugger
        that.lists.trigger("sync")
      }
    })
  }
});