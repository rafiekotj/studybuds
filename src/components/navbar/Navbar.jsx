import React, { useState, useRef } from "react";
import navbarstyle from "./navbar.module.scss";
import brandLogo from "../../assets/img/brandLogo.png";
import Button from "../buttons/Button";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useOutsideClick from "../useOutsideClick";

// Loop Categories
const categories = [
  {
    link: "#",
    category: "Art",
  },
  {
    link: "#",
    category: "Biology",
  },
  {
    link: "#",
    category: "Business",
  },
  {
    link: "#",
    category: "Cooking",
  },
  {
    link: "#",
    category: "Fashion",
  },
  {
    link: "#",
    category: "Geography",
  },
  {
    link: "#",
    category: "Geology",
  },
  {
    link: "#",
    category: "Health",
  },
  {
    link: "#",
    category: "History",
  },
  {
    link: "#",
    category: "Hobbies",
  },
  {
    link: "#",
    category: "Literature",
  },
  {
    link: "#",
    category: "Love Class",
  },
  {
    link: "#",
    category: "Math",
  },
  {
    link: "#",
    category: "Physics",
  },
  {
    link: "#",
    category: "Research",
  },
  {
    link: "#",
    category: "Romance",
  },
  {
    link: "#",
    category: "Sport",
  },
  {
    link: "#",
    category: "Tech",
  },
  {
    link: "#",
    category: "Uncategorized",
  },
];

const loopNav = () => {
  const elements = [];

  for (let i = 0; i < Math.ceil(categories.length / 8); i++) {
    elements.push(
      <div>
        {categories.slice(i * 8, i * 8 + 8).map((category, key) => (
          <li key={key}>
            <Link className={navbarstyle.links} to={category.link}>
              {category.category}
            </Link>
          </li>
        ))}
      </div>
    );
  }

  return <>{elements.map((element) => element)}</>;
};
// End Loop Categories

function Navbar() {
  const location = useLocation();

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
