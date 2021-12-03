import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import myClassStyle from "./myClass.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import CreatedClassNS from "../createdClassNS/CreatedClassNS";
import Button from "../../components/buttons/Button";
import { AiFillPlusCircle } from "react-icons/ai";

function MyClass() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
            <Link className={myClassStyle.containerJoin} to="">
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
        <CreatedClassNS />
      </div>
    </>
  );
}

export default MyClass;
