import React from "react";
import { getLocaleDate } from "../utils";
import Icon from "./Icon";
import "./CurrentWeather.css";

function CurrentWeather({ weatherData }) {
  return (
    <div className="currentWeather">
      <h2 className="currentWeather__location">{weatherData.name}</h2>
      <p className="currentWeather__date">{getLocaleDate(weatherData.dt)}</p>
      <div className="currentWeather__data">
        <div className="currentWeather__main">
          <div className="currentWeather__description">
            <Icon iconId={weatherData.weather[0].icon} />
            <p>{weatherData.weather[0].description}</p>
          </div>
          <div className="currentWeather__temperatures">
            <p>{Math.round(weatherData.main.temp)}&deg;</p>
            <div className="currentWeather__minMaxTemp">
              <p className="currentWeather__maxTemp">
                {Math.round(weatherData.main.temp_max)}&deg; C
              </p>
              <p>{Math.round(weatherData.main.temp_min)}&deg; C</p>
            </div>
          </div>
        </div>
        <div className="currentWeather__details">
          <div>
            <p className="currentWeather__detailsTitle">
              Temperatura odczuwalna
            </p>
            <p className="currentWeather__detailsData">
              {weatherData.main.feels_like}&deg; C
            </p>
          </div>
          <div>
            <p className="currentWeather__detailsTitle">Prędkość wiatru</p>
            <p className="currentWeather__detailsData">
              {weatherData.wind.speed} m/s
            </p>
          </div>
          <div>
            <p className="currentWeather__detailsTitle">Wilgotność</p>
            <p className="currentWeather__detailsData">
              {weatherData.main.humidity} %
            </p>
          </div>
          <div>
            <p className="currentWeather__detailsTitle">Ciśnienie</p>
            <p className="currentWeather__detailsData">
              {weatherData.main.pressure} hPa
            </p>
          </div>
          <div>
            <p className="currentWeather__detailsTitle">Widoczność</p>
            <p className="currentWeather__detailsData">
              {weatherData.visibility} m
            </p>
          </div>
          <div>
            <p className="currentWeather__detailsTitle">Zachmurzenie</p>
            <p className="currentWeather__detailsData">
              {weatherData.clouds.all} %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
