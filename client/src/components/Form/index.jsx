import React, {useState} from "react"; 
import axios from 'axios';
import { Button } from "../Button";
import { InputForm } from "../InputForm";

const Form = ({url}) =>{
  
  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const { email, password } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }

  const submitForm = async (e) =>{
    e.preventDefault()
    
    try {
      const res = await axios.post(url,{
        email: email,
        password: password
      })
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return(<>
    <div>
      <form action="" method="POST" onSubmit={submitForm}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <InputForm type="password" placeholder="mdp" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} />
        <Button message="Inscrivez-vous" />
      </form>  
    </div>
        
  </>)
}

export default Form;