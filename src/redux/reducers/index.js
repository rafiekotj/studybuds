import { combineReducers } from "redux";
import studyRoomReducer from "./studyRoomReducer";
import homeRoomReducer from "./homeRoomReducer";

const rootReducer = combineReducers({
  reducers: "",
  studyRoomReducer,
  homeRoomReducer,
});

export default rootReducer;
