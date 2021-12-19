import types from "../Types/types";

const userInfosString = localStorage.getItem("user_info");
const currentUserInfo = userInfosString ? JSON.parse(userInfosString) : null

const initialState = currentUserInfo
  ? { isLoggedIn: true,  profilInfos: currentUserInfo }
  : { isLoggedIn: false, profilInfos: null};


const ProfilReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch(type){
    case types.PROFIL_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        profilInfos: payload
      }
    case types.PROFIL_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        profilInfos: null
      }
    case types.PROFIL_UPDATE_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        profilInfos: payload
      }
    case types.PROFIL_UPDATE_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        profilInfos: null
      }
    case types.PROFIL_DELETE_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        profilInfos: payload
      }
    case types.PROFIL_DELETE_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        profilInfos: null
      }
    default:
        return state;
  }
}

export default ProfilReducer