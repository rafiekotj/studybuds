import { GET_HOME_ROOMS_SUCCESS } from "../action/actionTypes/homeRoomTypes";

const initialState = {
  data: [],
};

const homeRoomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOME_ROOMS_SUCCESS:
      return {
        ...state,
        data: payload.data.rows,
      };
    default:
      return state;
  }
};

export default homeRoomReducer;
