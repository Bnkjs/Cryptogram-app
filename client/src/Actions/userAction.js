import types from "../Types/types";

export const userIsConnectedAction = (state) => {
  return{
     type: types.USER_IS_CONNECTED,
     payload: state 
  }
}
export const userIsConnectedSuccess = (state) => {
  return{
     type: types.USER_IS_CONNECTED_SUCCESS,
     payload: state 
  }
}
export const USER_IS_CONNECTED_FAILURE = (state) => {
  return{
     type: types.USER_IS_CONNECTED_FAILURE,
     payload: state 
  }
}

export const userIsDeconnectedAction = (state) => {
  return{
     type: types.USER_IS_DECONNECTED,
     payload: state 
  }
}
export const userUpdateProfildAction = (state) => {
  return{
     type: types.USER_UPDATE_PROFIL,
     payload: state 
  }
}
export const userDeleteProfildAction = (state) => {
  return{
     type: types.USER_DELETE_PROFIL,
     payload: state 
  }
}
export const userAddContactdAction = (state) => {
  return{
     type: types.USER_ADD_CONTACT,
     payload: state 
  }
}
export const userDeleteContactdAction = (state) => {
  return{
     type: types.USER_DELETE_CONTACT,
     payload: state 
  }
}

export const userBuyCryptodAction = (state) => {
  return{
     type: types.USER_BUY_CRYPTO,
     payload: state 
  }
}
export const useTransfertCryptoAddContactdAction = (datas) => {
  return{
     type: types.USER_TRANSFERT_CRYPTO ,
     payload: datas 
  }
}