import React, { useEffect } from "react";
import joinedClassStyle from "./joinedClass.module.scss";
import hero from "../../assets/img/hero.svg";

function joinedClass() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={joinedClassStyle.detailContainer}>
        <div className={joinedClassStyle.containerLine}></div>
        <div className={joinedClassStyle.containerDesc}>
          <img src={hero} alt="hero" className={joinedClassStyle.hero} />
          <p className={joinedClassStyle.containerExplain}>
            You don't have any class available, you can search class in Study
            Room Menu
          </p>
        </div>
      </div>
    </>
  );
}

export default joinedClass;
