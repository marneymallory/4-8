
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size
}

Pizza.prototype.pizzaPrice = function () {
  let price;

  if (this.size === "large") {
    price = 20.0;
  } else if (this.size === "medium") {
    price = 15.0;
  } else if (this.size === "small") {
    price = 10.0
  }

  if (this.toppings) {
    this.toppings.forEach(function() {
      price += .50;
    }
  )}
  return price;
};

$(document).ready(function () {
  $("#example-form").submit(function (event) {
    event.preventDefault();
  })
});