import React from "react";
import { getWeekday } from "../utils";
import "./DailyWeather.css";

function DailyWeather({ weatherData }) {
  return (
    <div className="DailyWeather">
      {weatherData.map((dailyForecast) => (
        <div className="DailyCard" key={dailyForecast.dt}>
          <p className="DailyCard__weekday">
            {getWeekday(dailyForecast.dt, dailyForecast.timezone)}
          </p>
          <img
            src={`http://openweathermap.org/img/wn/${dailyForecast.weather[0].icon}.png`}
            alt="ikona pogody"
          />
          <p className="DailyCard_temp">
            <span>{Math.round(dailyForecast.temp.max)}&deg;C</span>
            <span>{Math.round(dailyForecast.temp.min)}&deg;C</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default DailyWeather;
