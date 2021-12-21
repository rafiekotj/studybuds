import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import approveParticipantStyle from "./approveParticipant.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import { BsSearch } from "react-icons/bs";
import Button from "../../components/buttons/Button";
import Checkbox from "../../components/checkbox/checkbox";

function ApproveParticipant() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const [cars, setCars] = useState([
    {
      id: 1,
      name: "Yugi Muto",
      active: false,
    },
    {
      id: 2,
      name: "Nobitakun",
      active: false,
    },
    {
      id: 3,
      name: "Nobitakun Desu Ne",
      active: false,
    },
    {
      id: 4,
      name: "Doraemon to Nani",
      active: false,
    },
    {
      id: 5,
      name: "Sugoi Desu",
      active: false,
    },
    {
      id: 6,
      name: "Yugi Muto",
      active: false,
    },
    {
      id: 7,
      name: "Nobitakun",
      active: false,
    },
    {
      id: 8,
      name: "Nobitakun Desu Ne",
      active: false,
    },
    {
      id: 9,
      name: "Nobitakun",
      active: false,
    },
    {
      id: 10,
      name: "Doraemon to Nani",
      active: false,
    },
    {
      id: 11,
      name: "Sugoi Desu",
      active: false,
    },
    {
      id: 12,
      name: "Nobitakun Desu Ne",
      active: false,
    },
    {
      id: 13,
      name: "Nobitakun",
      active: false,
    },
    {
      id: 14,
      name: "Doraemon to Nani",
      active: false,
    },
    {
      id: 15,
      name: "Sugoi Desu",
      active: false,
    },
  ]);

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
              <Link to="/host">
                <Button classStyle="buttonWhite">Cancel</Button>
              </Link>
              <Link to="/host">
                <Button classStyle="buttonGreen">Approve</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApproveParticipant;
