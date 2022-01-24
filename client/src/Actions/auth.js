import types from "../Types/types";
import AuthService from "../services/auth.service";
import store from "../store";
import { myCustomNotif } from "components/notification/notif";

export const register = (e,email, password, username) => {
  
  store.dispatch({type: types.LOADING })
  try {
      return AuthService.register(e,email, password, username) 
      .then((response) => {
        
        if(response){
          store.dispatch({
            type: types.REGISTER_SUCCESS,
            payload: response
          })
          store.dispatch({type: types.LOADING_SUCCESS})
        } else{
          store.dispatch({
            type: types.REGISTER_FAIL
          })
          store.dispatch({type: types.LOADING_SUCCESS})
        }
    })
   } catch (error) {
     console.log(error);
     store.dispatch({
      type: types.LOADING,
      payload: false
    })
   }  
};

export const login = (e, email, password) => {
  
    store.dispatch({ type: types.LOADING }) 
    return AuthService.login(e, email, password)
    .then((response) => {
      if(response){
        store.dispatch({
          type: types.LOGIN_SUCCESS,
          payload: response,
        })
        store.dispatch({ type: types.LOADING_SUCCESS })
      }else{
        store.dispatch({
          type: types.LOGIN_FAIL
        }); 
        store.dispatch({ type: types.LOADING_SUCCESS })
      }  
    })
  } 

  
export const logout = () => {
  
  AuthService.logout();
  
  store.dispatch({
    type: types.LOGOUT,
  });

  store.dispatch({
    type: types.SET_MESSAGE,
    payload: "logout"
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
    
};

