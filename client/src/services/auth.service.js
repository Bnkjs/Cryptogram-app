import axios from 'axios';
import { myCustomNotif } from 'components/notification/notif';
import apiUrls from './ApiUrls';

const register =  async (e,email, password, username) => {
  e.preventDefault()
  
    try {
      return await axios.post(apiUrls.signup,{
        email: email,
        password: password,
        username: username
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user_info", JSON.stringify(response.data.user));
          localStorage.setItem("token", JSON.stringify(response.data.token));
          return response.data
        }else(
          myCustomNotif('notif-bottom notif-warning',response.data)
        )
      }) 
    } catch (error) {
      myCustomNotif('notif notif-warning',error.response.data);
    }              
}

 const login =  async (e, email, password) =>{
  e.preventDefault()

  try {
    return await axios.post(apiUrls.login,{
      email: email,
      password: password
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user_info", JSON.stringify(response.data.user));
        localStorage.setItem("token", JSON.stringify(response.data.token));
        return response.data
      }
    }) 
  } catch (error) {
    myCustomNotif('notif notif-warning',error.response.data);
  }
}


const logout = () => {
  localStorage.removeItem("user_info");
  localStorage.removeItem("token");
  myCustomNotif('notif notif-info', 'À bientôt 👋')

};


export default {
  register,
  login,
  logout
};


