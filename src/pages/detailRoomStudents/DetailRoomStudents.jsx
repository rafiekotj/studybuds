import React, { useEffect } from "react";
import detailRoomStyle from "./detailRoomStudents.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import Button from "../../components/buttons/Button";
import { RiCalendar2Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRoom } from "../../redux/action/actions/detailRoomAction/detailRoomAction";

function DetailRoomStudents() {
  const dispatch = useDispatch();

  const params = useParams();

  const studyRooms = useSelector((store) => {
    return store.detailRoomReducer.data;
  });

  const location = useLocation();
  console.log(studyRooms);

  useEffect(() => {
    dispatch(getDetailRoom(params.id));
    // console.log(params.id);
  }, [dispatch, params.id]);

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
          onChange={location}
        />

        <div className={detailRoomStyle.roomTitle}>
          <div className={detailRoomStyle.roomTitleTop}>
            <p className={detailRoomStyle.roomTitleTopName}>
              {studyRooms.title}
            </p>
            <div className={detailRoomStyle.roomTitleTopStory}>
              <div className={detailRoomStyle.roomTitleTopStoryDate}>
                <RiCalendar2Fill className={detailRoomStyle.icon} />
                <p className={detailRoomStyle.info}>
                  {studyRooms.date} | {studyRooms.startTime} -{" "}
                  {studyRooms.endTime}
                </p>
              </div>
              <div className={detailRoomStyle.roomTitleTopStoryNumber}>
                <BsPeopleFill className={detailRoomStyle.icon} />
                <p className={detailRoomStyle.info}>
                  0/{studyRooms.limitParticipant}
                </p>
              </div>
            </div>
          </div>
          <div className={detailRoomStyle.roomTitleBtn}>
            <Link
              className={detailRoomStyle.roomTitleBtnLink}
              to={`/room/${studyRooms.id}/meeting/${studyRooms.roomName}`}
            >
              <Button classStyle={`buttonGreen`}>Join Room</Button>
            </Link>
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
            <img src={studyRooms.imageClass} alt={`Math`} />
            <div
              className={detailRoomStyle.containerMaterialDescriptionNarration}
            >
              <h5>{studyRooms.description}</h5>
            </div>
          </div>
          <div className={detailRoomStyle.containerMaterialHost}>
            <div className={detailRoomStyle.containerMaterialHostName}>
              Host
            </div>
            <div className={detailRoomStyle.containerMaterialHostProfile}>
              <Avatar
                className={detailRoomStyle.containerMaterialHostProfileAvatar}
                color={Avatar.getRandomColor("sitebase", ["green"])}
                maxInitials="2"
                round={true}
                size="48"
                name={studyRooms.User?.fullname}
                src={studyRooms.User?.imageUser}
              />
              <div className={detailRoomStyle.containerMaterialHostProfileName}>
                {studyRooms.User?.fullname}
              </div>
            </div>
            <div className={detailRoomStyle.containerMaterialHostStatus}>
              Class Status
            </div>
            <div className={detailRoomStyle.containerMaterialHostExp}>
              {studyRooms.roomStatus}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRoomStudents;
