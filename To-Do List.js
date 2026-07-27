// Selecting Elements
const form = document.getElementById("todoForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Events
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    if (taskInput.value === "") {
        alert("Please enter a task.");
        return;
    }

    // Creating Elements
    const li = document.createElement("li");
    li.textContent = taskInput.value + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Remove Element
    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
});