import React from "react";
import "./ErrorMessage.css";

function ErrroMessage({ msg }) {
  return (
    <div className="ErrorMessage">
      <p>{msg}</p>
    </div>
  );
}

export default ErrroMessage;
