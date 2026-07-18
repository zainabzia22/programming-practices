// ATM Simulation

let balance = 1000;
let choice;

function checkBalance() {
    alert("Your Balance is: Rs. " + balance);
}

function deposit(amount) {
    balance += amount;
    alert("Rs. " + amount + " Deposited Successfully.");
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        alert("Please collect your cash.\nRemaining Balance: Rs. " + balance);
    } else {
        alert("Insufficient Balance!");
    }
}

while (true) {
    choice = Number(
        prompt(
            "===== ATM MENU =====\n" +
            "1. Check Balance\n" +
            "2. Deposit Money\n" +
            "3. Withdraw Money\n" +
            "4. Exit\n\n" +
            "Enter your choice:"
        )
    );

    if (choice === 1) {
        checkBalance();
    } else if (choice === 2) {
        let amount = Number(prompt("Enter deposit amount:"));
        deposit(amount);
    } else if (choice === 3) {
        let amount = Number(prompt("Enter withdrawal amount:"));
        withdraw(amount);
    } else if (choice === 4) {
        alert("Thank you for using the ATM!");
        break;
    } else {
        alert("Invalid Choice! Please try again.");
    }
}