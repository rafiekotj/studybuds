import React from "react";
import checkbox from "./checkbox.module.scss";
import { BsCheck } from "react-icons/bs";

const Checkbox = ({ checked, onChange }) => {
  return (
    <>
      <div className={checkbox.container}>
        <div
          className={`${checkbox.containerCheckbox} ${
            checked ? checkbox.containerActive : ""
          }`}
          onClick={onChange}
        >
          <BsCheck className={checkbox.containerIcon} />
        </div>
      </div>
    </>
  );
};

export default Checkbox;
