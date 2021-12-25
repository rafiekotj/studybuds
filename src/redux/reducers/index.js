import { combineReducers } from "redux";
import studyRoomReducer from "./studyRoomReducer";
import homeRoomReducer from "./homeRoomReducer";
import formReducer from "./formReducer";
import authReducer from "./authReducer";
import detailRoomReducer from "./detailRoom";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  reducers: "",
  studyRoomReducer,
  homeRoomReducer,
  formReducer,
  authReducer,
  detailRoomReducer,
  profileReducer,
});

export default rootReducer;
