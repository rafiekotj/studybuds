import {
  GET_DETAIL_ROOM_SUCCESS,
  GET_DELETE_ROOM_SUCCESS,
  POST_CHOOSE_CLASS_SUCCESS,
} from "../action/actionTypes/detailRoomTypes";

const initialState = {
  data: [],
};

const detailRoomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DETAIL_ROOM_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case GET_DELETE_ROOM_SUCCESS:
      return state.filter(({ id }) => id !== payload.id);
    case POST_CHOOSE_CLASS_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default detailRoomReducer;
