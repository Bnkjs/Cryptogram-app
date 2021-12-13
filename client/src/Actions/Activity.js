import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";

const Activity = async (token) => {
 
    try {
      if(token){
        return await axios.get(apiUrls.dashboard,{
          headers: {
            'Content-Type': 'application/json',
            token: token
          },
        }).then(response => {
            store.dispatch({
              type: types.DASHBOARD_SUCCESS,
              payload: response.data
            });
        })
      } else{
          return "token manquant!"
      }
    } catch (error) {
        return error.message
    }

}

export default Activity