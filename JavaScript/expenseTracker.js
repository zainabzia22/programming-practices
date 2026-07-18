// Expense Tracker

let income = 0;
let expenses = [];

function addIncome(amount) {
    income += amount;
    console.log("Income Added: Rs." + amount);
}

function addExpense(name, amount) {
    expenses.push({
        title: name,
        price: amount
    });

    console.log("Expense Added: " + name + " Rs." + amount);
}

function showBalance() {
    let totalExpense = 0;

    for (let expense of expenses) {
        totalExpense += expense.price;
    }

    let balance = income - totalExpense;

    console.log("Total Income: Rs." + income);
    console.log("Total Expenses: Rs." + totalExpense);
    console.log("Remaining Balance: Rs." + balance);
}


// Program Execution

addIncome(5000);

addExpense("Food", 1000);
addExpense("Transport", 500);
addExpense("Shopping", 800);

showBalance();