import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { Formik } from "formik";
// import * as yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classFormStyle from "./classForm.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiCalendar2Fill } from "react-icons/ri";
import Button from "../../components/buttons/Button";

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

  const dispatch = useDispatch();

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
              <div className={classFormStyle.classImg}>
                <div className={classFormStyle.titleAct}>Upload Photo</div>
                <div className={classFormStyle.uploadPlace}>
                  <div className={classFormStyle.uploadBox}>
                    <label
                      htmlFor="firstimg"
                      className={classFormStyle.pictBox}
                    >
                      <span>
                        <MdAddPhotoAlternate
                          className={classFormStyle.pictIcon}
                        />
                      </span>
                    </label>
                    <input
                      value={imageClass}
                      type="file"
                      name=""
                      id="firstimg"
                      className={classFormStyle.inputPict}
                      onChange={(e) => setImageClass(e.target.value)}
                    />
                  </div>
                  <p className={classFormStyle.uploadWarn}>
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
                      <li onClick={() => setTopic("Select Topic")}>
                        <input
                          type="radio"
                          name="optionsBySelectTopic"
                          id="optionsBySelectTopic"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsBySelectTopic">
                          Select Topic
                        </label>
                      </li>
                      <li onClick={() => setTopic("Art")}>
                        <input
                          type="radio"
                          name="optionsByArt"
                          id="optionsByArt"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByArt">Art</label>
                      </li>
                      <li onClick={() => setTopic("Biology")}>
                        <input
                          type="radio"
                          name="optionsByBiology"
                          id="optionsByBiology"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByBiology">Biology</label>
                      </li>
                      <li onClick={() => setTopic("Business")}>
                        <input
                          type="radio"
                          name="optionsByBusiness"
                          id="optionsByBusiness"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByBusiness">Business</label>
                      </li>
                      <li onClick={() => setTopic("Cooking")}>
                        <input
                          type="radio"
                          name="optionsByCooking"
                          id="optionsByCooking"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByCooking">Cooking</label>
                      </li>
                      <li onClick={() => setTopic("Fashion")}>
                        <input
                          type="radio"
                          name="optionsByFashion"
                          id="optionsByFashion"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByFashion">Fashion</label>
                      </li>
                      <li onClick={() => setTopic("Geography")}>
                        <input
                          type="radio"
                          name="optionsByGeography"
                          id="optionsByGeography"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByGeography">Geography</label>
                      </li>
                      <li onClick={() => setTopic("Geology")}>
                        <input
                          type="radio"
                          name="optionsByGeology"
                          id="optionsByGeology"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByGeology">Geology</label>
                      </li>
                      <li onClick={() => setTopic("Health")}>
                        <input
                          type="radio"
                          name="optionsByHealth"
                          id="optionsByHealth"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByHealth">Health</label>
                      </li>
                      <li onClick={() => setTopic("History")}>
                        <input
                          type="radio"
                          name="optionsByHistory"
                          id="optionsByHistory"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByHistory">History</label>
                      </li>
                      <li onClick={() => setTopic("Hobbies")}>
                        <input
                          type="radio"
                          name="optionsByHobbies"
                          id="optionsByHobbies"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByHobbies">Hobbies</label>
                      </li>
                      <li onClick={() => setTopic("Literature")}>
                        <input
                          type="radio"
                          name="optionsByLiterature"
                          id="optionsByLiterature"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByLiterature">Literature</label>
                      </li>
                      <li onClick={() => setTopic("Love Class")}>
                        <input
                          type="radio"
                          name="optionsByLoveClass"
                          id="optionsByLoveClass"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByLoveClass">Love Class</label>
                      </li>
                      <li onClick={() => setTopic("Math")}>
                        <input
                          type="radio"
                          name="optionsByMath"
                          id="optionsByMath"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByMath">Math</label>
                      </li>
                      <li onClick={() => setTopic("Physics")}>
                        <input
                          type="radio"
                          name="optionsByPhysics"
                          id="optionsByPhysics"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByPhysics">Physics</label>
                      </li>
                      <li onClick={() => setTopic("Research")}>
                        <input
                          type="radio"
                          name="optionsByResearch"
                          id="optionsByResearch"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByResearch">Research</label>
                      </li>
                      <li onClick={() => setTopic("Romance")}>
                        <input
                          type="radio"
                          name="optionsByRomance"
                          id="optionsByRomance"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByRomance">Romance</label>
                      </li>
                      <li onClick={() => setTopic("Sport")}>
                        <input
                          type="radio"
                          name="optionsBySport"
                          id="optionsBySport"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsBySport">Sport</label>
                      </li>
                      <li onClick={() => setTopic("Tech")}>
                        <input
                          type="radio"
                          name="optionsByTech"
                          id="optionsByTech"
                          // value={roomStatus}
                          // onChange={(e) => setRoomStatus(e.target.value)}
                        />
                        <label htmlFor="optionsByTech">Tech</label>
                      </li>
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
            <Link to="/host">
              <Button classStyle="buttonGreen">Publish</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassForm;
