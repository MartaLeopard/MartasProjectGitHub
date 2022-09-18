function dateoftoday() {
  let now = new Date();
  let day = now.getDay();
  let time = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let today = days[now.getDay()];
  //let date = today + time;
  //document.getElementById("dayoftoday").innerHTML = today;
  let today2 = today + " " + time + ":" + minutes;
  return today2;
}

const div = document.querySelector("#dayoftoday");
div.innerHTML = dateoftoday();

dateoftoday();

//form = #searchbar
//enter city = #city

function displayWeatherCondition(response) {
  document.querySelector("#bxl").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML =
    Math.round(response.data.main.temp) + "°C";
  document.querySelector("#humidity").innerHTML =
    "Humidity | " + response.data.main.humidity + "%";
  document.querySelector("#wind").innerHTML =
    "Wind | " + Math.round(response.data.wind.speed) + " Km/h";
}

function addCity(event) {
  event.preventDefault();
  let apiKey = "c95d60a1e3adbeb286133f1ebebc2579";
  let city = document.querySelector("#city").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";
  axios.get(apiUrl).then(displayWeatherCondition);
  //event.preventDefault();
  //const cities = document.querySelector("#bxl");
  //const search = document.querySelector("#city");
  //cities.innerHTML = search.value;
  //make an API call to OpenWeather
  //once I get the response, I display the city name + temperature
}

//let changetemp = document.querySelector("#degrees");
//changetemp.innerHTML = null;

let searchengine = document.querySelector(".searchbar");
searchengine.addEventListener("submit", addCity);


