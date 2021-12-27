import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "../../actionTypes/authTypes";

import AuthService from "./authService";

export const register = (fullname, email, password) => (dispatch) => {
  return AuthService.register(fullname, email, password).then(
    (res) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: res,
      });

      return Promise.resolve(res.data.status);
    }
    // (err) => {
    //   console.log("fail", err);
    //   const message =
    //     (err.res && err.res.data && err.res.data.message) ||
    //     err.message ||
    //     err.toString();

    //   dispatch({
    //     type: REGISTER_FAIL,
    //   });

    //   dispatch({
    //     type: SET_MESSAGE,
    //     payload: message,
    //   });

    //   return Promise.reject();
    // }
  );
};

export const login = (email, password) => (dispatch) => {
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (err) => {
      // const message =
      //   (error.res &&
      //     error.res.data &&
      //     error.res.data.message) ||
      //   error.message ||
      //   error.toString();
      console.log(err);

      dispatch({
        type: LOGIN_FAIL,
      });

      //   dispatch({
      //     type: SET_MESSAGE,
      //     payload: message,
      //   });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};
