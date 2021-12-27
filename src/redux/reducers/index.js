import { combineReducers } from "redux";
import studyRoomReducer from "./studyRoomReducer";
import homeRoomReducer from "./homeRoomReducer";
import formReducer from "./formReducer";
import authReducer from "./authReducer";
import detailRoomReducer from "./detailRoom";
import myClassReducer from "./myClassReducer";
import profileReducer from "./profileReducer";
import messagesReducer from "./messages";
import formEditReducer from "./formEditReducer";

const rootReducer = combineReducers({
  reducers: "",
  studyRoomReducer,
  homeRoomReducer,
  formReducer,
  formEditReducer,
  authReducer,
  detailRoomReducer,
  myClassReducer,
  profileReducer,
  messagesReducer,
});

export default rootReducer;
