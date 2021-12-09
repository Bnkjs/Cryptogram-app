import React, { useEffect, useState } from "react";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button";
import { register } from "../../Actions/auth";
import { useSelector } from "react-redux";

const Signup = ({ setAuth }) =>{
  const userLogged = useSelector(state => state.authReducer.isLoggedIn)
 
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const { email, password } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e,email, password) =>{
    register(e,email,password)
  }
  useEffect(()=>{
   setAuth(userLogged)
  },[userLogged])
  
  
  return(<>
    <div>
      <h1>Inscrivez-vous</h1>
      <form action="" onSubmit={(e)=> handleSubmit(e,email,password)}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <InputForm type="password" placeholder="mdp" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} />
        <Button message="Inscrivez-vous" />
      </form>  
    </div>
        
  </>)
}


export default Signup;