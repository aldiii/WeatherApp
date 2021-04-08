import React from "react";
import Icon from "./Icon";
import { getWeekday } from "../utils";
import "./DailyCard.css";

function DailyCard({ dailyForecast }) {
  return (
    <div className="DailyCard" key={dailyForecast.dt}>
      <p className="DailyCard__weekday">{getWeekday(dailyForecast.dt)}</p>
      <Icon iconId={dailyForecast.weather[0].icon} />
      <p className="DailyCard_temp">
        <span>{Math.round(dailyForecast.temp.max)}&deg;C</span>
        <span>{Math.round(dailyForecast.temp.min)}&deg;C</span>
      </p>
    </div>
  );
}

export default DailyCard;
