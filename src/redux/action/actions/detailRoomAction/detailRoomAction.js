import { GET_DETAIL_ROOM_SUCCESS } from "../../actionTypes/detailRoomTypes";
import DetailRoomService from "./detailRoomService";

export const GetDetailRoom = () => async (dispatch) => {
  try {
    const res = await DetailRoomService.get();

    dispatch({
      type: GET_DETAIL_ROOM_SUCCESS,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};
