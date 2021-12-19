import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input/index";
import { register } from "../../Actions/auth";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/index";
import { Card } from "../../components/Card";
import Div from "../../components/Div";
import { Marged } from "../../components/Marged";
import { PageContainer } from "../../components/PageContainer";
import { Form } from "../../components/Form";
import img_gradient_signup from '../../assets/FORM_SIGNUP_CARD_GRADIENT.svg'
import { Link } from "react-router-dom";

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
    <PageContainer>
      <Marged />
      <Div gg="40px" display="grid" gtc="repeat(auto-fill, 550px)" justifyContent='center'  id="class">
        <Card className="card-form">
          <img width="450px" height="auto" src={img_gradient_signup} alt="" />
          <div className="h-card">
           <h3 className="h-card-title">S'inscrire</h3>
           <p className="h-card-text">C'est simple et rapide.</p>
         </div>
        </Card>
        <Div  width="550px" display="flex" justifyContent='center' alignItems='start' flexDirection='column'>
          <h1 className="title-form">Créez votre compte</h1>
          <Form onSubmit={(e)=> handleSubmit(e,email,password,username)}>
            <Input type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} required />
            <Marged bottom="20px"/>
            <Input type="password" placeholder="mot de passe" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} required  />
            <Marged bottom="20px" />
            <Input type="text" placeholder="nom d'utilisateur" name="username" className="username-input" value={username} onChange={(e)=>onChange(e)} required />
            <Marged bottom="20px"/>
            <Button primary_xl>Créer son compte</Button>
            <p className="n-login-signup">Vous n’avez pas de compte?
              <Link to='/login'><span className="link-redirect"> Connectez-vous</span></Link>
            </p>
          </Form>
        </Div>  
      </Div>
    </PageContainer>
        
  </>)
}


export default Signup;