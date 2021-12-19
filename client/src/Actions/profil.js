import axios from "axios";
import apiUrls from "../services/ApiUrls";
import store from "../store";
import types from "../Types/types";

export const update_profil = (e, email, username, firstname, lastname, avatar) => {
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
        type: types.PROFIL_UPDATE_FAIL
      })
    }
  } catch (error) {
    console.log(error.response.data);
  }
   
}

export const delete_profil = (e,token) => {
  e.preventDefault()

  try {
      return axios.delete(apiUrls.profil,{
        headers: {
          'Content-Type': 'application/json',
          token: token
        }
      })
      .then(response => {
        localStorage.removeItem('user_info')
        localStorage.removeItem('token')

        store.dispatch({
          type: types.PROFIL_DELETE_SUCCESS,
          payload: response.data
        })
        store.dispatch({
          type: types.LOGIN_FAIL,
        });
  
        store.dispatch({
          type: types.DASHBOARD_FAIL
        })
        store.dispatch({
          type: types.ACTIVITY_FAIL
        })
        store.dispatch({
          type: types.GET_ALL_CONTACT_FAIL
        })
        store.dispatch({
          type: types.ADD_CONTACT_FAIL
        })
        
      })
  } catch (error) {
    console.log(error.response.data);
  }
   
}
