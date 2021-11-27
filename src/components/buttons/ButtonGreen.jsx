import React from "react";
import buttonstyle from "./button.module.scss";

function ButtonGreen(props) {
  return (
    <button className={`${buttonstyle.button} ${buttonstyle.buttonGreen}`}>
      {props.name}
    </button>
  );
}

export default ButtonGreen;
