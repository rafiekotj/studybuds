import React, { useState } from "react";
import navbarstyle from "./navbar.module.scss";
import brandLogo from "../../assets/img/brandLogo.png";
import ButtonGreen from "../buttons/ButtonGreen";
import ButtonWhite from "../buttons/ButtonWhite";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

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
  // Show hide dropdown
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("All Status");

  const handleShow = () => {
    setShow(!show);
  };

  // End Show hide dropdown

  return (
    <nav className={navbarstyle.navbar}>
      <Link to="#">
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
        <li>Home</li>
        <li>Study Room</li>
        <li>My Class</li>
      </ul>
      <div className={navbarstyle.navbarButtons}>
        <ButtonWhite name="ㅤ" />
        <ButtonGreen name="ㅤ" />
      </div>
      <div className={navbarstyle.navbarNotif}>
        <RiNotification2Line className={navbarstyle.navbarNotifIcon} />
      </div>
      <div className={navbarstyle.navbarProfile}>
        <div className={navbarstyle.navbarProfileAvatarContainer}>
          <img
            src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80`}
            alt="avatar"
            className={navbarstyle.navbarProfileAvatar}
          />
        </div>
        <p>Ronaldo Jr.</p>
      </div>
    </nav>
  );
}

export default Navbar;
