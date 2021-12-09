import React, { useEffect } from "react";
import createdClassSStyle from "./createdClassS.module.scss";
import hero from "../../assets/img/hero.svg";

function CreatedClassS() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={createdClassSStyle.detailContainer}>
        <div className={createdClassSStyle.containerLine}></div>
        <div className={createdClassSStyle.containerDesc}>
          <img src={hero} alt="hero" className={createdClassSStyle.hero} />
          <p className={createdClassSStyle.containerExplain}>
            You don't have any study room yet, add class to start new study room
          </p>
        </div>
      </div>
    </>
  );
}

export default CreatedClassS;
