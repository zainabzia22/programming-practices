// Temperature Converter

let choice = prompt(
  "Choose conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius"
);

let temp = parseFloat(prompt("Enter temperature:"));

if (choice == "1") {
    let fahrenheit = (temp * 9 / 5) + 32;
    alert(temp + "°C = " + fahrenheit.toFixed(2) + "°F");
}
else if (choice == "2") {
    let celsius = (temp - 32) * 5 / 9;
    alert(temp + "°F = " + celsius.toFixed(2) + "°C");
}
else {
    alert("Invalid choice!");
}