
function Pizza(toppings, size) {
  this.toppings = toppings
  this.size = size;
}

Pizza.prototype.pizzaPrice = function () {
  let price = 0
  if (this.size === "Large") {
    price += 20.0;
  } else if (this.size === "Medium") {
    price += 15.0;
  } else if (this.size === "Small") {
    price += 10.0
  }

  if (this.toppings) {
    this.toppings.forEach(function() {
      price += .50;
    }
  )}

  return price;
  
};

$(document).ready(function () {
  $("#pizza-choice").submit(function (event) {
    event.preventDefault();
    const size = $("#size").val();
    let valToppings = [];
    $(":checkbox:checked").each(function(i){
      valToppings[i] = $(this).val();
    });
    let pizzaOrder = new Pizza(valToppings, size)
    let priceReturn = pizzaOrder.pizzaPrice()
    $("#output").text("Your pizza costs $" + priceReturn)
    });
  });