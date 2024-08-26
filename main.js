import "./style.css";
// let curData = {};

// async function getWeatherData(locationName) {
//   try {
//     const response = await fetch(
//       `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${locationName}?unitGroup=us&key=PMGM2BJB6MA5CKQSP99Y97V7G&contentType=json`,
//       { mode: "cors" }
//     );
//     const data = await response.json();
//     const day = await analyzeData(data);
//     return day;
//   } catch (error) {
//     console.log("Error", error);
//   }
// }

// async function analyzeData(data) {
//   const day = data.days[0];
//   const weatherData = {
//     address: data.resolvedAddress,
//     date: day.datetime,
//     temp: day.temp,
//     conditions: day.conditions,
//     feelslike: day.feelslike,
//     uvindex: day.uvindex,
//     humidity: day.humidity,
//   };
//   return weatherData;
// }

// getWeatherData("van nuys").then((weatherData) => {
//   curData = weatherData;
//   console.log(curData);
// });
