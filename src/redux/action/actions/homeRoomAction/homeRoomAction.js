import { GET_HOME_ROOMS_SUCCESS } from "../../actionTypes/homeRoomTypes";
import HomeRoomService from "./homeRoomService";

export const getHomeRooms = (slug) => async (dispatch) => {
  try {
    const res = await HomeRoomService.getAll(slug);

    dispatch({
      type: GET_HOME_ROOMS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
