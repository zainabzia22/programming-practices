// Shopping Cart

const cart = [
  {
    name: "Laptop",
    price: 800,
    quantity: 1
  },
  {
    name: "Mouse",
    price: 20,
    quantity: 2
  },
  {
    name: "Keyboard",
    price: 50,
    quantity: 1
  }
];

// Display Cart
console.log("Shopping Cart:");

cart.forEach(item => {
  console.log(
    `${item.name} - $${item.price} x ${item.quantity}`
  );
});

// Total Price
const totalPrice = cart.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log("\nTotal Price: $" + totalPrice);

// Items with total cost
const itemTotals = cart.map(item => {
  return {
    ...item,
    total: item.price * item.quantity
  };
});

console.log("\nItems with Total:");
console.log(itemTotals);

// Expensive Items (>100)
const expensiveItems = itemTotals.filter(item => item.total > 100);
console.log("\nExpensive Items:");
console.log(expensiveItems);console.log("\nExpensive Items:");
console.log(expensiveItems);