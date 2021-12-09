import React, { useState } from "react";
import { Link } from "react-router-dom";
import myClassStyle from "./myClass.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import CreatedClassS from "../createdClassS/CreatedClassS";
import Button from "../../components/buttons/Button";
import hero from "../../assets/img/hero.svg";
import { AiFillPlusCircle } from "react-icons/ai";

function MyClass() {
  const [joined, setJoined] = useState(false);
  const btnJoined = (e) => {
    e ? setJoined(true) : console.log(null);
  };

  return (
    <>
      <div className={myClassStyle.detailRoom}>
        <img
          src={groupDownloadLeft}
          alt="line"
          className={myClassStyle.groupDownloadLeft}
        />
        <img
          src={ellipseRight}
          alt="ellipse"
          className={myClassStyle.ellipseRight}
        />
        <img
          src={ellipseLeft}
          alt="ellipse"
          className={myClassStyle.ellipseLeft}
        />
        <img
          src={groupDownloadRight}
          alt="ellipse"
          className={myClassStyle.groupDownloadRight}
        />
        <div className={myClassStyle.detailTitle}>
          <div className={myClassStyle.titleHead}>
            <p className={myClassStyle.titleName}>My Class</p>
          </div>
        </div>
        <div className={myClassStyle.containerMenu}>
          <div className={myClassStyle.containerTitle}>
            <Link className={myClassStyle.containerCreate} to="">
              Created Class
            </Link>
            <Link
              className={myClassStyle.containerJoin}
              to=""
              onClick={btnJoined}
            >
              Joined Class
            </Link>
          </div>
          <div className={myClassStyle.addClassBtn}>
            <Button classStyle={"addClass"}>
              <Link to="/new-class" className={myClassStyle.addBtn}>
                Add Class
                <span className={myClassStyle.plusIcon}>
                  <AiFillPlusCircle />
                </span>
              </Link>
            </Button>
          </div>
        </div>
        <div className={myClassStyle.containerLine}></div>
        <CreatedClassS />

        {joined && (
          <div className={myClassStyle.detailContainer}>
            <div className={myClassStyle.containerLine}></div>
            <div className={myClassStyle.containerDesc}>
              <img src={hero} alt="hero" className={myClassStyle.hero} />
              <p className={myClassStyle.containerExplain}>Jomplang</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MyClass;
