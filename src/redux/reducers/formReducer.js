import { POST_FORM_SUCCESS } from "../action/actionTypes/formTypes";

const initialState = {
  data: [],
};

const formReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case POST_FORM_SUCCESS:
      return {
        ...state,
        data: payload.data.rows,
      };
    default:
      return state;
  }
};

export default formReducer;
