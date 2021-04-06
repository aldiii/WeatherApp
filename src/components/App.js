import React, { useState } from "react";
import "./App.css";
import WeatherLocationForm from "./WeatherLocationForm";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import {
  getCurrentWeather,
  getDailyForecast,
} from "../api/AxiosOpenWeatherApi";

function App() {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [dailyForecastData, setDailyForecastData] = useState(null);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getCurrentWeather(city, "pl")
      .then((apiData) => {
        setCurrentWeatherData(apiData);
        return apiData.coord;
      })
      .then((coord) => getDailyForecast(coord, "pl"))
      .then((forecastData) => {
        setDailyForecastData(forecastData);
      })
      .catch((error) => console.error(error.msg));
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherLocationForm
        value={city}
        handleChange={handleInputChange}
        handleSubmit={handleFormSubmit}
      ></WeatherLocationForm>
      {currentWeatherData ? (
        <CurrentWeather weatherData={currentWeatherData}></CurrentWeather>
      ) : null}
      {dailyForecastData ? (
        <DailyWeather weatherData={dailyForecastData.daily}></DailyWeather>
      ) : null}
    </div>
  );
}

export default App;
