// Selecting Elements
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");

// Events
buttons.forEach(button => {

    button.addEventListener("click", function(){

        let value = this.innerText;

        if(value === "="){
            try{
                display.value = eval(display.value);
            }
            catch{
                display.value = "Error";
            }
        }

        else if(value !== "C"){
            display.value += value;
        }

    });

});

// Clear Button Event
clearBtn.addEventListener("click", function(){
    display.value = "";
});