import { combineReducers } from "redux"
import authReducer from "./Reducers/authReducer";
import messageReducer from "./Reducers/messageReducer";
import dashboardReducer from "./Reducers/dashboardReducer";

const rootReducers = combineReducers({
  authReducer,
  messageReducer,
  dashboardReducer
})

export default rootReducers;