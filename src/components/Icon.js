import React from "react";

function Icon({ iconId }) {
  return (
    <img
      src={`http://openweathermap.org/img/wn/${iconId}.png`}
      alt="ikona pogody"
    ></img>
  );
}

export default Icon;
