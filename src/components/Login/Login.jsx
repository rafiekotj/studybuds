import React from "react";
import hero from "../../assets/img/hero.svg";
import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
import ellipseRight from "../../assets/img/ellipseRight.svg";
import ellipseLeft from "../../assets/img/ellipseLeft.svg";
import groupDownloadRight from "../../assets/img/groupDownloadRight.svg";
import logo from "../../assets/img/logo.png";
import loginStyle from "./Login.module.scss";
import Button from "../../components/buttons/Button";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Login() {
  const successLogin = () => {
    localStorage.setItem("fakeToken", "this is token");
  };
  return (
    <div className={loginStyle.loginContainer}>
      <div className={loginStyle.imageLeft}>
        <img className={loginStyle.imageLeftHero} src={hero} alt="hero" />
        <div className={loginStyle.imageLeftLoad}></div>
        <div className={loginStyle.imageRightLoad}></div>
        <img className={loginStyle.imageLeftLogo} src={logo} alt="logo" />
      </div>
      <section className={loginStyle.login}>
        <h1>Sign In</h1>
        <div className={loginStyle.loginButtonContainer}>
          <Button classStyle="buttonSosmed">
            <span className={loginStyle.loginButton}>
              <FcGoogle />
            </span>
            Google
          </Button>
          <Button classStyle="buttonSosmed">
            <span className={loginStyle.loginButton}>
              <AiFillFacebook />
            </span>
            Facebook
          </Button>
        </div>
        <form className={loginStyle.loginForm}>
          <div>
            <label className={loginStyle.loginFormLabel} htmlFor="email">
              Email
            </label>
            <input
              className={loginStyle.loginFormInput}
              type="email"
              name="email"
              placeholder="Input Email"
            />
          </div>
          <div>
            <label className={loginStyle.loginFormLabel} htmlFor="password">
              Password
            </label>
            <input
              className={loginStyle.loginFormInput}
              type="password"
              name="password"
              placeholder="Input Password"
            />
          </div>
          <Button classStyle="buttonGreen">Sign In</Button>
          <p className={loginStyle.loginFormLink}>
            Already have an Account?{" "}
            <Link to="/" className={loginStyle.loginLink}>
              Sign up here
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
