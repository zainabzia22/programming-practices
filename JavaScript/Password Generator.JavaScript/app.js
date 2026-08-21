// app.js

import { generatePassword } from "./password.js";
import { savePassword, getPasswords } from "./storage.js";

try {
    const length = Number(prompt("Enter password length:"));

    if (isNaN(length)) {
        throw new Error("Please enter a valid number.");
    }

    const password = generatePassword(length);

    console.log("Generated Password:", password);

    savePassword(password);

    console.log("Password History:");
    console.log(getPasswords());

} catch (error) {
    console.error("Error:", error.message);
}