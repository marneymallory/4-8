let pizza = {
  toppings: ['cheese', 'pepperoni', 'sausage', 'artichoke hearts', 'basil'],
  size: ['small', 'medium', 'large'],
}
functionPizza(toppings, size, price) {
this.toppings = toppings
this.size = size
this.price = price 
}
Pizza.prototype.pizzaChoice = function() {
 let pizzaPrice = 10;
}
return pizzaPrice 


$(document).ready(function () {
  $("#example-form").submit(function (event) {
    event.preventDefault();
  });
});



// // Create a website for a pizza company where a user can choose one or 
// more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and 
// a size to order a pizza and see the final cost.

// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. 
// Use your own formula for this.