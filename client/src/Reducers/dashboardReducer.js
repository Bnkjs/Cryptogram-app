import types from "../Types/types";

const initialState =  {
  isLoggedIn: false,
  dashboardInfos: null 
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case types.DASHBOARD_SUCCESS:
      return {
        ...state, 
        isLoggedIn: true,
        dashboardInfos: payload
      }
    case types.DASHBOARD_FAIL:
      return {
        ...state, 
        isLoggedIn: false,
        dashboardInfos: null
      }
      default:
        return state;
  }
}