import React, { useState } from "react";
import hero from "../../assets/img/hero.svg";
import logo from "../../assets/img/logo.png";
import registerStyle from "./register.module.scss";
import Button from "../../components/buttons/Button";
import { AiFillFacebook } from "react-icons/ai";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/action/actions/authAction/authAction";
import Loader from "../../components/loader/Loader";

export default function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const message = useSelector((state) => state.messagesReducer);
  const [loading, setLoading] = useState(false);
  const confirmPasswordMessage =
    "Your password and confirmation password do not match";

  console.log(message.message);
  // Password shown
  const handlePasswordShown = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  // End Password shown

  // Password shown
  const handleConfirmPasswordShown = (e) => {
    e.preventDefault();
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  // End Password shown

  // on change
  const onChangeFullName = (e) => {
    const fullName = e.target.value;
    setFullName(fullName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    setConfirmPassword(confirmPassword);
  };
  // End on change

  // handle register
  const handleRegister = (e) => {
    e.preventDefault();

    setLoading(true);

    if (confirmPassword !== password) {
      setSuccessful(false);
    }

    if (confirmPassword === password) {
      dispatch(register(fullName, email, password))
        .then(() => {
          console.log("then", message);
          if (
            message?.message?.data?.message === "Success create an account!"
          ) {
            navigate("/login");
            // window.location.reload();
          }
        })
        .catch(() => {
          console.log("catch");
          setLoading(false);
        });
    }
  };
  // End handle register
  return (
    <div className={registerStyle.registerContainer}>
      <div className={registerStyle.imageLeft}>
        <img className={registerStyle.imageLeftHero} src={hero} alt="hero" />
        <div className={registerStyle.imageLeftLoad}></div>
        <div className={registerStyle.imageRightLoad}></div>
        <Link to="/">
          <img className={registerStyle.imageLeftLogo} src={logo} alt="logo" />
        </Link>
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
        <form className={registerStyle.registerForm} onSubmit={handleRegister}>
          <div>
            <label className={registerStyle.registerFormLabel} htmlFor="name">
              Full Name
            </label>
            <input
              className={registerStyle.registerFormInput}
              type="text"
              name="name"
              placeholder="Input Full Name"
              value={fullName}
              onChange={onChangeFullName}
            />
            <p className={registerStyle.errorMessage}>
              {message.message?.success === false
                ? message.message.errors.includes("Fullname must be filled")
                  ? "Fullname must be filled"
                  : message.message.errors.includes(
                      "Fullname minimum 5 characters"
                    )
                  ? "Fullname minimum 5 characters"
                  : ""
                : ""}
            </p>
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
              value={email}
              onChange={onChangeEmail}
            />
            <p className={registerStyle.errorMessage}>
              {message.message?.success === false
                ? message.message.errors.includes(
                    "Please enter the correct Email address"
                  )
                  ? "Please enter the correct Email address"
                  : ""
                : ""}
              {message.message?.message?.includes("Email already registered")
                ? "Email already registered"
                : ""}
            </p>
          </div>
          <div>
            <label
              className={registerStyle.registerFormLabel}
              htmlFor="password"
            >
              Password
            </label>
            <div className={registerStyle.registerFormInput}>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Input Password"
                value={password}
                onChange={onChangePassword}
              />

              <button
                className={registerStyle.eye}
                onClick={(e) => handlePasswordShown(e)}
                type="button"
              >
                {passwordShown ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            <p className={registerStyle.errorMessage}>
              {message.message?.success === false
                ? message.message.errors.includes(
                    "Please fill in the password with a length of 8-12 characters, consisting of a combination of uppercase letters, lowercase letters, and number"
                  )
                  ? "Please fill in the password with a length of 8-12 characters, consisting of a combination of uppercase letters, lowercase letters, and number"
                  : ""
                : ""}
            </p>
          </div>
          <div>
            <label
              className={registerStyle.registerFormLabel}
              htmlFor="password"
            >
              Confirm Password
            </label>
            <div className={registerStyle.registerFormInput}>
              <input
                type={confirmPasswordShown ? "text" : "password"}
                name="password"
                placeholder="Input Password"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
              />
              <button
                className={registerStyle.eye}
                onClick={(e) => handleConfirmPasswordShown(e)}
                type="button"
              >
                {confirmPasswordShown ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
            <p className={registerStyle.errorMessage}>
              {confirmPassword !== password ? confirmPasswordMessage : ""}
            </p>
          </div>
          <Button classStyle="buttonGreen" type="submit">
            Sign Up
          </Button>
          <p className={registerStyle.registerFormLink}>
            Already have an Account?{" "}
            <Link to="/" className={registerStyle.registerLink}>
              Sign in here
            </Link>
          </p>
        </form>
        {/* {loading && <Loader />} */}
      </section>
    </div>
  );
}
