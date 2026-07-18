// Number Guessing Game

// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;

let guess;
let attempts = 0;

// Function to check the user's guess
function checkGuess(guess) {
    if (guess > secretNumber) {
        return "Too High!";
    } else if (guess < secretNumber) {
        return "Too Low!";
    } else {
        return "Correct!";
    }
}

// Loop until the correct number is guessed
while (true) {
    guess = Number(prompt("Guess a number between 1 and 100:"));
    attempts++;

    let result = checkGuess(guess);
    alert(result);

    if (result === "Correct!") {
        alert("Congratulations! You guessed the number in " + attempts + " attempts.");
        break;
    }
}