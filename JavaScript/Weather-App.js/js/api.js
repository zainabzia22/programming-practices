const API_KEY = "YOUR_API_KEY";

export async function getWeather(city){

    try{

        const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if(!response.ok){
            throw new Error("City not found");
        }

        const data = await response.json();

        return data;

    }

    catch(error){

        throw error;

    }

}