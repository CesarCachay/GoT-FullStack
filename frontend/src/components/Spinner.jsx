import React from "react";
import spinner from "../assets/spinner.gif";

const Spinner = () => {
  const spinnerStyle = {
    width: "200px",
    margin: "auto",
    display: "block"
  };

  return (
    <div>
      <img src={spinner} alt="Loading ..." style={spinnerStyle} />
    </div>
  );
};

export default Spinner;
