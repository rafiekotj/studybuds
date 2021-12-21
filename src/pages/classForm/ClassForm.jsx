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
import moment from "moment";
import { createForm } from "../../redux/action/actions/formAction/formAction";

function ClassForm() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [show, setShow] = useState(false);
  const [drop, setDrop] = useState(false);

  const [startDate, setStartDate] = useState(null);

  // const initialRoomState = {};

  const [room, setRoom] = useState({
    id_topic: "",
    imageClass: "",
    title: "",
    limitParticipant: "",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
    roomStatus: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // let data = { [name]: value };
    // console.log(data);
    setRoom({ ...room, [name]: value });
    // setRoom([...room, { title: value }]);
  };

  console.log(room);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createForm(room))
      .then((data) => {
        room();
      })
      .catch((err) => console.log(err));
  };

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
          <form onSubmit={handleSubmit}>
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
                      type="file"
                      id="firstimg"
                      className={classFormStyle.formBoxImgUploadBoxInput}
                      value={room.imageClass}
                      onChange={handleInputChange}
                      name="imageClass"
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
                  type="text"
                  className={classFormStyle.titleBox}
                  placeholder="Input title, e.g. Yoga Class"
                  value={room.title}
                  onChange={handleInputChange}
                  name="title"
                />
              </div>
              <div className={classFormStyle.classTopic}>
                <div className={classFormStyle.titleAct}>Topic</div>
                <div className={classFormStyle.topicBox}>
                  <select
                    className={classFormStyle.topicSelect}
                    value={room.id_topic}
                    name="id_topic"
                    id="id_topic"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected hidden>
                      Select Topic
                    </option>
                    <option value="1">Math</option>
                    <option value="2">Art</option>
                  </select>
                </div>
              </div>
              <div className={classFormStyle.classParty}>
                <div className={classFormStyle.titleAct}>
                  Number of Participants
                </div>
                <input
                  type="text"
                  className={classFormStyle.partyBox}
                  placeholder="Input number of participants, e.g. 100"
                  value={room.limitParticipant}
                  onChange={handleInputChange}
                  name="limitParticipant"
                />
              </div>
              <div className={classFormStyle.classDate}>
                <div className={classFormStyle.titleAct}>Date</div>
                <div className={classFormStyle.dateBox}>
                  <DatePicker
                    className={classFormStyle.dateBoxPicker}
                    placeholderText="Select Date"
                    dateFormat="EE, dd MMMM yyyy"
                    selected={startDate}
                    onChange={(value) => {
                      setStartDate(value);
                      setRoom({
                        ...room,
                        date: moment(value)
                          .format("ddd, D MMMM YYYY")
                          .toString(),
                      });
                    }}
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
                    type="time"
                    className={classFormStyle.timeBox}
                    value={room.startTime}
                    onChange={handleInputChange}
                    name="startTime"
                  />
                  <p>to</p>
                  <input
                    type="time"
                    className={classFormStyle.timeBox}
                    value={room.endTime}
                    onChange={handleInputChange}
                    name="endTime"
                  />
                </div>
              </div>
              <div className={classFormStyle.classDesc}>
                <div className={classFormStyle.titleAct}>Description</div>
                <textarea
                  className={classFormStyle.descBox}
                  placeholder="Input description, e.g.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris sed proin ut cursus bibendum non felis in. Malesuada dignissim nunc id pharetra eget semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris sed proin ut cursus bibendum non felis in. Malesuada dignissim nunc id pharetra eget semper.
                  Lorem Ipsum:
                  • Lorem ipsum dolor sit amet
                  • Lorem ipsum dolor sit amet"
                  value={room.description}
                  onChange={handleInputChange}
                  name="description"
                ></textarea>
              </div>
              <div className={classFormStyle.classStatus}>
                <div className={classFormStyle.titleAct}>Class Status</div>
                <div className={classFormStyle.statusBox}>
                  <select
                    className={classFormStyle.statusSelect}
                    value={room.roomStatus}
                    name="roomStatus"
                    id="roomStatus"
                    onChange={handleInputChange}
                  >
                    <option value="" disabled selected hidden>
                      Select Class Status
                    </option>
                    <option value="Open">Open</option>
                    <option value="Restricted">Restricted</option>
                  </select>
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
              <Button classStyle="buttonGreen" type="submit">
                Publish
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClassForm;
