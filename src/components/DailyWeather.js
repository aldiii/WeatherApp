import React from "react";
import "./DailyWeather.css";

function DailyWeather({ weatherData }) {
  return (
    <div className="DailyWeather">
      {weatherData.map((dailyForecast) => (
        <div className="DailyWeather__day" key={dailyForecast.dt}>
          <img
            src={`http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}.png`}
            alt="ikona pogody"
          />
          <p>
            <span>{Math.round(dailyForecast.temp.max)}</span>
            <span>{Math.round(dailyForecast.temp.min)}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;
