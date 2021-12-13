import axios from "axios";
import apiUrls from "../services/ApiUrls";
import store from "../store";
import types from "../Types/types";

export const profil = (e, email, username, firstname, lastname, avatar) => {
  e.preventDefault()

  try {
    if(email || username || firstname || lastname || avatar){
      return axios.post(apiUrls.profil,{
        email: email, 
        username: username, 
        firstname: firstname, 
        lastname: lastname, 
        avatar: avatar
      })
      .then(response => {
        store.dispatch({
          type: types.PROFIL_UPDATE_SUCCESS,
          payload: response.data
        })
      })
    } else{
      store.dispatch({
        type: types.PROFIL_UPDATE_FAIL,
        payload: response.data
      })
    }
  } catch (error) {
    console.log(error.message);
  }
   
}
