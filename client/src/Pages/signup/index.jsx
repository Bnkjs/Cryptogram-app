import React from "react";
import Form from "../../components/Form";
import apiUrls from "../../services/ApiUrls"
const Signup = ({ setAuth }) =>{

  return(<>
    <div>
      <h1>Inscrivez-vous</h1>
      <Form url={apiUrls.signup} setAuth={setAuth}/>
    </div>
  </>)
}

export default Signup;