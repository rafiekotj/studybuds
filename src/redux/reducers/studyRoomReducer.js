import {
  GET_ROOMS_SUCCESS,
  GET_TOPICS_SUCCESS,
} from "../action/actionTypes/studyRoomTypes";

const initialState = {
  totalData: "",
  data: [],
  isLoading: true,
  topics: [],
};

const studyRoomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        data: payload.data.rows,
        totalData: payload.totalData,
        isLoading: false,
      };
    case GET_TOPICS_SUCCESS:
      return {
        ...state,
        topics: [...payload.data],
      };
    default:
      return state;
  }
};

export default studyRoomReducer;
