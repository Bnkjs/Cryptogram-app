import types from "../Types/types";

const userInfosSerialized = localStorage.getItem("user_info");
const currentUserInfo = userInfosSerialized ? JSON.parse(userInfosSerialized) : null
const userTokenString = localStorage.getItem("token")
const currentUsertoken = userTokenString? JSON.parse(userTokenString) : null

const initialState = currentUserInfo
  ? { isLoggedIn: true,  currentUserInfo: currentUserInfo, token: currentUsertoken, isLoading: null, isloading: false }
  : { isLoggedIn: false, currentUserInfo: null, token: null, isLoading: false}  ;

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {

    case types.LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.LOADING_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        currentUserInfo: payload.user,
        token: payload.token,
        isLoading: payload
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
        token: payload.token,
        isLoading: payload
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