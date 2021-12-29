import {
  PUT_FORM_SUCCESS,
  GET_TOPICS_SUCCESS,
  GET_DETAIL_ROOM_SUCCESS,
} from "../action/actionTypes/formEditTypes";

const initialState = {
  data: [],
  topics: [],
};

const formEditReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DETAIL_ROOM_SUCCESS:
      return {
        ...state,
        data: payload,
      };
    case PUT_FORM_SUCCESS:
      console.log(payload);
      return {
        ...state,
        data: payload.data.rows,
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

export default formEditReducer;
