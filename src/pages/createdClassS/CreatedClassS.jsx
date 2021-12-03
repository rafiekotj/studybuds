import React, { useEffect } from "react";
import createdClassNSStyle from "./createdClassNS.module.scss";
import hero from "../../assets/img/hero.svg";

function CreatedClassNS() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={createdClassNSStyle.detailContainer}>
        <div className={createdClassNSStyle.containerLine}></div>
        <div className={createdClassNSStyle.containerDesc}>
          <img src={hero} alt="hero" className={createdClassNSStyle.hero} />
          <p className={createdClassNSStyle.containerExplain}>
            You don't have any study room yet, add class to start new study room
          </p>
        </div>
      </div>
    </>
  );
}

export default CreatedClassNS;
