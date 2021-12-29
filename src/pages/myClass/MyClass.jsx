import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import myClassStyle from "./myClass.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import hero from "../../assets/img/hero.svg";
import Button from "../../components/buttons/Button";
import Card from "../../components/card/Card";
import { AiFillPlusCircle } from "react-icons/ai";
import { getAllCreatedRooms } from "../../redux/action/actions/myClassAction/myClassAction";
import { getAllJoinedRooms } from "../../redux/action/actions/myClassAction/myClassAction";

function MyClass() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const dispatch = useDispatch();

  const studyRooms = useSelector((store) => {
    return store.myClassReducer;
  });

  const profile = useSelector((store) => {
    return store.profileReducer;
  });

  // ↓↓↓ Get Created & Joined Class ↓↓↓
  const [section, setSection] = useState("Created Class");

  const handleSection = (section) => {
    setSection(section);
  };

  useEffect(() => {
    if (section === "Created Class") {
      dispatch(getAllCreatedRooms());
    }
    if (section === "Joined Class") {
      dispatch(getAllJoinedRooms());
    }
  }, [section, dispatch]);
  // ↑↑↑ Get Created & Joined Class ↑↑↑

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
            <p
              onClick={() => handleSection("Created Class")}
              className={
                section === "Created Class" ? myClassStyle.containerCreate : ""
              }
            >
              Created Class
            </p>
            <p
              onClick={() => handleSection("Joined Class")}
              className={
                section === "Joined Class" ? myClassStyle.containerJoin : ""
              }
            >
              Joined Class
            </p>
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
        {profile.data.length !== 0 ? (
          <div className={myClassStyle.containerCards}>
            {studyRooms.data.length !== 0 ? (
              studyRooms.data.map((data) =>
                section === "Joined Class" && data.RoomClass ? (
                  <Card data={data.RoomClass} key={data.id} />
                ) : (
                  <Card data={data} key={data.id} />
                )
              )
            ) : (
              <div className={myClassStyle.containerDesc}>
                <img src={hero} alt="hero" className={myClassStyle.hero} />
                <p className={myClassStyle.containerExplain}>
                  You don't have any class available, you can search class in
                  Study Room Menu or add class to start new study room
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className={myClassStyle.containerDesc}>
            <img src={hero} alt="hero" className={myClassStyle.hero} />
            <p className={myClassStyle.containerExplain}>
              Please sign in to join or create your own class
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default MyClass;
