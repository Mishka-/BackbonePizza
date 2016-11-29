var app = app || {};

app.allPizzaView = Backbone.View.extend({

  tagName: "section",

  render: function() {
 	  this.collection.each(this.addPizza, this);
 		return this;
  },

 addPizza: function(pizza) {
 		var pizzaView = new app.singlePizzaView ({ model: pizza });
 		this.$el.append(pizzaView.render().el);
 }

});