const key = "";
const result = document.getElementById("result");

function getData(data){
    result.innerHTML = `
        <h3>City: ${data.name}</h3>
        <h4>${data.main.temp}°C</h4>
        <div class="description">
            <img id="img" src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" />
            <h4>${data.weather[0].description}</h4>
        </div>
        <h4>Humidity: ${data.main.humidity}%</h4>
    `;
}

async function getCity(cityName){
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&lang=pt-br&units=metric`).then(response => response.json());
    getData(data);
}

export function btn() {
    const cityName = document.getElementById("city-input").value;

    getCity(cityName);
}