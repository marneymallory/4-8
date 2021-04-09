let pizza = {
  toppings: ['cheese', 'pepperoni', 'sausage', 'artichoke hearts', 'basil'],
  size: ['small', 'medium', 'large'],
}

function Pizza(toppings, size) {
this.toppings = toppings
this.size = size
}

Pizza.prototype.pizzaPrice = function () {
  let costFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let price = 10.0;
  if (this.size === "large") {
    price += 5.0;
  } else if (this.size === "medium") {
    price += 3.0;
  }
  if (this.toppings) {
    if (this.toppings.length >= 4) {
      price += 2.0;
    } else if (this.toppings.length >= 2) {
      price += 1.0;
    }
  } else {
    this.toppings = "none";
  }
  this.cost = costFormatter.format(cost);
  return this.cost;
};

// constructor. 
// will make properites for toppings and size
// make formula to determine price
// work on jquery to link up business and UI. Google Template literals. 
// done lol. 



function pizzaChoice(price) {
  let output= ("");
  for(let i=0; i<=number; i++) {
    if(i.toString().split("").includes()){
      output += "Won't you be my neighbor?"
     } else if (i.toString().split("").includes("1")){
      output += "BEEP!"
     } else if(i.toString().split("").includes("2")){
      output += "BOOP!"
    } else {
      output += i 
    }
  } 
  return output 

}

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