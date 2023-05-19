const apiKey = "58b1195a73f91c2e23e17b5261324466";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=Kalamazoo";
async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.wind.speed;
    

}
checkWeather();