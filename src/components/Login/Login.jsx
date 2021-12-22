import React, { useEffect, useState } from "react";
import hero from "../../assets/img/hero.svg";
import logo from "../../assets/img/logo.png";
import loginStyle from "./Login.module.scss";
import Button from "../../components/buttons/Button";
import { AiFillFacebook } from "react-icons/ai";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/actions/authAction/authAction";
import Loader from "../../components/loader/Loader";

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(
      login(email, password)
      // .then(() => {
      //   navigate("/");
      //   window.location.reload();
      // })
      // .catch(() => {
      //   setLoading(false);
      // })
    );
    // navigate("/");
  };

  if (isLoggedIn) {
    navigate("/");
  }
  // Start at top of page
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // End Start at top of page

  // Password shown
  const handlePasswordShown = (e) => {
    e.preventDefault();
    setPasswordShown(!passwordShown);
  };
  // End Password shown

  return (
    <div className={loginStyle.loginContainer}>
      <div className={loginStyle.imageLeft}>
        <img className={loginStyle.imageLeftHero} src={hero} alt="hero" />
        <div className={loginStyle.imageLeftLoad}></div>
        <div className={loginStyle.imageRightLoad}></div>
        <Link to="/">
          <img className={loginStyle.imageLeftLogo} src={logo} alt="logo" />
        </Link>
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
        <div className={loginStyle.loginOr}>
          <span></span> <p>Or</p> <span></span>
        </div>
        <form className={loginStyle.loginForm} onSubmit={handleLogin}>
          <div>
            <label className={loginStyle.loginFormLabel} htmlFor="email">
              Email
            </label>
            <input
              className={loginStyle.loginFormInput}
              type="email"
              name="email"
              placeholder="Input Email"
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div>
            <label className={loginStyle.loginFormLabel} htmlFor="password">
              Password
            </label>
            <div className={loginStyle.loginFormInput}>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                placeholder="Input Password"
                value={password}
                onChange={onChangePassword}
              />
              <button
                className={loginStyle.eye}
                onClick={(e) => handlePasswordShown(e)}
              >
                {passwordShown ? <FiEye /> : <FiEyeOff />}
              </button>
            </div>
          </div>
          <Button classStyle="buttonGreen" type="submit">
            Sign In
          </Button>
          <p className={loginStyle.loginFormLink}>
            Already have an Account?{" "}
            <Link to="/register" className={loginStyle.loginLink}>
              Sign up here
            </Link>
          </p>
        </form>
        {loading && <Loader />}
      </section>
    </div>
  );
}

export default Login;
