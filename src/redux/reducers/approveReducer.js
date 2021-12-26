import { GET_APPROVE_PARTICIPANT_SUCCESS } from "../action/actionTypes/approveTypes";

const initialState = {
  data: [],
};

const approveReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_APPROVE_PARTICIPANT_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default detailRoomReducer;
