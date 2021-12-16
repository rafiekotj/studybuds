import { GET_ROOMS_SUCCESS } from "../action/actionTypes/studyRoomTypes";

const initialState = {
  totalData: "",
  data: [],
  isLoading: true,
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
    default:
      return state;
  }
};

export default studyRoomReducer;
