function dateoftoday() {
  let now = new Date();
  let day = now.getDay();
  let time = now.getHours();
  let minutes = String(now.getMinutes()).padStart(2, "0");
  if (time < 10) {
    time = `0${time}`;
  }
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
  let today2 = today + " " + time + ":" + minutes;
  return today2;
}

var dot = document.querySelector("#dayoftoday");
dot.innerHTML = dateoftoday();

//dateoftoday();

function displayWeatherCondition(response) {
  document.querySelector("#bxl").innerHTML = response.data.name;
  document.querySelector("#degrees").innerHTML =
    Math.round(response.data.main.temp) + "°C | °F";
  document.querySelector("#humidity").innerHTML =
    "Humidity | " + response.data.main.humidity + "%";
  document.querySelector("#wind").innerHTML =
    "Wind | " + Math.round(response.data.wind.speed) + " Km/h";
    let iconElement = document.querySelector("#icon1");
    document.querySelector("#sky").innerHTML = response.data.weather[0].description;
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}

function addCity(event) {
  event.preventDefault();
  let apiKey = "de14e6041ae992f6a2e11129102878a8";
  let city = document.querySelector("#city").value;
  let apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    apiKey +
    "&units=metric";
  axios.get(apiUrl).then(displayWeatherCondition);
//c95d60a1e3adbeb286133f1ebebc2579
}

let searchengine = document.querySelector(".searchbar");
searchengine.addEventListener("submit", addCity);

