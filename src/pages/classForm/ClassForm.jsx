import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classFormStyle from "./classForm.module.scss";
import { postForm } from "../../redux/action/actions/formAction/formAction";
import Button from "../../components/buttons/Button";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Fill } from "react-icons/ri";

function ClassForm() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const handleDrop = () => {
    setDrop(!drop);
  };

  const [startDate, setStartDate] = useState(null);

  const [topic, setTopic] = useState("Select Topic");
  const [status, setStatus] = useState("Select Class Status");

  const [imageClass, setImageClass] = useState("");
  const [title, setTitle] = useState("");
  const [limitParticipant, setLimitParticipant] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [roomStatus, setRoomStatus] = useState("");

  const classForms = useSelector((store) => {
    return store.data;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postForm());
  }, []);

  // const publish = () => {
  //   const data = {
  //     imageClass,
  //     title,
  //     limitParticipant,
  //     date,
  //     startTime,
  //     endTime,
  //     description,
  //     roomStatus,
  //   };
  //   dispatch(postForm(data));
  // };

  return (
    <>
      <div className={classFormStyle.detailRoom}>
        <img
          src={groupDownloadLeft}
          alt="line"
          className={classFormStyle.groupDownloadLeft}
        />
        <img
          src={ellipseRight}
          alt="ellipse"
          className={classFormStyle.ellipseRight}
        />

        <img
          src={ellipseLeft}
          alt="ellipse"
          className={classFormStyle.ellipseLeft}
        />
        <img
          src={groupDownloadRight}
          alt="ellipse"
          className={classFormStyle.groupDownloadRight}
        />
        <div className={classFormStyle.detailTitle}>
          <p className={classFormStyle.titlePage}>Add New Class</p>
          <form>
            <div className={classFormStyle.formBox}>
              <div className={classFormStyle.formBoxImg}>
                <div className={classFormStyle.formBoxImgName}>
                  Upload Photo
                </div>
                <div className={classFormStyle.formBoxImgUpload}>
                  <div className={classFormStyle.formBoxImgUploadBox}>
                    <label
                      htmlFor="firstimg"
                      className={classFormStyle.formBoxImgUploadBoxSquare}
                    >
                      <span>
                        <MdAddPhotoAlternate
                          className={
                            classFormStyle.formBoxImgUploadBoxSquareIcon
                          }
                        />
                      </span>
                    </label>
                    <input
                      value={imageClass}
                      type="file"
                      name=""
                      id="firstimg"
                      className={classFormStyle.formBoxImgUploadBoxInput}
                      onChange={(e) => setImageClass(e.target.value)}
                    />
                  </div>
                  <p className={classFormStyle.formBoxImgUploadWarn}>
                    Format image .jpg .jpeg .png, maximum 3 MB
                  </p>
                </div>
              </div>
              <div className={classFormStyle.classTitle}>
                <div className={classFormStyle.titleAct}>Title</div>
                <input
                  value={title}
                  type="text"
                  className={classFormStyle.titleBox}
                  placeholder="Input title, e.g. Yoga Class"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className={classFormStyle.classTopic}>
                <div className={classFormStyle.titleAct}>Topic</div>
                <div className={classFormStyle.topicBox}>
                  <div
                    className={classFormStyle.topicBoxFilter}
                    onClick={() => {
                      handleShow();
                    }}
                  >
                    <span>{topic}</span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                  <div
                    className={classFormStyle.topicBoxOptions}
                    style={show ? { display: "block" } : { display: "none" }}
                  >
                    <ul>
                      <li>Select Topic</li>
                      <li>Art</li>
                      <li>Biology</li>
                      <li>Business</li>
                      <li>Cooking</li>
                      <li>Digital</li>
                      <li>Fashion</li>
                      <li>Geography</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={classFormStyle.classParty}>
                <div className={classFormStyle.titleAct}>
                  Number of Participants
                </div>
                <input
                  value={limitParticipant}
                  type="text"
                  className={classFormStyle.partyBox}
                  placeholder="Input number of participants, e.g. 100"
                  onChange={(e) => setLimitParticipant(e.target.value)}
                />
              </div>
              <div className={classFormStyle.classDate}>
                <div className={classFormStyle.titleAct}>Date</div>
                {/* <input
                  value={date}
                  type="date"
                  className={classFormStyle.dateBox}
                  onChange={(e) => setDate(e.target.value)}
                /> */}
                <div className={classFormStyle.dateBox}>
                  <DatePicker
                    className={classFormStyle.dateBoxPicker}
                    defaultValue={date}
                    placeholderText="Select Date"
                    dateFormat="EE, dd MMMM yyyy"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    // onChange={(e) => setImageClass(e.target.value)}
                  />
                  <span>
                    <RiCalendar2Fill />
                  </span>
                </div>
              </div>
              <div className={classFormStyle.classTime}>
                <div className={classFormStyle.titleAct}>Time</div>
                <div className={classFormStyle.timeOuter}>
                  <input
                    value={startTime}
                    type="time"
                    className={classFormStyle.timeBox}
                    onChange={(e) => setStartTime(e.target.value)}
                  />
                  <p>to</p>
                  <input
                    value={endTime}
                    type="time"
                    className={classFormStyle.timeBox}
                    onChange={(e) => setEndTime(e.target.value)}
                  />
                </div>
              </div>
              <div className={classFormStyle.classDesc}>
                <div className={classFormStyle.titleAct}>Description</div>
                <textarea
                  value={description}
                  className={classFormStyle.descBox}
                  placeholder="Input description, e.g.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris sed proin ut cursus bibendum non felis in. Malesuada dignissim nunc id pharetra eget semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris sed proin ut cursus bibendum non felis in. Malesuada dignissim nunc id pharetra eget semper.
                  Lorem Ipsum:
                  • Lorem ipsum dolor sit amet
                  • Lorem ipsum dolor sit amet"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className={classFormStyle.classStatus}>
                <div className={classFormStyle.titleAct}>Class Status</div>
                <div className={classFormStyle.statusBox}>
                  <div
                    className={classFormStyle.statusBoxFilter}
                    onClick={() => {
                      handleDrop();
                    }}
                  >
                    <span>{status}</span>
                    <span>
                      <IoIosArrowDown />
                    </span>
                  </div>
                  <div
                    className={classFormStyle.statusBoxOptions}
                    style={drop ? { display: "block" } : { display: "none" }}
                  >
                    <ul>
                      <li onClick={() => setStatus("Open")}>
                        <input
                          type="radio"
                          name="optionsByOpen"
                          id="optionsByOpen"
                          value={roomStatus}
                          onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByOpen">Open</label>
                      </li>
                      <li onClick={() => setStatus("Restricted")}>
                        <input
                          type="radio"
                          name="optionsByRestricted"
                          id="optionsByRestricted"
                          value={roomStatus}
                          onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByRestricted">Restricted</label>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className={classFormStyle.buttonBox}>
            <Button classStyle="buttonWhite">
              <Link to="/class" className={classFormStyle.cancelBtn}>
                Cancel
              </Link>
            </Button>
            <Button classStyle="buttonWhite">Save as Draft</Button>
            <Link to="">
              <Button classStyle="buttonGreen">Publish</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassForm;
