import React from "react";
import buttonstyle from "./button.module.scss";

function ButtonGreen(props) {
  return (
    <button
      className={`${buttonstyle.button} ${buttonstyle[props.classStyle]}`}
    >
      {props.children}
    </button>
  );
}

export default ButtonGreen;
