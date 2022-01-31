import React, { useEffect, useState } from "react";
import { login }from "Actions/auth";
import { connect } from "react-redux";
import { motion } from 'framer-motion';
import { Button } from "components/Button/index";
import { Input } from "components/Input/index";
import { Marged } from "components/Marged";
import { PageContainer } from "components/PageContainer";
import { Form }from "components/Form";
import { Link } from "react-router-dom";
import { BiLockAlt } from "react-icons/bi";
import {  FiSend } from "react-icons/fi";
import animationFm from "utils/framer";
import cubes from 'assets/cubes_gradients_o.svg'
import 'Pages/signup/style.scss';

const Login = ({ setAuth, isLoading, userLogged }) =>{
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
  
  
  return(
      <>
      { isLoading?
        <div className="is-loading">
        <img className="cubes_form" src={cubes} alt="deux cubes avec un dégradé orange transparent" />
       </div>

      :
        <PageContainer id="form-container">
        <motion.div
          variants={animationFm()}
          initial={animationFm(0,50).hidden}
          animate={animationFm(1,0).visible}
          transition={{ duration: .4 }}    
          id="app"  
        >
        <div className="box-form">
        <div className="header-form">
        <img className="cubes_form" src={cubes} alt="deux cube avec un dégradé bleu transparent" />
          <div className="text-header-form">
            <h1 className="title-form title-login"><span className="hr-header hr-login"></span>Connectez-vous</h1>
            <h2>Ravi de vous <br/> revoir parmis nous</h2>
            <p>Vos crypto-monnaies vous attendent!</p>
          </div>
        </div>
        <Form
        className="form-signup"
        onSubmit={(e)=> handleSubmit(e,email,password)}
        >    
            <div className="input-form-icn">            
              <Input role={'textbox'} type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} required />
              <FiSend className="input-icn"/>
            </div>
            <Marged bottom="20px"/>
            <div className="input-form-icn">
            <Input role={'textbox'} type="password" placeholder="mot de passe" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} required  />
            <BiLockAlt className="input-icn"/>
            </div>
            <Marged bottom="20px"/>
            <Button width="100%" className="btn-form" primary_xl>Se connecter</Button>
            <Marged bottom="10px"/>
            <div className="switch-auth">Vous n’avez pas encore de compte?
              <Link to='/signup'>
                  <span className="link-redirect-auth"> Inscrivez-vous</span>
              </Link>         
            </div>
          </Form>
        </div>
        </motion.div>              
      </PageContainer>
     }
    </> 
  )
}


export const LoginStore = connect(
  (state) => ({
    userLogged: state.authReducer.isLoggedIn,
    isLoading: state.authReducer.isLoading
  })
)(Login)
export default Login;