
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
  $("#pizza-choice").submit(function (event) {
    event.preventDefault();
    let valToppings = [];
    let pizzaOrder = new Pizza(valToppings, size)
    $("#submit").click(function(){
      $(":checkbox:checked").each(function(i){
        valToppings[i] = $(this).val();
        const size = $("#size").val();
      $("#output").text(price)
      });
    });
  });
});