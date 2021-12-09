import React from "react";
import hero from "../../assets/img/hero.svg";
// import groupDownloadLeft from "../../assets/img/groupDownloadLeft.svg";
// import ellipseRight from "../../assets/img/ellipseRight.svg";
// import ellipseLeft from "../../assets/img/ellipseLeft.svg";
// import groupDownloadRight from "../../assets/img/groupDownloadRight.svg";
import logo from "../../assets/img/logo.png";
import registerStyle from "./register.module.scss";
import Button from "../../components/buttons/Button";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Register() {
  // const successRegister = () => {
  //   localStorage.setItem("fakeToken", "this is token");
  // };
  return (
    <div className={registerStyle.registerContainer}>
      <div className={registerStyle.imageLeft}>
        <img className={registerStyle.imageLeftHero} src={hero} alt="hero" />
        <div className={registerStyle.imageLeftLoad}></div>
        <div className={registerStyle.imageRightLoad}></div>

        <img className={registerStyle.imageLeftLogo} src={logo} alt="logo" />
      </div>
      <section className={registerStyle.register}>
        <h1>Sign up</h1>
        <div className={registerStyle.registerButtonContainer}>
          <Button classStyle="buttonSosmed">
            <span className={registerStyle.registerButton}>
              <FcGoogle />
            </span>
            Google
          </Button>
          <Button classStyle="buttonSosmed">
            <span className={registerStyle.registerButton}>
              <AiFillFacebook />
            </span>
            Facebook
          </Button>
        </div>
        <form className={registerStyle.registerForm}>
          <div>
            <label className={registerStyle.registerFormLabel} htmlFor="name">
              Full Name
            </label>

            <input
              className={registerStyle.registerFormInput}
              type="text"
              name="name"
              placeholder="Input Full Name"
            />
          </div>
          <div>
            <label className={registerStyle.registerFormLabel} htmlFor="email">
              Email
            </label>

            <input
              className={registerStyle.registerFormInput}
              type="email"
              name="email"
              placeholder="Input Email"
            />
          </div>
          <div>
            <label
              className={registerStyle.registerFormLabel}
              htmlFor="password"
            >
              Password
            </label>

            <input
              className={registerStyle.registerFormInput}
              type="password"
              name="password"
              placeholder="Input Password"
            />
          </div>
          <div>
            <label
              className={registerStyle.registerFormLabel}
              htmlFor="password"
            >
              Confirm Password
            </label>
            <input
              className={registerStyle.registerFormInput}
              type="password"
              name="password"
              placeholder="Input Password"
            />
          </div>

          <Button classStyle="buttonGreen">Sign Up</Button>
          <p className={registerStyle.registerFormLink}>
            Already have an Account?{" "}
            <Link to="/" className={registerStyle.registerLink}>
              Sign in here
            </Link>
          </p>
        </form>
      </section>
    </div>
  );
}
