import React from "react";
import buttonstyle from "./button.module.scss";

function ButtonWhite(props) {
  return (
    <button className={`${buttonstyle.button} ${buttonstyle.buttonWhite}`}>
      <span> {props.name}</span>
    </button>
  );
}

export default ButtonWhite;
