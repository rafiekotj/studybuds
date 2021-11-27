import React from "react";
import buttonstyle from "./button.module.scss";

function ButtonWhite(props) {
  return (
    <button className={`${buttonstyle.button} ${buttonstyle.buttonWhite}`}>
      {props.name}
    </button>
  );
}

export default ButtonWhite;
