import {
  POST_FORM_SUCCESS,
  GET_TOPICS_SUCCESS,
} from "../action/actionTypes/formTypes";

const initialState = {
  data: [],
  topics: [],
};

const formReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_FORM_SUCCESS:
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

export default formReducer;
