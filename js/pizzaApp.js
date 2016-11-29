var VegetablePizza = new app.singlePizza({
  name: "Vegetable pizza",
  price: 9.95,
  size: "small",
  img: "images/pizza1.png",
  link: "vegetablePizza"
});

var CountryPizza = new app.singlePizza({
  name: "Country pizza",
  price: 8.95,
  size: "middle",
  link: "CountryPizza",
  img: "images/pizza2.png",
});

var SpizyPizza = new app.singlePizza({
  name: "Spizy pizza",
  price: 7.95,
  img: "images/pizza3.png",
  link: "SpizyPizza",
  size: "Big"
});

var pizzaGroup = new app.PizzasCollection([
  VegetablePizza, CountryPizza, SpizyPizza
]);

var pizzaGroupView = new app.allPizzaView({ collection: pizzaGroup});

$("#allPizzas").html(pizzaGroupView.render().el);

var pizzaRouter = new app.Router();

Backbone.history.start();