import types from "../Types/types";

const initialState =  {
  cryptoInfos: null ,
  userCoins: null,
  coinsMarket: null,
  transfertInfos: null
}

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type){
    case types.GET_MARKET_CRYPTO_SUCCESS:
      return {
        ...state, 
       coinsMarket: payload
      }
    case types.GET_MARKET_CRYPTO_FAIL:
      return {
        ...state, 
       coinsMarket: null
      }
    case types.GET_USER_CRYPTO_SUCCESS:
      return {
        ...state, 
       userCoins: payload
      }
    case types.GET_USER_CRYPTO_FAIL:
      return {
        ...state, 
       userCoins: null
      }
    case types.BUY_CRYPTO_SUCCESS:
      return {
        ...state, 
        transfertInfos: payload
      }
    case types.BUY_CRYPTO_FAIL:
      return state
    case types.MAKE_TRANSFERT_SUCCESS:
      return {
        ...state, 
        transfertInfos: payload
      }
    case types.MAKE_TRANSFERT_FAIL:
      return state
    default:
        return state;
  }
}