import React, { useEffect } from "react";
import detailRoomHostStyle from "./detailRoomHost.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import Button from "../../components/buttons/Button";
import { RiCalendar2Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
// import { ImCross } from "react-icons/im";
import { Link, useLocation, useParams } from "react-router-dom";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { getDetailRoom } from "../../redux/action/actions/detailRoomAction/detailRoomAction";

function DetailRoomHost() {
  const dispatch = useDispatch();

  const params = useParams();

  const studyRooms = useSelector((store) => {
    return store.detailRoomReducer.data;
  });

  const profile = useSelector((store) => {
    return store.profileReducer;
  });

  console.log(profile);

  const location = useLocation();
  console.log(studyRooms);

  useEffect(() => {
    dispatch(getDetailRoom(params.id));
    // dispatch(getUserData());
    // console.log(params.id);
  }, [dispatch, params.id]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <div className={detailRoomHostStyle.detailRoom}>
        <img
          src={groupDownloadLeft}
          alt="line"
          className={detailRoomHostStyle.groupDownloadLeft}
        />
        <img
          src={ellipseRight}
          alt="ellipse"
          className={detailRoomHostStyle.ellipseRight}
        />
        <img
          src={ellipseLeft}
          alt="ellipse"
          className={detailRoomHostStyle.ellipseLeft}
        />
        <img
          src={groupDownloadRight}
          alt="ellipse"
          className={detailRoomHostStyle.groupDownloadRight}
        />

        <div className={detailRoomHostStyle.roomTitle}>
          <div className={detailRoomHostStyle.roomTitleTop}>
            <p className={detailRoomHostStyle.roomTitleTopName}>
              {studyRooms.title}
            </p>
            <div className={detailRoomHostStyle.roomTitleTopStory}>
              <div className={detailRoomHostStyle.roomTitleTopStoryDate}>
                <RiCalendar2Fill className={detailRoomHostStyle.icon} />
                <p className={detailRoomHostStyle.info}>
                  {studyRooms.date} | {studyRooms.startTime} -{" "}
                  {studyRooms.endTime}
                </p>
              </div>
              <div className={detailRoomHostStyle.roomTitleTopStoryNumber}>
                <BsPeopleFill className={detailRoomHostStyle.icon} />
                <p className={detailRoomHostStyle.info}>
                  {studyRooms.countJoined}/{studyRooms.limitParticipant}{" "}
                  <span>
                    {studyRooms.User?.id === profile.data.id &&
                    studyRooms.roomStatus === "Restricted"
                      ? `(1.000 people interested to join)`
                      : ""}
                  </span>
                </p>
                {studyRooms.User?.id === profile.data.id &&
                studyRooms.roomStatus === "Restricted" ? (
                  <Link
                    to={`/participant/${studyRooms.id}`}
                    className={
                      detailRoomHostStyle.roomTitleTopStoryNumberApprove
                    }
                  >
                    <input
                      type="button"
                      value="Approve Participant"
                      className={
                        detailRoomHostStyle.roomTitleTopStoryNumberApproveBtn
                      }
                    />
                  </Link>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          {studyRooms.User?.id === profile.data.id ? (
            <div className={detailRoomHostStyle.roomTitleBtn}>
              <Link to={`/edit-class/${studyRooms.id}`}>
                <Button classStyle="buttonWhite">Edit Class</Button>
              </Link>
              <Link to="">
                <Button classStyle="buttonWhite">Delete Class</Button>
              </Link>
            </div>
          ) : (
            <div className={detailRoomHostStyle.roomTitleJoin}>
              <Link
                to={`/room/${studyRooms.id}/meeting/${studyRooms.roomName}`}
              >
                <Button classStyle={`buttonGreen`}>Join Room</Button>
              </Link>
            </div>
          )}
        </div>

        <div className={detailRoomHostStyle.detailContainer}>
          <div className={detailRoomHostStyle.detailContainerName}>
            <Link
              className={detailRoomHostStyle.detailContainerNameAbout}
              to=""
            >
              About Class
            </Link>
          </div>
        </div>

        <div className={detailRoomHostStyle.containerLine}></div>

        <div className={detailRoomHostStyle.containerMaterial}>
          <div className={detailRoomHostStyle.containerMaterialDescription}>
            <div
              className={detailRoomHostStyle.containerMaterialDescriptionName}
            >
              Description
            </div>
            <img src={studyRooms.imageClass} alt={`StudyBuds`} />
            <div
              className={
                detailRoomHostStyle.containerMaterialDescriptionNarration
              }
            >
              <h5>{studyRooms.description}</h5>
            </div>
          </div>

          <div className={detailRoomHostStyle.containerMaterialHost}>
            <div className={detailRoomHostStyle.containerMaterialHostSquare}>
              <div
                className={detailRoomHostStyle.containerMaterialHostSquareName}
              >
                Host
              </div>
              <div
                className={
                  detailRoomHostStyle.containerMaterialHostSquareProfile
                }
              >
                <Avatar
                  className={
                    detailRoomHostStyle.containerMaterialHostSquareProfileAvatar
                  }
                  color={Avatar.getRandomColor("sitebase", [])}
                  maxInitials="2"
                  round={true}
                  size="48"
                  name={studyRooms.User?.fullname}
                  src={studyRooms.User?.imageUser}
                />
                <div
                  className={
                    detailRoomHostStyle.containerMaterialHostSquareProfileName
                  }
                >
                  {studyRooms.User?.fullname}
                </div>
              </div>
              <div
                className={
                  detailRoomHostStyle.containerMaterialHostSquareStatus
                }
              >
                Class Status
              </div>
              <div
                className={detailRoomHostStyle.containerMaterialHostSquareExp}
                style={
                  studyRooms.roomStatus === "Open"
                    ? { color: "#279B24" }
                    : { color: "#EEB218" }
                }
              >
                {studyRooms.roomStatus}
              </div>
            </div>
            {studyRooms.User?.id === profile.data.id ? (
              <div className={detailRoomHostStyle.HostBtn}>
                <Link to="">
                  <Button classStyle="buttonGreen">Start Class</Button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailRoomHost;

// MISCELLANEOUS

// Alert Add Participant
// {
//   /* <div className={detailRoomHostStyle.openAlert}>
//   <div className={detailRoomHostStyle.proceedsAlert}>
//     <ImCross className={detailRoomHostStyle.cross} />
//     <p className={detailRoomHostStyle.alertText}>Add Participants Success</p>
//     <div className={detailRoomHostStyle.okayBtn}>
//       <ButtonGreen name="ㅤ" />
//     </div>
//   </div>
// </div> */
// }

// Alert Class Not Started
// {
//   /* <div className={detailRoomHostStyle.openAlert}>
//   <div className={detailRoomHostStyle.proceedsAlert}>
//     <ImCross className={detailRoomHostStyle.cross} />
//     <p className={detailRoomHostStyle.alertText}>The class has not yet started</p>
//     <div className={detailRoomHostStyle.okayBtn}>
//       <ButtonGreen name="ㅤ" />
//     </div>
//   </div>
// </div> */
// }
