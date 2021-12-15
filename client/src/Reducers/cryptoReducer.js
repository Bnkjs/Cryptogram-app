import types from "../Types/types";

const initialState =  {
  cryptoInfos: null 
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case types.GET_ALL_CRYPTO_SUCCESS:
      return {
        ...state, 
        cryptoInfos: payload
      }
    case types.GET_ALL_CRYPTO_FAIL:
      return {
        ...state, 
        cryptoInfos: null
      }
    case types.BUY_CRYPTO_SUCCESS:
      return {
        ...state, 
        cryptoInfos: payload
      }
    case types.BUY_CRYPTO_FAIL:
      return undefined
    case types.TRANSFERT_CRYPTO_SUCCESS:
      return {
        ...state, 
        cryptoInfos: payload
      }
    case types.TRANSFERT_CRYPTO_FAIL:
      return undefined
    default:
        return state;
  }
}