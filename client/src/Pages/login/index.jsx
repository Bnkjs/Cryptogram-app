import React, { useEffect, useState } from "react";
import { login } from "../../Actions/auth";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/index";
import { Input } from "../../components/Input/index";
import { Card } from "../../components/Card";
import Div from "../../components/Div";
import { Marged } from "../../components/Marged";
import { PageContainer } from "../../components/PageContainer";
import { Form } from "../../components/Form";
import img_gradient_login from '../../assets/FORM_LOGIN_CARD_GRADIENT.svg'

const Login = ({ setAuth }) =>{

  const userLogged = useSelector(state => state.authReducer.isLoggedIn)

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  })
  const { email, password } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const handleSubmit = (e, email, password) =>{
    login(e,email,password)
  }

  useEffect(()=>{
   setAuth(userLogged)
  },[userLogged])
  
  
  return(<>
    <PageContainer>
      <Marged top="70px"/>
      <Div gg="40px" display="grid" gtc="repeat(auto-fill, 550px)" justifyContent='center'  id="class">
        <Card className="card-form">
          <img width="500px" height="auto" src={img_gradient_login} alt="" />
         <div className="h-card">
           <h3 className="h-card-title">Re-Bonjour !</h3>
           <p className="h-card-text">Content de vous revoir.</p>
         </div>
        </Card>
        <Div  width="550px" display="flex" justifyContent='center' alignItems='start' flexDirection='column'>
          <h1 className="title-form">Connectez-vous</h1>
          <Form onSubmit={(e)=> handleSubmit(e,email,password)}>
            <Input type="text" placeholder="email" name="email" className="email-input i-form" value={email} onChange={(e)=>onChange(e)} required />
            <Marged bottom="20px"/>
            <Input type="password" placeholder="mot de passe" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} required  />
            <Marged bottom="20px" />
            <Button primary_xl>Se connecter</Button>
          </Form>
        </Div>  
      </Div>
    </PageContainer>
  </>)
}

export default Login;