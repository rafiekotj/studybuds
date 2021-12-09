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
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function DetailRoomHost() {
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
              Advanced Biology by Dr. Kusanagi
            </p>
            <div className={detailRoomHostStyle.roomTitleTopStory}>
              <div className={detailRoomHostStyle.roomTitleTopStoryDate}>
                <RiCalendar2Fill className={detailRoomHostStyle.icon} />
                <p className={detailRoomHostStyle.info}>
                  4 October 2021 | 12:00 - 13:00
                </p>
              </div>
              <div className={detailRoomHostStyle.roomTitleTopStoryNumber}>
                <BsPeopleFill className={detailRoomHostStyle.icon} />
                <p className={detailRoomHostStyle.info}>
                  0/50 <span>(1.000 people interested to join)</span>
                </p>
                <Link
                  to="/approve"
                  className={detailRoomHostStyle.roomTitleTopStoryNumberApprove}
                >
                  <input
                    type="button"
                    value="Approve Participant"
                    className={
                      detailRoomHostStyle.roomTitleTopStoryNumberApproveBtn
                    }
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className={detailRoomHostStyle.roomTitleBtn}>
            <Button classStyle="buttonWhite">Edit Class</Button>
            <Button classStyle="buttonWhite">Delete Class</Button>
          </div>
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
            <img
              src={`https://s3-alpha-sig.figma.com/img/1e06/85b9/639c3e6dd91aa6fbaa3fa83553182dd8?Expires=1639958400&Signature=WMzY6Gf2n28YT9JqM-MHXkKdiOB~Cw7Yll0R9xnZBVzOLl3bigx7repAjgDzkmUKn0nNDwSoxhZs6X92WLUrr9AOOWLWaGcuJ0kV0M~YBevASoeTJ9SEWqMXVF~tsbose8O8uSlJxgLr2TR7X8ayiGihLMYHYtyMWNKpKGJfRbUyjc~7Zd3k2BZD6MefCGYz1aipkDcZzHAWh~4UiC3o~1Z43UbIGkgb7wgSIAsnDYWRJafGtIPIo-~VurNTv9MCJaKh-lAlTU8r7kJXgHpyE68N-1MjkRAW-C8APuQGzxo5JP0cyllaZzbKz~cqeNJg4nVr3lyL5WSQyvZsVSvmuw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`}
              alt={`Math`}
            />
            <div
              className={
                detailRoomHostStyle.containerMaterialDescriptionNarration
              }
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
                  color={Avatar.getRandomColor("sitebase", [
                    "red",
                    "green",
                    "blue",
                  ])}
                  maxInitials={2}
                  round={true}
                  size="44"
                  name="J. Walker Denny Walter"
                />
                <div
                  className={
                    detailRoomHostStyle.containerMaterialHostSquareProfileName
                  }
                >
                  J. Walker Denny Walter
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
              >
                Restricted
              </div>
            </div>
            <div className={detailRoomHostStyle.containerMaterialHostBtn}>
              <Button classStyle="buttonGreen">Start Class</Button>
            </div>
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
