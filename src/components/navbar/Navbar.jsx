import React from "react";
import navbarstyle from "./navbar.module.scss";
import brandLogo from "../../assets/img/brandLogo.png";
import ButtonGreen from "../buttons/ButtonGreen";
import ButtonWhite from "../buttons/ButtonWhite";
import { IoIosArrowDown } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { RiNotification2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
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
        <p>Browse</p>
        <IoIosArrowDown className={navbarstyle.navbarBrowseArrow} />
      </div>
      <div></div>
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
