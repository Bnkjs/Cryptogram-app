import types from "../Types/types";
import AuthService from "../services/auth.service";
import store from "../store";


export const register = (e,email, password, username) => {
  
   return AuthService.register(e,email, password, username)
    .then((response) => {
      console.log(response);
        store.dispatch({
          type: types.REGISTER_SUCCESS,
          payload: response
        });
  
        store.dispatch({
          type: types.SET_MESSAGE,
          payload: response,
        });
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        store.dispatch({
        type: types.REGISTER_FAIL,
      });

      store.dispatch({
        type: types.SET_MESSAGE,
        payload: error.response.data,
      });
    }
  );
};

export const login = (e, email, password) => {
  return AuthService.login(e, email, password)
  .then((response) => {
    console.log(response);
      store.dispatch({
        type: types.LOGIN_SUCCESS,
        payload: response,
      });     
      store.dispatch({
        type: types.SET_MESSAGE,
        payload: 'connecté!!',
      }); 
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      store.dispatch({
        type: types.LOGIN_FAIL,
      });

      store.dispatch({
        type: types.SET_MESSAGE,
        payload: error.response.data,
      });

      
    }
  );
};

export const logout = () => {
  
  AuthService.logout();

  store.dispatch({
    type: types.LOGOUT,
  });

  store.dispatch({
    type: types.SET_MESSAGE,
    payload: 'logout !! ',
  });
  store.dispatch({
    type: types.DASHBOARD_FAIL
  })
};

