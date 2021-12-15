import types from "../Types/types";

const initialState =  {
  contactInfos: null 
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case types.GET_ALL_CONTACT_SUCCESS:
      return {
        ...state, 
        contactInfos: payload
      }
    case types.GET_ALL_CONTACT_FAIL:
      return {
        ...state, 
        contactInfos: null
      }
    case types.ADD_CONTACT_SUCCESS:
      return {
        ...state, 
        contactInfos: payload
      }
    case types.ADD_CONTACT_FAIL:
      return {
        ...state, 
        contactInfos: null
      }
    case types.DELETE_CONTACT_SUCCESS:
      return {
        ...state, 
        contactInfos: null
      }
    case types.DELETE_CONTACT_FAIL:
      return {
        ...state, 
        contactInfos: null
      }
    case types.DELETE_ALL_CONTACT_SUCCESS:
      return {
        ...state, 
        contactInfos: null
      }
    case types.DELETE_ALL_CONTACT_FAIL:
      return {
        ...state, 
        contactInfos: null
      }
    default:
        return state;
  }
}