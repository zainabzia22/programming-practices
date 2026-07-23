// Select Elements
const countText = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const addBtn = document.getElementById("addMessage");
const removeBtn = document.getElementById("removeMessage");
const form = document.getElementById("counterForm");

let count = 0;

// Display Counter
function updateCounter() {
    countText.innerHTML = count;
}

// Events
incrementBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decrementBtn.addEventListener("click", function () {
    count--;
    updateCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

// Creating Element
addBtn.addEventListener("click", function () {
    const msg = document.createElement("p");
    msg.id = "message";
    msg.innerHTML = "Counter App is Running!";
    document.body.appendChild(msg);
});

// Removing Element
removeBtn.addEventListener("click", function () {
    const msg = document.getElementById("message");
    if (msg) {
        msg.remove();
    }
});

// Form Event
form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Current Counter Value: " + count);
});

// Initial Value
updateCounter();