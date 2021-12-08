import React from "react";
import Form from "../../components/Form";
import apiUrls from "../../services/ApiUrls";

const Login = () =>{

  return(<>
    <div>
      <h1>Connectez-vous</h1>
      <Form url={apiUrls.login}/>
    </div>
  </>)
}

export default Login;