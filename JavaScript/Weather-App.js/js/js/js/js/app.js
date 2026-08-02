import { getWeather } from "./api.js";
import { saveCity, getCities } from "./storage.js";
import { displayWeather, displayHistory } from "./ui.js";

displayHistory(getCities());

document.getElementById("searchBtn").addEventListener("click", async ()=>{

    const city = document.getElementById("city").value.trim();

    if(city===""){

        alert("Please enter a city");

        return;

    }

    try{

        const data = await getWeather(city);

        displayWeather(data);

        saveCity(city);

        displayHistory(getCities());

    }

    catch(error){

        alert(error.message);

    }

});