import { GET_PROFILE_SUCCESS } from "../action/actionTypes/profileTypes";

const initialState = {
  data: [],
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        data: payload.data,
      };
    default:
      return state;
  }
};

export default profileReducer;
