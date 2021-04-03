import React from "react";
import "./WeatherLocationInput.css";

function WeatherLocationInput() {
  return (
    <div className="weatherLocationInput">
      <label>
        Wpisz miasto:
        <br></br>
        <input
          className="weatherLocationInput__input"
          placeholder="Wpisz miasto"
          type="text"
        ></input>
      </label>
    </div>
  );
}

export default WeatherLocationInput;
