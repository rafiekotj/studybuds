//       imageClass: data.imageClass,
//       title: data.title,
//       limitParticipant: data.limitParticipant,
//       date: data.date,
//       startTime: data.startTime,
//       endTime: data.endTime,
//       description: data.description,
//       roomStatus: data.roomStatus,

import axios from "axios";
import { CREATE_FORM } from "../actionTypes/actionTypes";

const API_URL = process.env.REACT_APP_BASE_API_URL;

export const createForm = (data) => {
  return (dispatch) => {
    dispatch({ type: `${CREATE_FORM}_LOADING` });

    axios({
      method: `POST`,
      url: `${API_URL}myclass/createdclass`,
      data,
    })
      .then(() => {
        dispatch({
          type: `${CREATE_FORM}_FULFILLED`,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: `${CREATE_FORM}_ERROR`,
          error: error.message,
        });
      });
  };
};
