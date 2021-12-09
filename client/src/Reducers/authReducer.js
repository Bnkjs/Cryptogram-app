import types from "../Types/types";

const userInfosString = localStorage.getItem("user_info");
const currentUserInfo = userInfosString ? JSON.parse(userInfosString) : null

const initialState = currentUserInfo
  ? { isLoggedIn: true,  currentUserInfo: currentUserInfo }
  : { isLoggedIn: false, currentUserInfo: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUserInfo: action.payload
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUserInfo: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUserInfo: action.payload,
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUserInfo: null,
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUserInfo: null,
      };
    default:
      return state;
  }
}