import { combineReducers } from "redux"
import authReducer from "./Reducers/authReducer";
import messageReducer from "./Reducers/messageReducer";

const rootReducers = combineReducers({
  authReducer,
  messageReducer
})

export default rootReducers;