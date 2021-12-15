import { combineReducers } from "redux"
import authReducer from "./Reducers/authReducer";
import messageReducer from "./Reducers/messageReducer";
import dashboardReducer from "./Reducers/dashboardReducer";
import activityReducer from "./Reducers/activityReducer";
import contactReducer from "./Reducers/contactReducer";

const rootReducers = combineReducers({
  authReducer,
  messageReducer,
  dashboardReducer,
  activityReducer,
  contactReducer
})

export default rootReducers;