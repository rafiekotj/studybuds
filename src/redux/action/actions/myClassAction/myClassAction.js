import {
  GET_CREATED_ROOM_SUCCESS,
  GET_JOINED_ROOM_SUCCESS,
} from "../../actionTypes/myClassTypes";
import MyClassService from "./myClassService";

export const getAllCreatedRooms = (id) => async (dispatch) => {
  try {
    const res = await MyClassService.getAllCreated(id);
    // console.log(res.data.data.rows);

    dispatch({
      type: GET_CREATED_ROOM_SUCCESS,
      payload: res.data.data.rows,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getAllJoinedRooms = (id) => async (dispatch) => {
  try {
    const res = await MyClassService.getAllJoined(id);
    console.log(res.data);

    dispatch({
      type: GET_JOINED_ROOM_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};
