import { combineReducers } from "redux";
import studyRoomReducer from "./studyRoomReducer";
import homeRoomReducer from "./homeRoomReducer";
import formReducer from "./formReducer";
import authReducer from "./authReducer";
import detailRoomReducer from "./detailRoom";

const rootReducer = combineReducers({
  reducers: "",
  studyRoomReducer,
  homeRoomReducer,
  formReducer,
  authReducer,
  detailRoomReducer,
});

export default rootReducer;
