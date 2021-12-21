import React, { useState, useRef, useEffect } from "react";
import navbarstyle from "./navbar.module.scss";
import brandLogo from "../../assets/img/brandLogo.png";
import Button from "../buttons/Button";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import useOutsideClick from "../useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import {
  getRooms,
  getTopics,
} from "../../redux/action/actions/studyRoomAction/studyRoomAction";

function Navbar() {
  let i = 0;
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [topic, setTopic] = useState("");

  // Show hide dropdown browse
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("All Status");

  const handleShow = () => {
    setShow(!show);
  };
  // End Show hide dropdown browse

  // Show hide dropdown notification
  const [showNotif, setShowNotif] = useState(false);

  const handleShowNotif = () => {
    setShowNotif(!showNotif);
  };

  // End Show hide dropdown notification

  // Outside Click Handler Notification
  const ref = useRef();

  useOutsideClick(ref, () => {
    setShowNotif(false);
  });
  // End Outside Click Handler Notification

  // Show hide dropdown profile
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(!showProfile);
  };

  // End Show hide dropdown profile

  // Fetch Data
  const studyRooms = useSelector((store) => {
    return store.studyRoomReducer;
  });

  useEffect(() => {
    dispatch(getTopics());
  }, []);
  // End Fetch Data

  const handleCategory = async (data) => {
    await dispatch(
      getRooms({
        slug: `?page=${1}&limit=${8}${
          status && status !== "All Status" ? `&status=${status}` : ""
        }&top=${data.id}`,
      })
    );

    navigate("/study-room");
    // setTopic(data.id);
    // navigate("/study-room", { state: topic });
    setShow(!show);
    setStatus("All Status");
    setTopic("");
  };

  const handleOnInputSearch = (value) => {
    setSearchInput(value);
  };

  const handleEnter = (e) => {
    e.keyCode === 13
      ? searchInput.length > 2
        ? navigate("/study-room", { state: searchInput })
        : alert(
            "The description you submitted was too short, please describe more (min. 3 char)"
          )
      : console.log("");
  };

  // Loop Categories

  const loopNav = () => {
    const elements = [];

    for (let i = 0; i < Math.ceil(studyRooms.topics.length / 8); i++) {
      elements.push(
        <div>
          {studyRooms.topics.slice(i * 8, i * 8 + 8).map((data) => (
            <Link
              className={navbarstyle.links}
              onClick={() => handleCategory(data)}
              to="#"
            >
              <li key={data.id}>{data.topic}</li>
            </Link>
          ))}
        </div>
      );
    }

    return <>{elements.map((element) => element)}</>;
  };
  // End Loop Categories

  return (
    <nav
      className={`${navbarstyle.navbar}   ${
        location.pathname === "/register" || location.pathname === "/login"
          ? navbarstyle.navbarNotShow
          : navbarstyle.navbarShow
      }`}
    >
      <Link to="/">
        <img
          src={brandLogo}
          alt="Brand Logo"
          className={navbarstyle.navbarLogo}
        />
      </Link>
      <div className={navbarstyle.navbarBrowse}>
        <div
          className={navbarstyle.navbarBrowseText}
          onClick={() => {
            handleShow();
          }}
        >
          <p>Browse</p>
          <IoIosArrowDown className={navbarstyle.navbarBrowseTextArrow} />
        </div>
        <div
          className={navbarstyle.navbarBrowseDropdown}
          style={
            show && status !== "" ? { display: "flex" } : { display: "none" }
          }
        >
          <ul className={navbarstyle.navbarBrowseDropdownStatus}>
            <li
              onClick={() => setStatus("All Status")}
              style={
                status === "All Status"
                  ? { backgroundColor: "#c1e5c0" }
                  : { backgroundColor: "inherit" }
              }
            >
              All Status
            </li>
            <li
              onClick={() => setStatus("Open")}
              style={
                status === "Open"
                  ? { backgroundColor: "#c1e5c0" }
                  : { backgroundColor: "inherit" }
              }
            >
              Status: Open
            </li>
            <li
              onClick={() => setStatus("Restricted")}
              style={
                status === "Restricted"
                  ? { backgroundColor: "#c1e5c0" }
                  : { backgroundColor: "inherit" }
              }
            >
              Status: Restricted
            </li>
          </ul>
          <ul className={navbarstyle.navbarBrowseDropdownCategory}>
            {loopNav()}
          </ul>
        </div>
      </div>
      <div className={navbarstyle.navbarSearch}>
        <BsSearch className={navbarstyle.navbarSearchIcon} />
        <input
          type="text"
          placeholder="Search study room"
          className={navbarstyle.navbarSearchInput}
          value={searchInput}
          onChange={(e) => handleOnInputSearch(e.target.value)}
          onKeyUp={(e) => handleEnter(e)}
        />
      </div>
      <ul className={navbarstyle.navbarMenu}>
        <li>
          <Link
            to="/"
            className={navbarstyle.navbarMenuDirect}
            style={
              location.pathname === "/"
                ? { color: "#279B24" }
                : { color: "#9FA3A0" }
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/study-room"
            className={navbarstyle.navbarMenuDirect}
            style={
              location.pathname === "/study-room"
                ? { color: "#279B24" }
                : { color: "#9FA3A0" }
            }
          >
            Study Room
          </Link>
        </li>
        <li>
          <Link
            to="/class"
            className={navbarstyle.navbarMenuDirect}
            style={
              location.pathname === "/class"
                ? { color: "#279B24" }
                : { color: "#9FA3A0" }
            }
          >
            My Class
          </Link>
        </li>
      </ul>
      <div className={navbarstyle.navbarButtons}>
        <Link to="/login" className={navbarstyle.navbarButtonLink}>
          <Button classStyle="buttonWhite">Sign In</Button>
        </Link>
        <Link to="/register" className={navbarstyle.navbarButtonLink}>
          <Button classStyle="buttonGreen">Sign Up</Button>
        </Link>
      </div>
      <div
        className={navbarstyle.navbarNotif}
        onClick={() => {
          handleShowNotif();
        }}
        ref={ref}
      >
        <RiNotification2Line className={navbarstyle.navbarNotifIcon} />
      </div>
      <div
        className={navbarstyle.navbarNotifItems}
        style={showNotif ? { display: "block" } : { display: "none" }}
      >
        <b>Notification</b>
        <ul>
          <li>
            <div className={navbarstyle.navbarNotifItemsContainer}>
              <p>
                You are now can join class <strong>Advanced Biology</strong> by
                Dr. Kusanagi
              </p>
              <p className={navbarstyle.navbarNotifItemsDate}>Today</p>
            </div>
            <div className={navbarstyle.navbarNotifItemsCircle}></div>
          </li>
          <li>
            <div className={navbarstyle.navbarNotifItemsContainer}>
              <p>
                Your class is being reviewed by host, you can check your class
                in My Class menu
              </p>
              <p className={navbarstyle.navbarNotifItemsDate}>
                Friday, 8 October 2021 21:32
              </p>
            </div>
            <div className={navbarstyle.navbarNotifItemsCircle}></div>
          </li>
        </ul>
      </div>
      <div
        className={navbarstyle.navbarProfile}
        onClick={() => handleShowProfile()}
      >
        <div className={navbarstyle.navbarProfileAvatarContainer}>
          <img
            src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
            alt="avatar"
            className={navbarstyle.navbarProfileAvatar}
          />
        </div>
        <p>name</p>
      </div>
      <div
        className={navbarstyle.navbarProfileDropdown}
        style={showProfile ? { display: "block" } : { display: "none" }}
      >
        <div className={navbarstyle.navbarProfileDropdownTop}>
          <b>name</b>
          <p>email@mail.com</p>
        </div>
        <ul>
          <li>Notification</li>
          <li>Profile</li>
          <li>History</li>
          <li>Change Password</li>
          <li>Sign Out</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
