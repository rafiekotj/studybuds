import { GET_PROFILE_SUCCESS } from "../../actionTypes/profileTypes";
import ProfileService from "./profileService";

export const getProfile = () => async (dispatch) => {
  try {
    const res = await ProfileService.getProfile();

    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
