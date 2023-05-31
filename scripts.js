const key = "1eccbcdd5053425814a3e12aa42f8348";

function showDataOnScreen(data) {
  console.log(data);
  document.querySelector("#city-id").innerHTML = "Weather in " + data.name;
  document.querySelector(".temp").innerHTML = data.main.temp.toFixed(1) + "ºC";
  document.querySelector(".weather-text").innerHTML =
    data.weather[0].description;
  document.querySelector(".humidity").innerHTML =
    "Humidity: " + data.main.humidity + "%";
  document.querySelector(
    ".weather-image"
  ).src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
}

async function searchCity(city) {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
  ).then((answer) => answer.json());

  showDataOnScreen(data);
}

function searchButtonClick() {
  const city = document.querySelector("#city-name-input").value;

  searchCity(city);
}
