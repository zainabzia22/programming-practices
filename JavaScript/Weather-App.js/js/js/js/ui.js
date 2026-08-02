export function displayWeather(data){

    document.getElementById("weather").innerHTML = `

        <h2>${data.name}</h2>

        <h3>${data.main.temp} °C</h3>

        <p>Humidity: ${data.main.humidity}%</p>

        <p>Wind: ${data.wind.speed} m/s</p>

        <p>${data.weather[0].description}</p>

        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

    `;

}

export function displayHistory(cities){

    const history = document.getElementById("history");

    history.innerHTML = "";

    cities.forEach(city=>{

        history.innerHTML += `<li>${city}</li>`;

    });

}