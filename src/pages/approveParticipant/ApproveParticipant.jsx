import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import approveParticipantStyle from "./approveParticipant.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import Button from "../../components/buttons/Button";
import Checkbox from "../../components/checkbox/checkbox";
import { BsSearch } from "react-icons/bs";

function ApproveParticipant() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // ↓↓↓ Select Function ↓↓↓
  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Jack Avery",
      active: false,
    },
    {
      id: 2,
      name: "Christina Smith",
      active: false,
    },
  ]);

  // ↓↓↓ Select Function ↓↓↓
  const [selectAll, setSelectAll] = useState(false);

  const handleCarClick = (id) => {
    const carsCopy = [...cars];
    const carToUpdate = carsCopy.find((car) => car.id === id);
    carToUpdate.active = !carToUpdate.active;

    if (!carToUpdate.active && selectAll) {
      handleSelectAll();
    }
    setCars(carsCopy);

    let flag = true;
    for (let i = 0; i < cars.length; i++) {
      flag = flag && cars[i].active;
    }
    if (flag && !selectAll) {
      handleSelectAll();
    }
  };

  const handleSelectAll = () => {
    setSelectAll((prevState) => !prevState);
    setCars(cars.map((car) => ({ ...car, active: !selectAll })));
  };
  // ↑↑↑ Select Function ↑↑↑

  // ↓↓↓ Handle Error ↓↓↓
  const handleErrorA = () => {
    alert("The approve participant feature is still on development process");
  };
  // ↑↑↑ Handle Error ↑↑↑

  return (
    <>
      <div className={approveParticipantStyle.approveParticipant}>
        <img
          src={groupDownloadLeft}
          alt="line"
          className={approveParticipantStyle.groupDownloadLeft}
        />
        <img
          src={ellipseRight}
          alt="ellipse"
          className={approveParticipantStyle.ellipseRight}
        />
        <img
          src={ellipseLeft}
          alt="ellipse"
          className={approveParticipantStyle.ellipseLeft}
        />
        <img
          src={groupDownloadRight}
          alt="ellipse"
          className={approveParticipantStyle.groupDownloadRight}
        />
        <div className={approveParticipantStyle.approveContainer}>
          <div className={approveParticipantStyle.approveContainerTitle}>
            Approve Participant
          </div>
          <div className={approveParticipantStyle.approveContainerLimit}>
            <div className={approveParticipantStyle.approveContainerLimitTitle}>
              Limit Participants (0/50)
            </div>
            <div className={approveParticipantStyle.approveContainerLimitBox}>
              <div
                className={
                  approveParticipantStyle.approveContainerLimitBoxHeader
                }
              >
                <div
                  className={
                    approveParticipantStyle.approveContainerLimitBoxHeaderSearch
                  }
                >
                  <BsSearch
                    className={
                      approveParticipantStyle.approveContainerLimitBoxHeaderSearchIcon
                    }
                  />
                  <input
                    type="text"
                    placeholder="Search participants"
                    className={
                      approveParticipantStyle.approveContainerLimitBoxHeaderSearchInput
                    }
                  />
                </div>
                <div
                  className={
                    approveParticipantStyle.approveContainerLimitBoxHeaderSelect
                  }
                >
                  <p>Select All</p>
                  <Checkbox
                    className={
                      approveParticipantStyle.approveContainerLimitBoxHeaderSelectCheckbox
                    }
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </div>
              </div>
              <div
                className={approveParticipantStyle.approveContainerLimitBoxLine}
              ></div>
              <div
                className={approveParticipantStyle.approveContainerLimitBoxBody}
              >
                {cars.map((car) => (
                  <div
                    className={
                      approveParticipantStyle.approveContainerLimitBoxBodyCheck
                    }
                    key={car.id}
                  >
                    <p>{car.name}</p>
                    <Checkbox
                      checked={car.active}
                      onChange={() => handleCarClick(car.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className={approveParticipantStyle.approveContainerLimitButton}
            >
              <Link to="">
                <Button classStyle="buttonWhite">Cancel</Button>
              </Link>
              <Link to="">
                <Button
                  onClick={() => {
                    handleErrorA();
                  }}
                  classStyle="buttonGreen"
                >
                  Approve
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApproveParticipant;
