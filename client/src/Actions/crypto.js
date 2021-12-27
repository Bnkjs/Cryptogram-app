import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";

export const getMarket = async () => {
  try {
      return await axios.get(apiUrls.getAllCrypto)
        .then(response => {       
            store.dispatch({
              type: types.GET_MARKET_CRYPTO_SUCCESS,
              payload: response.data
        });
      })
  } catch (error) {
      store.dispatch({
        type: types.GET_MARKET_CRYPTO_FAIL
      })
      console.log(error.response.data);
  }
}
export const getUserCoins = async (token) => {
  try {
      return await axios.get(apiUrls.my_crypto,{
          headers: {
            'Content-Type': 'application/json',
            token: token
        }
      })
        .then(response => {       
            store.dispatch({
              type: types.GET_USER_CRYPTO_SUCCESS,
              payload: response.data
        });
        console.log(response.data);
      })
  } catch (error) {
      store.dispatch({
        type: types.GET_USER_CRYPTO_FAIL
      })
      console.log(error.response.data);
  }
}