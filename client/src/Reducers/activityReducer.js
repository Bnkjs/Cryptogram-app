
import types from "../Types/types";

const initialState =  {
  activityInfos: null 
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case types.ACTIVITY_SUCCESS:
      return {
        ...state, 
        activityInfos: payload
      }
    case types.ACTIVITY_FAIL:
      return {
        ...state, 
        activityInfos: null
      }
      default:
        return state;
  }
}