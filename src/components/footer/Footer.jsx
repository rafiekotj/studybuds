import React from "react";
import footerstyle from "./footer.module.scss";
import googlePlayLogo from "../../assets/img/googlePlayLogo.svg";
import appStoreLogo from "../../assets/img/appStoreLogo.svg";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight.svg";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer
      className={`${footerstyle.footer}  ${`
    ${
      location.pathname === "/register" || location.pathname === "/login"
        ? footerstyle.footerNotShow
        : footerstyle.footerShow
    }`}`}
    >
      <div className={footerstyle.downloadContainer}>
        <img
          src={groupDownloadLeft}
          alt="line"
          className={footerstyle.groupDownloadLeft}
        />
        <img
          src={groupDownloadRight}
          alt="line"
          className={footerstyle.groupDownloadRight}
        />
        <div className={footerstyle.downloadHead}>
          <p className={footerstyle.downloadTitle}>Download Studybuds Now</p>
          <p className={footerstyle.downloadParagraph}>
            Studybuds now available on every platform, lets study together with
            studybuds!
          </p>
          <div className={footerstyle.logoContainer}>
            <img
              src={googlePlayLogo}
              alt="google play"
              className={footerstyle.googlePlayLogo}
            />
            <img
              src={appStoreLogo}
              alt="app store"
              className={footerstyle.appStoreLogo}
            />
          </div>
        </div>
      </div>
      <div className={footerstyle.detailContainer}>
        <div className={footerstyle.firstSide}>
          <img src={logo} alt="logo" className={footerstyle.brandLogo} />
          <p className={footerstyle.brandParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est in
            neque aliquet vitae turpis amet, urna netus sed. Eu semper eu neque,
            massa pharetra orci fusce ac.
          </p>
          <div className={footerstyle.iconsContainer}>
            <div className={footerstyle.iconContainer}>
              <ImFacebook className={footerstyle.icon} />
            </div>
            <div className={footerstyle.iconContainer}>
              <BsInstagram className={footerstyle.icon} />
            </div>
            <div className={footerstyle.iconContainer}>
              <ImTwitter className={footerstyle.icon} />
            </div>
            <div className={footerstyle.iconContainer}>
              <ImYoutube className={footerstyle.icon} />
            </div>
          </div>
        </div>
        <div className={footerstyle.secondSide}>
          <p className={footerstyle.linkHead}>Links</p>
          <ul className={footerstyle.linkMenu}>
            <li>
              <Link to="" className={footerstyle.linkList}>
                Home
              </Link>
            </li>
            <li>
              <Link to="" className={footerstyle.linkList}>
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className={footerstyle.thirdSide}>
          <p className={footerstyle.contactHead}>Contact Us</p>
          <p className={footerstyle.contactList}>
            Indonesia
            <br />
            Jl. Planet Namek No. 123, Surabaya
            <br />
            Telp : 083849420146
            <br />
            Email : vegeta@dragonball.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
