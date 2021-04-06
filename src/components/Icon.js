import React from "react";
import "./Icon.css";

function Icon({ iconId }) {
  return (
    <img
      className="Icon"
      src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
      alt="ikona pogody"
    ></img>
  );
}

export default Icon;
