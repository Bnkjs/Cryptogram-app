import types from "../Types/types";

const initialState = false; 

const userReducer = ( state = initialState, action) => {
  switch(action.type){
    case types.USER_IS_CONNECTED:
      return[
        ...state, ...action.payload
      ]
    case types.USER_IS_DECONNECTED:
      return[
        ...state, ...action.payload
      ]
    default:
      return state
  }

}

export const 