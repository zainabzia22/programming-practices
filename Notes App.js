// Selecting Elements
const form = document.getElementById("noteForm");
const input = document.getElementById("noteInput");
const list = document.getElementById("notesList");

// Form Event
form.addEventListener("submit", function(event){

    event.preventDefault();

    let noteText = input.value;

    // Creating Element
    let li = document.createElement("li");

    li.innerHTML = `
        ${noteText}
        <button class="delete">Delete</button>
    `;

    // Adding Element
    list.appendChild(li);

    input.value = "";

    // Remove Element
    li.querySelector(".delete").addEventListener("click", function(){

        li.remove();

    });

});