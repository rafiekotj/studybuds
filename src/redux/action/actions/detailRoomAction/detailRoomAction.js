import { GET_DETAIL_ROOM_SUCCESS } from "../../actionTypes/detailRoomTypes";
import DetailRoomService from "./detailRoomService";

export const getDetailRoom = (id) => async (dispatch) => {
  try {
    const res = await DetailRoomService.getDetail(id);
    // console.log(res.data.data);

    dispatch({
      type: GET_DETAIL_ROOM_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};
