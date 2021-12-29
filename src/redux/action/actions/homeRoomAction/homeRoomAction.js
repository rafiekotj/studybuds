import {
  GET_HOME_ROOMS_SUCCESS,
  GET_HOME_TOPICS_SUCCESS,
} from "../../actionTypes/homeRoomTypes";
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

export const getHomeTopics = () => async (dispatch) => {
  try {
    const res = await HomeRoomService.getAllTopics();

    dispatch({
      type: GET_HOME_TOPICS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
