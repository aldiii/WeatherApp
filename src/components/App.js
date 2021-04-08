import React, { useState } from "react";
import "./App.css";
import WeatherLocationForm from "./WeatherLocationForm";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import ErrorMessage from "./ErrorMessage";
import {
  getCurrentWeather,
  getDailyForecast,
} from "../api/AxiosOpenWeatherApi";

function App() {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [dailyForecastData, setDailyForecastData] = useState(null);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setCity(e.target.value.trim());
    setError(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }
    getCurrentWeather(city, "pl")
      .then((apiData) => {
        setCurrentWeatherData(apiData);
        return apiData.coord;
      })
      .then((coord) => getDailyForecast(coord, "pl"))
      .then((forecastData) => {
        setDailyForecastData(forecastData);
      })
      .catch((error) => {
        setError(true);
        console.error(error.msg);
      });
  };
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherLocationForm
        value={city}
        handleChange={handleInputChange}
        handleSubmit={handleFormSubmit}
      ></WeatherLocationForm>
      {error ? (
        <ErrorMessage msg="Proszę wpisz poprawną nazwę miasta!" />
      ) : null}
      {currentWeatherData ? (
        <CurrentWeather weatherData={currentWeatherData}></CurrentWeather>
      ) : null}
      {dailyForecastData ? (
        <DailyWeather
          weatherData={dailyForecastData.daily.slice(1)}
        ></DailyWeather>
      ) : null}
    </div>
  );
}

export default App;
