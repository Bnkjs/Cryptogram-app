import axios from 'axios';
import apiUrls from './ApiUrls';

const register =  async (e,email, password, username) => {
  e.preventDefault()
  
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
        console.log(response.data)
      )
    })               
}

 const login =  async (e, email, password) =>{
  e.preventDefault()

  return await axios.post(apiUrls.login,{
    email: email,
    password: password
  })
  .then((response) => {
    if (response.data.token) {
      localStorage.setItem("user_info", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data
    }else(
      console.log(response.data)
    )
  }) 
}


const logout = () => {
  localStorage.removeItem("user_info");
  localStorage.removeItem("token");
  console.log('logout j\'écoute');
};


export default {
  register,
  login,
  logout
};


