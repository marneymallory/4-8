// -define prices for each size pizza
// -add base price for 3 toppings and make additional toppings cost .50
// -return pizzaPrice based on topping/size parameters

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

{/* <script>
    $(document).ready(function () {
        $('.radio-option').click(function () {
            $(this).not(this).removeClass('click');
            $(this).toggleClass("click");
            event.preventDefault();
</script>
        });
    });




// $("#pizza-choice").submit(function (event) { */}

// // Create a website for a pizza company where a user can choose one or 
// more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and 
// a size to order a pizza and see the final cost.

// Allow the user to choose toppings and size for the pizza they'd like to order.
// Create a pizza object constructor with properties for toppings and size.
// Create a prototype method for the cost of a pizza depending on the selections chosen. 
// Use your own formula for this.