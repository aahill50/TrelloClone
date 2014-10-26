TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
	initialize: function() {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "add", this.addList);
		this.listenTo(this.model.lists(), "remove", this.removeList);
	},

	events: {
		"click a.new-list": "newList",
		"submit form.new-list": "createList",
		"submit form.delete-list": "deleteList",
	},

	template: JST["boards/show"],

	render: function() {
		var content = this.template({
			board: this.model
		})
		this.$el.html(content);
		this.renderLists();
		this.renderForms();
		return this;
	},

	addList: function(list) {
		var view = new TrelloClone.Views.ListShow({ model: list });
		this.addSubview('#lists', view)
	},

	removeList: function(list) {
		var view = new TrelloClone.Views.ListShow({ model: list });
		this.removeSubview('#lists', view)
	},

  renderLists: function () {
    this.model.lists().each(this.addList.bind(this));
  },

  renderForms: function() {
  	var newListView = new TrelloClone.Views.ListNew({ model: this.model});
  	this.addSubview('div.new-list', newListView)
  },

  newList: function(event) {
  	event.preventDefault();
  	$("a.new-list").addClass("inactive")
  	$("form.new-list").removeClass("inactive")
  },

  createList: function(event) {
  	event.preventDefault();
  	var board = this.model;
  	var params = $(event.currentTarget).serializeJSON()["list"];
  	var list = new TrelloClone.Models.List
  	console.log(params)
  	list.save(params, {
  		success: function() {
  			board.lists().add(list);
  			$("a.new-list").removeClass("inactive")
		  	$("form.new-list").addClass("inactive")
  		}
  	})
  },

  deleteList: function(event) {
  	event.preventDefault();
  	var params = $(event.currentTarget).serializeJSON()["list"];
  	var list = new TrelloClone.Models.List( {id: params["id"] })

  	list.destroy(params)
  	list.trigger("remove")
  }
});