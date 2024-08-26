import "./style.css";

const address = document.querySelector(".location");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const condition = document.querySelector(".condition");
const feels = document.querySelector(".feels");
const uv = document.querySelector(".uv");
const humid = document.querySelector(".humid");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const form = document.querySelector("#form");
const input = document.querySelector("#location");

async function getWeatherData(locationName) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=us&key=PMGM2BJB6MA5CKQSP99Y97V7G&contentType=json`,
      { mode: "cors" }
    );
    const data = await response.json();
    const day = await analyzeData(data);
    return day;
  } catch (error) {
    console.log("Error", error);
  }
}

async function analyzeData(data) {
  const day = data.days[1];
  const weatherData = {
    address: data.resolvedAddress,
    date: day.datetime,
    temp: day.temp,
    conditions: day.conditions,
    feelslike: day.feelslike,
    uvindex: day.uvindex,
    humidity: day.humidity,
    min: day.tempmin,
    max: day.tempmax,
  };
  return weatherData;
}

function displayData(weatherData) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObject = new Date(weatherData.date);
  dateObject.setDate(dateObject.getDate() + 1);
  const dateString = `${
    months[dateObject.getMonth()]
  } ${dateObject.getDate()}, ${dateObject.getFullYear()}`;
  address.textContent = weatherData.address;
  date.textContent = dateString;
  temp.textContent = weatherData.temp + "°F";
  condition.textContent = weatherData.conditions;
  feels.textContent = "Feels like " + weatherData.feelslike + "°F";
  uv.textContent = weatherData.uvindex;
  humid.textContent = weatherData.humidity + "%";
  min.textContent = weatherData.min + "°F";
  max.textContent = weatherData.max + "°F";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeatherData(input.value).then((weatherData) => {
    displayData(weatherData);
  });
});

getWeatherData("los angeles").then((weatherData) => {
  displayData(weatherData);
});
