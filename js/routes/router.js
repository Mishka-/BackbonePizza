var app = app || {};

app.Router = Backbone.Router.extend({

routes :{
	"": "noCopy",
	"vegetablePizza" : "vegetablePizzaMessage",
	"CountryPizza": "CountryPizzaMessage",
	"SpizyPizza" : "SpizyPizzaMessage"
},

noCopy: function() {
  $("#copy").html("");
},

vegetablePizzaMessage: function() {
  $("#copy").html("Spicy pizza with lots of pepperoni and other ingredients.");
},

CountryPizzaMessage: function() {
  $("#copy").html("Pizza with tomatoes, mozzarella, mushrooms, ham, oregano");
},

SpizyPizzaMessage: function() {
  $("#copy").html("Pizza with mozzarella,mushrooms, meat and vegetables");
}

});


