// Selecting Elements
const colorInput = document.getElementById("colorPicker");
const box = document.getElementById("colorBox");
const form = document.getElementById("colorForm");

// Color Change Event
colorInput.addEventListener("input", function () {
    box.style.backgroundColor = colorInput.value;
});

// Form Event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove old message
    const old = document.querySelector(".result");
    if (old) old.remove();

    // Create new message
    const result = document.createElement("p");
    result.className = "result";
    result.textContent = "Selected Color: " + colorInput.value;

    document.body.appendChild(result);

    form.reset();
});