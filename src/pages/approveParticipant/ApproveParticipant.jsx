import React, { useState, useEffect } from "react";
import approveParticipantStyle from "./approveParticipant.module.scss";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight2.svg";
import { FiCheck } from "react-icons/fi";
import { BsSearch } from "react-icons/bs";
import Button from "../../components/buttons/Button";

function ApproveParticipant() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Yugi Muto",
      completed: false,
    },
    {
      id: 2,
      title: "Nobitakun",
      completed: false,
    },
    {
      id: 3,
      title: "Nobitakun Desu Ne",
      completed: false,
    },
    {
      id: 4,
      title: "Doraemon to Nani",
      completed: false,
    },
    {
      id: 5,
      title: "Sugoi Desu",
      completed: false,
    },
    {
      id: 6,
      title: "Yugi Muto",
      completed: false,
    },
    {
      id: 7,
      title: "Nobitakun",
      completed: false,
    },
    {
      id: 8,
      title: "Nobitakun Desu Ne",
      completed: false,
    },
    {
      id: 9,
      title: "Nobitakun",
      completed: false,
    },
    {
      id: 10,
      title: "Doraemon to Nani",
      completed: false,
    },
    {
      id: 11,
      title: "Sugoi Desu",
      completed: false,
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
          <div className={approveParticipantStyle.approveTitle}>
            <p>Approve Participant</p>
          </div>
          <div className={approveParticipantStyle.limitContainer}>
            <div className={approveParticipantStyle.limitTitle}>
              <p>Limit Participants (4/50)</p>
            </div>

            <div className={approveParticipantStyle.limitBox}>
              <div className={approveParticipantStyle.limitHeader}>
                <div className={approveParticipantStyle.participantSearch}>
                  <BsSearch
                    className={approveParticipantStyle.participantSearchIcon}
                  />
                  <input
                    type="text"
                    placeholder="Search study room"
                    className={approveParticipantStyle.participantSearchInput}
                  />
                </div>
                <div className={approveParticipantStyle.participantSelAll}>
                  <div className={approveParticipantStyle.checkboxContainer}>
                    <h3>Select All</h3>
                    <div className={approveParticipantStyle.customCheckbox}>
                      <input
                        onChange={() => {
                          setSelectAll(!selectAll);
                          setTodos([
                            ...todos.map((item) => ({
                              ...item,
                              completed: !item.completed,
                            })),
                          ]);
                        }}
                        type="checkbox"
                        id="check"
                        className="check"
                      />
                      <label
                        htmlFor="check"
                        className={
                          selectAll
                            ? approveParticipantStyle.checked
                            : undefined
                        }
                      >
                        <FiCheck className={approveParticipantStyle.icon} />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={approveParticipantStyle.limitLine}></div>
              <div className={approveParticipantStyle.limitBody}>
                {todos.map((todo) => (
                  <div className={approveParticipantStyle.checkboxContainer}>
                    <h3>{todo.title}</h3>
                    <div
                      key={todo.id}
                      className={approveParticipantStyle.customCheckbox}
                    >
                      <input
                        checked={todo.completed}
                        onChange={() => {
                          console.log(todo.id);
                          setTodos([
                            ...todos.map((item) =>
                              item.id === todo.id
                                ? { ...item, completed: !item.completed }
                                : item
                            ),
                          ]);
                        }}
                        type="checkbox"
                        id={`check${todo.id}`}
                        className="check"
                      />
                      <label
                        htmlFor={`check${todo.id}`}
                        className={
                          todo.completed
                            ? approveParticipantStyle.checked
                            : undefined
                        }
                      >
                        <FiCheck className="icon" />
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={approveParticipantStyle.buttonBox}>
              <Button classStyle="buttonWhite">Cancel</Button>
              <Button classStyle="buttonGreen">Approve</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApproveParticipant;
