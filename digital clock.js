// Select clock element
const clock = document.getElementById("clock");

// Function to display current time
function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display time
    clock.innerHTML = hours + ":" + minutes + ":" + seconds;
}

// Update clock every second
setInterval(updateClock, 1000);

// Show time immediately
updateClock();