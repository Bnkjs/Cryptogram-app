import React, {useState} from "react"; 
import { Button } from "../Button";
import { register } from "../../Actions/auth";
import { InputForm } from "../InputForm";
import store from "../../store";

const Form = ({ setAuth }) =>{
  const myStore = store.getState().authReducer.isLoggedIn

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
    setAuth(myStore)
  }
  
  return(<>
    <div>
      <form action="" onSubmit={(e)=> handleSubmit(e,email,password)}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <InputForm type="password" placeholder="mdp" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} />
        <Button message="Inscrivez-vous" />
      </form>  
    </div>
        
  </>)
}

export default Form;