import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";

export const getMarket = async (token) => {
  try {
      return await axios.get(apiUrls.getAllCrypto)
        .then(response => {       
            store.dispatch({
              type: types.GET_ALL_CRYPTO_SUCCESS,
              payload: response.data
        });
      })
  } catch (error) {
      store.dispatch({
        type: types.GET_ALL_CRYPTO_FAIL
      })
      console.log(error.response.data);
  }
}