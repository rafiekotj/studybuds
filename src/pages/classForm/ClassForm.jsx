import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import classFormStyle from "./classForm.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import { MdAddPhotoAlternate } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
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
          <div className={classFormStyle.formBox}>
            <div className={classFormStyle.classImg}>
              <div className={classFormStyle.titleAct}>Upload Photo</div>
              <div className={classFormStyle.uploadPlace}>
                <div className={classFormStyle.uploadBox}>
                  <label htmlFor="firstimg" className={classFormStyle.pictBox}>
                    <span>
                      <MdAddPhotoAlternate
                        className={classFormStyle.pictIcon}
                      />
                    </span>
                  </label>
                  <input
                    type="file"
                    name=""
                    id="firstimg"
                    className={classFormStyle.inputPict}
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
                type="text"
                className={classFormStyle.titleBox}
                placeholder="Input title, e.g. Yoga Class"
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
                  <span>Select Topic</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={classFormStyle.topicBoxOptions}
                  style={show ? { display: "block" } : { display: "none" }}
                >
                  <ul>
                    <li>Art</li>
                    <li>Biology</li>
                    <li>Business</li>
                    <li>Cooking</li>
                    <li>Fashion</li>
                    <li>Geography</li>
                    <li>Geology</li>
                    <li>Health</li>
                    <li>History</li>
                    <li>Hobbies</li>
                    <li>Literature</li>
                    <li>Love Class</li>
                    <li>Math</li>
                    <li>Physics</li>
                    <li>Research</li>
                    <li>Romance</li>
                    <li>Sport</li>
                    <li>Tech</li>
                  </ul>
                </div>
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
              />
            </div>
            <div className={classFormStyle.classDate}>
              <div className={classFormStyle.titleAct}>Date</div>
              <input type="date" className={classFormStyle.dateBox} />
            </div>
            <div className={classFormStyle.classTime}>
              <div className={classFormStyle.titleAct}>Time</div>
              <input type="time" className={classFormStyle.timeBox} />
              <p>to</p>
              <input type="time" className={classFormStyle.timeBox} />
            </div>
            <div className={classFormStyle.classDesc}>
              <div className={classFormStyle.titleAct}>Description</div>
              <textarea
                className={classFormStyle.descBox}
                placeholder="Input description, e.g.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris sed proin ut cursus bibendum non felis in. Malesuada dignissim nunc id pharetra eget semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris sed proin ut cursus bibendum non felis in. Malesuada dignissim nunc id pharetra eget semper.
                Lorem Ipsum:
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet"
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
                  <span>Select Class Status</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
                <div
                  className={classFormStyle.statusBoxOptions}
                  style={drop ? { display: "block" } : { display: "none" }}
                >
                  <ul>
                    <li>Open</li>
                    <li>Restricted</li>
                  </ul>
                </div>
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
