import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";
import { myCustomNotif } from "components/notification/notif";

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
      myCustomNotif('notif notif-warning',error.response.data);
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
      })
  } catch (error) {
      store.dispatch({
        type: types.GET_USER_CRYPTO_FAIL
      })
      myCustomNotif('notif notif-warning',error.response.data);
  }
}

export const buyCrypto = async (crypto_name,amount,token) => {
  try {
      return await axios.post(apiUrls.buy_crytpo,{
          crypto_name: crypto_name,
          amount: amount},
          {
          headers: {
            'Content-Type': 'application/json',
            token: token
        }       
      }).then(response => {       
           if(response){
            store.dispatch({
              type: types.BUY_CRYPTO_SUCCESS,
              payload: response.data
        });
          myCustomNotif('notif notif-success','Votre achat a bien été effectué');
        } else{
          store.dispatch({
            type: types.BUY_CRYPTO_FAIL
          }) 
          myCustomNotif('notif notif-warning',response.data); 
        }
      })
  } catch (error) {
      myCustomNotif('notif notif-warning',error.response.data);
      console.log(error.response.data);
  }
}

export const makeTransfert = async (contact_id,crypto_name,description,amount,token) => {
  try {
      return await axios.post(apiUrls.transfert_crypto,{
          contact_id: contact_id,
          crypto_name: crypto_name,
          description: description, 
          amount: amount},
          {
          headers: {
            'Content-Type': 'application/json',
            token: token
        }       
      }).then(response => {       
           if(response){
            store.dispatch({
              type: types.MAKE_TRANSFERT_SUCCESS,
              payload: response.data
        });
          myCustomNotif('notif notif-warning','transfert éffectué');
        } else{
          store.dispatch({
            type: types.MAKE_TRANSFERT_FAIL
          }) 
          myCustomNotif('notif notif-warning',response.data); 
        }
      })
  } catch (error) {
      myCustomNotif('notif notif-warning',error.response.data);
      console.log(error.response.data);
  }
}