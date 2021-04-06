import React from "react";
import { getWeekday } from "../utils";
import Icon from "./Icon";
import "./DailyWeather.css";

function DailyWeather({ weatherData }) {
  return (
    <div className="DailyWeather">
      {weatherData.map((dailyForecast) => (
        <div className="DailyCard" key={dailyForecast.dt}>
          <p className="DailyCard__weekday">
            {getWeekday(dailyForecast.dt, dailyForecast.timezone)}
          </p>
          <Icon iconId={dailyForecast.weather[0].icon} />
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
