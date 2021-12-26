import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import classFormStyle from "./classFormEdit.module.scss";
import Button from "../../components/buttons/Button";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import { MdAddPhotoAlternate } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import moment from "moment";
import {
  getDetailRoom,
  updateForm,
  getTopics,
} from "../../redux/action/actions/formEditAction/formEditAction";
import FormEditService from "../../redux/action/actions/formEditAction/formEditService";

function ClassFormEdit() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const dispatch = useDispatch();

  const [img, setImg] = useState();

  const [startDate, setStartDate] = useState(null);

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

  useEffect(() => {
    dispatch(getTopics());
  }, []);

  const studyRoom = useSelector((store) => {
    return store.formEditReducer;
  });

  console.log(studyRoom);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getDetailRoom(room));
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
                      htmlFor="firstImg"
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
                      id="firstImg"
                      className={classFormStyle.formBoxImgUploadBoxInput}
                      name="imageClass"
                      onChange={(e) => {
                        const imgUrl = URL.createObjectURL(e.target.files[0]);
                        console.log(e.target.files[0]);
                        setImg(imgUrl);
                        setRoom({ ...room, imageClass: e.target.files[0] });
                      }}
                    />
                  </div>
                  {img && (
                    <div className={classFormStyle.formBoxImgUploadPreview}>
                      <img src={img} alt="preview" width="112" height="112" />
                    </div>
                  )}
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
                    {studyRoom.topics.map((data) => (
                      <option value={data.id}>{data.topic}</option>
                    ))}
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
                    <option
                      className={classFormStyle.statusOption}
                      value="Open"
                    >
                      Open
                    </option>
                    <option
                      className={classFormStyle.statusOption}
                      value="Restricted"
                    >
                      Restricted
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className={classFormStyle.buttonBox}>
              <Button classStyle="buttonWhite">
                <Link to="/class" className={classFormStyle.cancelBtn}>
                  Cancel
                </Link>
              </Button>
              <Button classStyle="buttonWhite">Save as Draft</Button>
              <Button classStyle="buttonGreen" type="submit">
                Publish
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ClassFormEdit;
