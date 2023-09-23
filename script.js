const apiKey = "550581e0a5332452bdb4525191a7ed75";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchName = document.querySelector(".search input");
const searchButton = document.querySelector(".search-button");
const WeatherIcon = document.querySelector(".weather-icon");

const checkWeather = async (city) => {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);
  document.querySelector(".temp").innerHTML = data.main.temp + "°c";
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".text1").innerHTML = data.main.humidity + "%";
  document.querySelector(".text2").innerHTML = data.wind.speed + "kmph";

  weatherIconDisplay(data);
};
searchButton.addEventListener("click", () => {
  checkWeather(searchName.value);
});

const weatherIconDisplay = (data) => {
  if (data.weather[0].main === "Clouds") {
    WeatherIcon.src = "images/images/clouds.png";
  }
  else if (data.weather[0].main === "Clear"){
    WeatherIcon.src = "images/images/clear.png";
  }
  else if (data.weather[0].main === "Drizzle"){
    WeatherIcon.src = "images/images/drizzle.png";
  }
  else if (data.weather[0].main === "Rain"){
    WeatherIcon.src = "images/images/rain.png";
  }
  else if (data.weather[0].main === "Humidity"){
    WeatherIcon.src = "images/images/humidity.png";
  }
  else if (data.weather[0].main === "Mist"){
    WeatherIcon.src = "images/images/mist.png";
  }
  else if (data.weather[0].main === "Snow"){
    WeatherIcon.src = "images/images/snow.png";
  }
  else {
    WeatherIcon.src = "images/images/wind.png";
  }
};
