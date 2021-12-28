import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Avatar from "react-avatar";
import detailRoomHostStyle from "./detailRoomHost.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import Button from "../../components/buttons/Button";
import { RiCalendar2Fill } from "react-icons/ri";
import { BsPeopleFill } from "react-icons/bs";
import {
  getDetailRoom,
  deleteRoom,
  createChosen,
} from "../../redux/action/actions/detailRoomAction/detailRoomAction";

function DetailRoomHost() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const studyRooms = useSelector((store) => {
    return store.detailRoomReducer.data;
  });

  const profile = useSelector((store) => {
    return store.profileReducer;
  });

  // ↓↓↓ Get Detail Room ↓↓↓
  useEffect(() => {
    dispatch(getDetailRoom(params.id));
  }, [dispatch, params.id]);
  // ↑↑↑ Get Detail Room ↑↑↑

  // ↓↓↓ Delete Detail Room ↓↓↓
  const handleDelete = (id) => {
    if (
      window.confirm("Are You Sure You Want to Delete This Class?") === true
    ) {
      dispatch(deleteRoom(id));
      navigate("/class");
      alert("Class has been successfully deleted");
    } else {
      <div></div>;
    }
  };
  // ↑↑↑ Delete Detail Room ↑↑↑

  // ↓↓↓ Create Join Room ↓↓↓
  const handleJoin = (id) => {
    dispatch(createChosen(id));
  };
  // ↑↑↑ Create Join Room ↑↑↑

  // ↓↓↓ Handle Error ↓↓↓
  const handleError = () => {
    alert("The edit class feature is still on development process");
  };

  const handleErrorA = () => {
    alert("The approve participant feature is still on development process");
  };
  // ↑↑↑ Handle Error ↑↑↑

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
                      onClick={() => {
                        handleErrorA();
                      }}
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
              <div>
                <Link to={`/edit-class/${studyRooms.id}`}>
                  <Button
                    onClick={() => {
                      handleError();
                    }}
                    classStyle="buttonWhite"
                  >
                    Edit Class
                  </Button>
                </Link>
              </div>
              <Button
                classStyle="buttonWhite"
                onClick={() => {
                  handleDelete(studyRooms.id);
                }}
              >
                Delete Class
              </Button>
            </div>
          ) : (
            <div
              onClick={() => handleJoin(studyRooms.id)}
              className={detailRoomHostStyle.roomTitleJoin}
            >
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
                  maxInitials={2}
                  round={true}
                  size={40}
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
                <Link
                  to={`/room/${studyRooms.id}/meeting/${studyRooms.roomName}`}
                >
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
