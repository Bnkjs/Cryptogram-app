import { combineReducers } from "redux"
import authReducer from "./Reducers/authReducer";
import messageReducer from "./Reducers/messageReducer";
import dashboardReducer from "./Reducers/dashboardReducer";
import activityReducer from "./Reducers/activityReducer";
import contactReducer from "./Reducers/contactReducer";
import cryptoReducer from "./Reducers/cryptoReducer";
const rootReducers = combineReducers({
  authReducer,
  messageReducer,
  dashboardReducer,
  activityReducer,
  contactReducer,
  cryptoReducer
})

export default rootReducers;