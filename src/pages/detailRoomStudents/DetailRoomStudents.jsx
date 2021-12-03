import React, { useEffect } from "react";
import detailRoomStyle from "./detailRoomStudents.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import Button from "../../components/buttons/Button";
import { RiCalendar2Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function DetailRoomStudents() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={detailRoomStyle.detailRoom}>
        <img
          src={groupDownloadLeft}
          alt="line"
          className={detailRoomStyle.groupDownloadLeft}
        />
        <img
          src={ellipseRight}
          alt="ellipse"
          className={detailRoomStyle.ellipseRight}
        />
        <div className={detailRoomStyle.containerLine}></div>
        <img
          src={ellipseLeft}
          alt="ellipse"
          className={detailRoomStyle.ellipseLeft}
        />
        <img
          src={groupDownloadRight}
          alt="ellipse"
          className={detailRoomStyle.groupDownloadRight}
        />
        <div className={detailRoomStyle.detailTitle}>
          <div className={detailRoomStyle.titleHead}>
            <p className={detailRoomStyle.titleName}>Basic Math Decimal 1</p>
            <div className={detailRoomStyle.titleStory}>
              <div className={detailRoomStyle.titleDate}>
                <RiCalendar2Fill className={detailRoomStyle.icon} />
                <p className={detailRoomStyle.info}>
                  4 October 2021 | 12:00 - 13:00
                </p>
              </div>
              <div className={detailRoomStyle.titleNumber}>
                <BsPeopleFill className={detailRoomStyle.icon} />
                <p className={detailRoomStyle.info}>15/50</p>
              </div>
            </div>
          </div>
          <div className={detailRoomStyle.joinRoomBtn}>
            <Button classStyle="buttonGreen">Join Room</Button>
          </div>
        </div>
        <div className={detailRoomStyle.detailContainer}>
          <div className={detailRoomStyle.containerTitle}>
            <Link className={detailRoomStyle.containerAbout} to="">
              About Class
            </Link>
          </div>
          <div className={detailRoomStyle.containerMaterial}>
            <div className={detailRoomStyle.materialDescription}>
              <div className={detailRoomStyle.descriptionTitle}>
                Description
              </div>
              <img
                src="data:image/jpeg;base64,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"
                alt="Math"
              />
              <div className={detailRoomStyle.descriptionNarration}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris sed proin ut cursus bibendum non felis in. Malesuada
                  dignissim nunc id pharetra eget semper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Duis mauris sed proin ut
                  cursus bibendum non felis in. Malesuada dignissim nunc id
                  pharetra eget semper.
                  <br />
                  <br />
                  <span>Lorem Ipsum:</span>
                  <ul>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  mauris sed proin ut cursus bibendum non felis in. Malesuada
                  dignissim nunc id pharetra eget semper. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Duis mauris sed proin ut
                  cursus bibendum non felis in. Malesuada dignissim nunc id
                  pharetra eget semper.
                </p>
              </div>
            </div>
            <div className={detailRoomStyle.materialHost}>
              <div className={detailRoomStyle.hostTitle}>Host</div>
              <div className={detailRoomStyle.hostProfile}>
                <Avatar
                  className={detailRoomStyle.hostAvatar}
                  color={Avatar.getRandomColor("sitebase", [
                    "red",
                    "green",
                    "blue",
                  ])}
                  maxInitials="2"
                  round={true}
                  size="48"
                  name="J. Walker Denny Walter"
                />
                <div className={detailRoomStyle.hostName}>
                  J. Walker Denny Walter
                </div>
              </div>
              <div className={detailRoomStyle.hostClassStatus1}>
                Class Status
              </div>
              <div className={detailRoomStyle.hostClassStatus2}>Open</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRoomStudents;
