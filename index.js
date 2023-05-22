const apiKey = "58b1195a73f91c2e23e17b5261324466";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city){
    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°F";
    document.querySelector(".humidity").innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " MPH";
    document.querySelector(".wind").innerHTML = data.wind.speed + " MPH";
    document.querySelector("#highTemp").innerHTML = Math.round(data.main.temp_max) + "°F";
    document.querySelector("#lowTemp").innerHTML = Math.round(data.main.temp_min) + "°F";
    document.querySelector(".feelslike").innerHTML = "Feels Like " + Math.round(data.main.feels_like) + "°F";
    

    switch(data.weather[0].main){
        case ("Clouds"):
            weatherIcon.src = "images/images/clouds.png";
            break;
        case ("Clear"):
            weatherIcon.src = "images/images/clear.png";
            break;
        case ("Drizzle"):
            weatherIcon.src = "images/images/drizzle.png";
            break;
        case ("Mist"):
            weatherIcon.src = "images/images/mist.png";
            break;
        case ("Rain"):
            weatherIcon.src = "images/images/rain.png";
            break;
        case ("Snow"):
            weatherIcon.src = "images/images/snow.png";
            break;
        case ("Haze" || "Smoke" || "Dust" || "Fog"):
            weatherIcon.src = "images/images/haze.png";
            break;
        case ("Sand" || "Dust"):
            weatherIcon.src = "images/images/sand.png";
            break;
        case ("Ash"):
            weatherIcon.src = "images/images/volcanoe.png";
            break;
        default:
            weatherIcon.src = none;

    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    document.getElementById("arrowB").style.opacity = "1";
    document.getElementById("arrowR").style.opacity = "1";

})