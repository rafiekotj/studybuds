import {
  GET_DETAIL_ROOM_SUCCESS,
  GET_DELETE_ROOM_SUCCESS,
  POST_CHOOSE_CLASS_SUCCESS,
} from "../../actionTypes/detailRoomTypes";
import DetailRoomService from "./detailRoomService";

export const getDetailRoom = (id) => async (dispatch) => {
  try {
    const res = await DetailRoomService.getDetail(id);

    dispatch({
      type: GET_DETAIL_ROOM_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteRoom = (id) => async (dispatch) => {
  try {
    await DetailRoomService.remove(id);

    dispatch({
      type: GET_DELETE_ROOM_SUCCESS,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const createChosen = (id) => async (dispatch) => {
  try {
    const res = await DetailRoomService.createChoose(id);
    console.log(res);

    dispatch({
      type: POST_CHOOSE_CLASS_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
