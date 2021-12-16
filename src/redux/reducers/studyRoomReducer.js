import { GET_ROOMS_SUCCESS } from "../action/actionTypes/studyRoomTypes";

const initialState = {
  totalData: "",
  data: [],
};

const studyRoomReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ROOMS_SUCCESS:
      return {
        ...state,
        data: payload.data.rows,
        totalData: payload.totalData,
      };
    default:
      return state;
  }
};

export default studyRoomReducer;
