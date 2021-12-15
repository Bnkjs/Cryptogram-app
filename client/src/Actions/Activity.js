import axios from "axios";
import store from "../store";
import types from "../Types/types";
import apiUrls from "../services/ApiUrls";

const activity = async (token) => {
 
    try {
      if(token){
        return await axios.get(apiUrls.activity,{
          headers: {
            'Content-Type': 'application/json',
            token: token
          },
        }).then(response => {
            store.dispatch({
              type: types.ACTIVITY_SUCCESS,
              payload: response.data
            });
        })
      } else{
          return "token manquant!"
      }
    } catch (error) {
      console.log(error.response.data);
    }

}

export default activity