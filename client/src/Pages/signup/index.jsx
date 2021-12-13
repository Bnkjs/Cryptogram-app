import React, { useEffect, useState } from "react";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { register } from "../../Actions/auth";
import { useSelector } from "react-redux";

const Signup = ({ setAuth }) =>{
  const userLogged = useSelector(state => state.authReducer.isLoggedIn)
 
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    username:""
  })
  const { email, password, username } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e,email, password, username) =>{
    register(e,email,password,username)
  }    

  useEffect(()=>{
   setAuth(userLogged)
  },[userLogged])
  
  
  return(<>
    <div>
      <h1>Inscrivez-vous</h1>
      <form action="" onSubmit={(e)=> handleSubmit(e,email,password,username)}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <InputForm type="password" placeholder="mdp" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} />
        <InputForm type="text" placeholder="nom d'utilisateur" name="username" className="username-input" value={username} onChange={(e)=>onChange(e)} />
        <Button message="Inscrivez-vous" />
      </form>  
    </div>
        
  </>)
}


export default Signup;