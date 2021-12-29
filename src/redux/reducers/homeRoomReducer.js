import {
  GET_HOME_ROOMS_SUCCESS,
  GET_HOME_TOPICS_SUCCESS,
} from "../action/actionTypes/homeRoomTypes";

const initialState = {
  data: [],
  topics: [],
};

const homeRoomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_HOME_ROOMS_SUCCESS:
      return {
        ...state,
        data: payload.data.rows,
      };
    case GET_HOME_TOPICS_SUCCESS:
      return {
        ...state,
        topics: [...payload.data],
      };
    default:
      return state;
  }
};

export default homeRoomReducer;
