// Selecting Elements
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

// Events
form.addEventListener("submit", function(event) {

    // Forms
    event.preventDefault();

    // Creating/Removing Elements
    message.innerHTML = "";

    if (nameInput.value === "" || emailInput.value === "") {

        const error = document.createElement("p");
        error.textContent = "Please fill in all fields.";
        error.className = "error";

        message.appendChild(error);

    } else {

        const success = document.createElement("p");
        success.textContent = "Form submitted successfully!";
        success.style.color = "green";

        message.appendChild(success);

        form.reset();
    }
});