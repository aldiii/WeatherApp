import React from "react";

function CurrentWeather({ weatherData }) {
  console.log(weatherData);
  return (
    <div className="currentWeather">
      <h2>{weatherData.name}</h2>
      <div className="currentWeather__main">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt="ikona pogody"
        ></img>
        <p>{weatherData.weather[0].description}</p>
        <p>{weatherData.main.temp}&deg; C</p>
        <p>{weatherData.main.temp_max}&deg; C</p>
        <p>{weatherData.main.temp_min}&deg; C</p>
      </div>
      <div className="currentWeather__details">
        <div>
          <p>Temperatura odczuwalna</p>
          <p>{weatherData.main.feels_like}&deg; C</p>
        </div>
        <div>
          <p>Prędkość wiatru</p>
          <p>{weatherData.wind.speed} m/s</p>
        </div>
        <div>
          <p>Wilgotność</p>
          <p>{weatherData.main.humidity} %</p>
        </div>
        <div>
          <p>Ciśnienie</p>
          <p>{weatherData.main.pressure} hPa</p>
        </div>
        <div>
          <p>Widoczność</p>
          <p>{weatherData.visibility} m</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
