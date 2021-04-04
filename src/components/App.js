import React, { useState } from "react";
import "./App.css";
import WeatherLocationForm from "./WeatherLocationForm";
import { getCurrentWeather } from "../api/AxiosOpenWeatherApi";

function App() {
  const [city, setCity] = useState("");
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getCurrentWeather(city, "pl")
      .then((apiData) => setCurrentWeatherData(apiData))
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
    </div>
  );
}

export default App;
