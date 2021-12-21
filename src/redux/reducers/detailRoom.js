import { GET_DETAIL_ROOM_SUCCESS } from "../action/actionTypes/detailRoomTypes";

const initialState = {
  data: [],
};

const detailRoomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DETAIL_ROOM_SUCCESS:
      return {
        ...state,
        data: payload.data.rows,
      };
    default:
      return state;
  }
};

export default detailRoomReducer;
