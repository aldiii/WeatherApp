import React, { useState } from "react";
import "./App.css";
import WeatherLocationForm from "./WeatherLocationForm";

function App() {
  const [city, setCity] = useState("");
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
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
