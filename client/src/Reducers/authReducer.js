import types from "../Types/types";

const userInfosString = localStorage.getItem("user_info");
const currentUserInfo = userInfosString ? JSON.parse(userInfosString) : null
const userTokenString = localStorage.getItem("token")
const currentUsertoken = userTokenString? JSON.parse(userTokenString) : null

const initialState = currentUserInfo
  ? { isLoggedIn: true,  currentUserInfo: currentUserInfo, token: currentUsertoken }
  : { isLoggedIn: false, currentUserInfo: null, token: null};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUserInfo: payload.user,
        token: payload.token
      };
    case types.REGISTER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUserInfo: null,
        token: null
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUserInfo: payload.user,
        token: payload.token
      };
    case types.LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        currentUserInfo: null,
        token: null
      };
    case types.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        currentUserInfo: null,
        token: null
      };
    default:
      return state;
  }
}