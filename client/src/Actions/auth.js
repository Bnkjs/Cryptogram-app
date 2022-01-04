import types from "../Types/types";
import AuthService from "../services/auth.service";
import store from "../store";
import { myCustomNotif } from "../components/notification/notif";

export const register = (e,email, password, username) => {
  
   try {
      return AuthService.register(e,email, password, username) 
      .then((response) => {
        if(response){
          store.dispatch({
            type: types.REGISTER_SUCCESS,
            payload: response
          });
        } else{
          store.dispatch({
            type: types.REGISTER_FAIL
          })
          myCustomNotif('notif notif-warning',response);

        }
    })
   } catch (error) {
     myCustomNotif('notif notif-warning',error.response.data);
   }  
};

export const login = (e, email, password) => {
  try {
    return AuthService.login(e, email, password)
    .then((response) => {
      if(response.user){
        store.dispatch({
          type: types.LOGIN_SUCCESS,
          payload: response,
        });   
      }else{
        store.dispatch({
          type: types.LOGIN_FAIL,
        }); 
        myCustomNotif('notif notif-warning',response);
        console.log('oula');
      }  
    })
  } catch (error) {
    console.log('oula');
     myCustomNotif('notif notif-warning',error.response.data);
  }

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

