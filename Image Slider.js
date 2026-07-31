// Selecting Elements
const image = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const form = document.getElementById("sliderForm");

const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg"
];

let index = 0;

// Next Button Event
nextBtn.addEventListener("click", function () {
    index = (index + 1) % images.length;
    image.src = images[index];
});

// Previous Button Event
prevBtn.addEventListener("click", function () {
    index = (index - 1 + images.length) % images.length;
    image.src = images[index];
});

// Form Event
form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Remove old message
    const old = document.querySelector(".message");
    if (old) old.remove();

    // Create new message
    const msg = document.createElement("p");
    msg.className = "message";
    msg.textContent = "Image Slider Loaded!";
    document.body.appendChild(msg);
});