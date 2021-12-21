import { POST_FORM_SUCCESS } from "../../actionTypes/formTypes";
import FormService from "./formService";

export const createForm = () => async (dispatch) => {
  try {
    const res = await FormService.create();

    dispatch({
      type: POST_FORM_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
