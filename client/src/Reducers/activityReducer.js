
import types from "../Types/types";

const initialState =  {
  isLoggedIn: false,
  activityInfos: null 
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case types.ACTIVITY_SUCCESS:
      return {
        ...state, 
        isLoggedIn: true,
        activityInfos: payload
      }
    case types.ACTIVITY_FAIL:
      return {
        ...state, 
        isLoggedIn: false,
        activityInfos: null
      }
      default:
        return state;
  }
}