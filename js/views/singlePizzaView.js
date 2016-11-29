var app = app || {};

app.singlePizzaView = Backbone.View.extend({

  tagName: "article",
  className: "pizzaListItem",

  template: _.template( $("#pizzaElement").html() ),

  render: function() {
    var pizzaTemplate = this.template(this.model.toJSON());
    this.$el.html(pizzaTemplate);
    return this;
  },

  events: {
  	'mouseover': 'addBgColor',
  	'mouseout': 'removeBgColor'
  },

  addBgColor: function() {
    this.$el.addClass("bgColorImage");
  },

  removeBgColor: function() {
    this.$el.removeClass("bgColorImage");
  }

});