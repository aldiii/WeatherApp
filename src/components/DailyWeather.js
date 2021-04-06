import React from "react";
import DailyCard from "./DailyCard";
import "./DailyWeather.css";

function DailyWeather({ weatherData }) {
  return (
    <div className="DailyWeather">
      {weatherData.map((dailyForecast) => (
        <DailyCard dailyForecast={dailyForecast} />
      ))}
    </div>
  );
}

export default DailyWeather;
