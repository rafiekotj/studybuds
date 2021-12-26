import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import myClassStyle from "./myClass.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import CreatedClassS from "../createdClassS/CreatedClassS";
import Button from "../../components/buttons/Button";
// import hero from "../../assets/img/hero.svg";
import { AiFillPlusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getAllCreatedRooms } from "../../redux/action/actions/myClassAction/myClassAction";
import { getAllJoinedRooms } from "../../redux/action/actions/myClassAction/myClassAction";
import Card from "../../components/card/Card";

function MyClass() {
  const [section, setSection] = useState("Created Class");

  const dispatch = useDispatch();

  const studyRooms = useSelector((store) => {
    return store.myClassReducer;
  });

  console.log(studyRooms);

  const handleSection = (section) => {
    setSection(section);
  };

  useEffect(() => {
    if (section === "Created Class") {
      dispatch(getAllCreatedRooms());
      if (section === "Joined Class") {
        dispatch(getAllJoinedRooms());
      }
    }
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
        <div className={myClassStyle.containerCards}>
          {studyRooms.data.map((data) => (
            <Card
              data={section === "Created Class" ? data : data.RoomClass}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyClass;
