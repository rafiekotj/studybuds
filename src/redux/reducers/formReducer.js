import { CREATE_FORM } from "../action/actionTypes/actionTypes";

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, error } = action;
  switch (type) {
    case `${CREATE_FORM}_LOADING`:
      return {
        ...state,
        isLoading: true,
      };
    case `${CREATE_FORM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
      };
    case `${CREATE_FORM}_ERROR`:
      return {
        ...state,
        isLoading: false,
        error: error,
      };
  }
};

export default userReducer;
