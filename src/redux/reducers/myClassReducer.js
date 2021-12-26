import {
  GET_CREATED_ROOM_SUCCESS,
  GET_JOINED_ROOM_SUCCESS,
} from "../action/actionTypes/myClassTypes";

const initialState = {
  data: [],
};

const myClassReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_CREATED_ROOM_SUCCESS:
      // console.log(payload, "ini dari reducer");
      return {
        ...state,
        data: payload,
      };
    case GET_JOINED_ROOM_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    default:
      return state;
  }
};

export default myClassReducer;
