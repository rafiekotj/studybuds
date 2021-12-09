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

        <div className={detailRoomStyle.roomTitle}>
          <div className={detailRoomStyle.roomTitleTop}>
            <p className={detailRoomStyle.roomTitleTopName}>
              Basic Math Decimal 1
            </p>
            <div className={detailRoomStyle.roomTitleTopStory}>
              <div className={detailRoomStyle.roomTitleTopStoryDate}>
                <RiCalendar2Fill className={detailRoomStyle.icon} />
                <p className={detailRoomStyle.info}>
                  4 October 2021 | 12:00 - 13:00
                </p>
              </div>
              <div className={detailRoomStyle.roomTitleTopStoryNumber}>
                <BsPeopleFill className={detailRoomStyle.icon} />
                <p className={detailRoomStyle.info}>15/50</p>
              </div>
            </div>
          </div>
          <div className={detailRoomStyle.roomTitleBtn}>
            <Button classStyle="buttonGreen">Join Room</Button>
          </div>
        </div>

        <div className={detailRoomStyle.detailContainer}>
          <div className={detailRoomStyle.detailContainerName}>
            <Link className={detailRoomStyle.detailContainerNameAbout} to="">
              About Class
            </Link>
          </div>
        </div>

        <div className={detailRoomStyle.containerLine}></div>

        <div className={detailRoomStyle.containerMaterial}>
          <div className={detailRoomStyle.containerMaterialDescription}>
            <div className={detailRoomStyle.containerMaterialDescriptionName}>
              Description
            </div>
            <img
              src={`https://s3-alpha-sig.figma.com/img/1e06/85b9/639c3e6dd91aa6fbaa3fa83553182dd8?Expires=1639958400&Signature=WMzY6Gf2n28YT9JqM-MHXkKdiOB~Cw7Yll0R9xnZBVzOLl3bigx7repAjgDzkmUKn0nNDwSoxhZs6X92WLUrr9AOOWLWaGcuJ0kV0M~YBevASoeTJ9SEWqMXVF~tsbose8O8uSlJxgLr2TR7X8ayiGihLMYHYtyMWNKpKGJfRbUyjc~7Zd3k2BZD6MefCGYz1aipkDcZzHAWh~4UiC3o~1Z43UbIGkgb7wgSIAsnDYWRJafGtIPIo-~VurNTv9MCJaKh-lAlTU8r7kJXgHpyE68N-1MjkRAW-C8APuQGzxo5JP0cyllaZzbKz~cqeNJg4nVr3lyL5WSQyvZsVSvmuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
              alt={`Math`}
            />
            <div
              className={detailRoomStyle.containerMaterialDescriptionNarration}
            >
              <h5>
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
              </h5>
            </div>
          </div>

          <div className={detailRoomStyle.containerMaterialHost}>
            <div className={detailRoomStyle.containerMaterialHostName}>
              Host
            </div>
            <div className={detailRoomStyle.containerMaterialHostProfile}>
              <Avatar
                className={detailRoomStyle.containerMaterialHostProfileAvatar}
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
              <div className={detailRoomStyle.containerMaterialHostProfileName}>
                J. Walker Denny Walter
              </div>
            </div>
            <div className={detailRoomStyle.containerMaterialHostStatus}>
              Class Status
            </div>
            <div className={detailRoomStyle.containerMaterialHostExp}>Open</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRoomStudents;
