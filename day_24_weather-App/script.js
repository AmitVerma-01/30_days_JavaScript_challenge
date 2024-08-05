const dateEl = document.querySelector(".date");
const dayEl = document.querySelector(".day");
const timeEl = document.querySelector(".time");
const city_location = document.querySelector(".location");

const main_weather = document.querySelector(".main-weather");
const main_weather_description = document.querySelector(".main-weather-desc");

const temp = document.querySelector(".temp");
const tempFeels = document.querySelector(".temp-feels");
const tempMin = document.querySelector(".temp-min");
const tempMax = document.querySelector(".temp-max");

const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
const seaLevel = document.querySelector(".sea-level");

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};


function updateTime() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let formattedTime = `${hours}:${minutes}`;
  timeEl.textContent = formattedTime;
  const formattedDate = date.toLocaleDateString("en-US", options);
  const getDay = formattedDate.split(",");
  dayEl.textContent = getDay[0];
  dateEl.textContent = getDay[1] + " - " + getDay[2];
}

setInterval(() => {
  updateTime();
}, 1000);

let city = "London";

function handleClick() {
  city = document.getElementById("cityInput").value;
  getWeather();
  getForecastData();
}

async function getForecastData() {
  try {
    const response = await fetch(
      `https://my-app.amitverma.workers.dev/${city}`
    );
    const data = await response.json();
    displayForecastData(data.response);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
getForecastData();

function parseForecastData(data) {
  const dailyForecasts = {};
  const dates = new Set(); // To track unique dates

  for (const item of data.list) {
    const date = new Date(item.dt * 1000).toDateString();

    if (!dates.has(date)) {
      dates.add(date);
      if (dates.size > 5) break; // Stop if we have processed 5 unique dates

      dailyForecasts[date] = {
        temp: 0,
        weather: "",
        count: 0,
      };
    }

    if (dates.has(date)) {
      dailyForecasts[date].temp += item.main.temp;
      dailyForecasts[date].weather = item.weather[0].description;
      dailyForecasts[date].count += 1;
    }
  }

  for (const date in dailyForecasts) {
    dailyForecasts[date].temp /= dailyForecasts[date].count;
  }

  return dailyForecasts;
}

async function getWeather() {
  const url = `https://my-app.amitverma.workers.dev/units/${city}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    displayWeatherData(data.response);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}
getWeather();

function displayWeatherData(data) {
  city_location.textContent = data.name;

  main_weather.textContent = `${data.weather[0].main}`;
  main_weather_description.textContent = `${data.weather[0].description}`;

  temp.textContent = `${data.main.temp}°C`;
  tempFeels.textContent = `${data.main.feels_like}°C`;
  tempMin.textContent = `${data.main.temp_min}°C`;
  tempMax.textContent = `${data.main.temp_max}°C`;

  humidity.textContent = `${data.main.humidity}`;
  wind.textContent = `${data.wind.speed} mph / ${data.wind.deg} deg`;
  pressure.textContent = `${data.main.pressure}`;
  seaLevel.textContent = `${data.main.sea_level}`;

  switch (main_weather.textContent) {
    case "Rainy":
      document.body.style.backgroundImage =
        "url(https://www.hdwallpapers.in/download/falling_rain_drops_on_white_umbrella_hd_rain-HD.jpg)";
      break;
    case "Clear":
      document.body.style.backgroundImage =
        "url(https://wallpapers.com/images/hd/sunny-day-wallpaper-f21ok5dhnkco3i5n.jpg)";
      break;
    case "Clouds":
      document.body.style.backgroundImage =
        "url(https://upload.wikimedia.org/wikipedia/commons/2/2e/Cloudy_Sky_%2841158984%29.jpeg)";
      break;
    case "Thunderstorm":
      document.body.style.backgroundImage =
        "url(https://s.w-x.co/thunderstormasthma.jpg)";
      break;
    case "Drizzle":
      document.body.style.backgroundImage =
        "url(https://cdn.windy.app/site-storage/posts/October2023/nature-grass-snow-fog-mist-morning-41797-pxhere.com.jpg)";
      break;
    case "Fog":
      document.body.style.backgroundImage =
        "url(https://images.unsplash.com/photo-1603038176941-4e0a422ed828?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
      break;
    case "Mist":
      document.body.style.backgroundImage =
        "url(https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/weather/fog--mist/foggy-morning-in-a-meadow.jpg)";
      break;
    case "Dust":
      document.body.style.backgroundImage =
        "url(https://s.hdnux.com/photos/01/33/45/62/24009905/6/rawImage.jpg)";
      break;
    case "Haze":
      document.body.style.backgroundImage =
        "url(https://cff2.earth.com/uploads/2018/11/13015448/what-is-haze.jpg)";
      break;
    default:
      document.body.style.backgroundImage =
        "url(https://cdn.wallpaperhub.app/cloudcache/6/9/0/e/e/f/690eefe3ba1f553e0ea527f51ee407b604b681b4.jpg)";
      break;
  }
}

function displayForecastData(data) {
  const forecastContainer = document.getElementById("forecast-container");
  const dailyForecasts = parseForecastData(data);

  forecastContainer.innerHTML = "";

  for (const date in dailyForecasts) {
    const forecast = dailyForecasts[date];
    const forecastCard = document.createElement("div");
    forecastCard.classList.add("forecast-card");

    forecastCard.innerHTML = `
        <h3>${date}</h3>
        <p>Temperature: ${(forecast.temp - 273.15).toFixed(2)}°C</p>
        <p>forecast: ${forecast.weather}</p>
      `;
    forecastContainer.appendChild(forecastCard);
  }
}
