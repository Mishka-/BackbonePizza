var app = app || {};

app.PizzasCollection = Backbone.Collection.extend({

  model: app.singlePizza

});