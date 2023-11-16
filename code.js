const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

alert(
  `Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`
);

const orderName = prompt(
  "Enter the name of the pizza you want to order today."
);

if (checkOrderName(orderName)) {
  const orderQuantity = prompt(`How many of ${orderName} do you want?`);

  const orderTotal = totalCost(orderQuantity);

  alert(
    `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes.`
  );
} else {
  alert(
    "Sorry, that pizza is not on the menu. Please choose a pizza from the menu."
  );
}

function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity >= 3) {
    return 15;
  } else {
    return 10;
  }
}
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}
function checkOrderName(orderName) {
  return (
    orderName === vegetarian ||
    orderName === hawaiian ||
    orderName === pepperoni
  );
}

// Function to calculate the total cost of the order
function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 6) {
    return 20;
  } else if (orderQuantity >= 3) {
    return 15;
  } else {
    return 10;
  }
}

function submitOrder() {
  const orderName = document.getElementById("pizzaType").value;
  const orderQuantity = document.getElementById("quantity").value;

  if (checkOrderName(orderName)) {
    const orderTotal = totalCost(orderQuantity);

    document.getElementById(
      "orderSummary"
    ).innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${cookingTime(
      orderQuantity
    )} minutes.`;
  } else {
    alert(
      "Sorry, that pizza is not on the menu. Please choose a pizza from the menu."
    );
  }
}
