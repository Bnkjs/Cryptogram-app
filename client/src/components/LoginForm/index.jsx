import React, {useState} from "react"; 
import { Button } from "../Button";
import { logout, register } from "../../Actions/auth";
import { InputForm } from "../InputForm";

const Form = () =>{
  
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const { email, password } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  return(<>
    <div>
      <form action="" onSubmit={(e)=> register(e,email,password)}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <InputForm type="password" placeholder="mdp" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} />
        <Button message="Connectez-vous" />
      </form>  
    </div>
        
  </>)
}

export default Form;