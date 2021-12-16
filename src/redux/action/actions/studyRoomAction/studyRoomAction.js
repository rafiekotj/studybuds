import { GET_ROOMS_SUCCESS } from "../../actionTypes/studyRoomTypes";
import StudyRoomService from "./studyRoomService";

export const getRooms = (slug) => async (dispatch) => {
  try {
    const res = await StudyRoomService.getAll(slug);

    dispatch({
      type: GET_ROOMS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
