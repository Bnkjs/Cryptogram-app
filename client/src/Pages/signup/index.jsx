import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input/index";
import { register } from "../../Actions/auth";
import { useSelector } from "react-redux";
import { Button } from "../../components/Button/index";
import { Marged } from "../../components/Marged";
import { PageContainer } from "../../components/PageContainer";
import { Form } from "../../components/Form";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import cubes from 'assets/cubes_gradients_b.svg'
import './style.scss';
import { BiLockAlt } from "react-icons/bi";
import { FiFeather, FiSend } from "react-icons/fi";
import animationFm from "utils/framer";
import { navDisable, navEnable } from "utils/navUtils";

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
    navEnable()
    setAuth(userLogged)
  },[userLogged])
  
  return(
      <PageContainer id="form-container">
        <motion.div
          variants={animationFm()}
          initial={animationFm(0,50).hidden}
          animate={animationFm(1,0).visible}
          transition={{ duration: .4 }}          
        >
        <div className="box-form">
          <div className="header-form">
            <img className="cubes_form" src={cubes} alt="deux cube avec un dégradé bleu transparent" />
            <div className="text-header-form">
              <h1 className="title-form title-signup"><span className="hr-header hr-signup"></span> Créez votre compte</h1>
              <h2>Commencez <br/> dès maintenant.</h2>
              <p>En profitant des meilleurs crypto-monnaies du marché.</p>
            </div>
        </div>
        <Form
         className="form-signup"
         onSubmit={(e)=> handleSubmit(e,email,password,username)}
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
            <Marged bottom="20px" />
            <div className="input-form-icn">
              <Input className="input-form" role={'textbox'} type="text" placeholder="nom d'utilisateur" name="username" className="username-input" value={username} onChange={(e)=>onChange(e)} required />
              <FiFeather className="input-icn"/>
            </div>
            <Marged bottom="20px"/>
            <Button width="100%" primary_xl>Créer son compte</Button>
            <Marged bottom="10px"/>
            <div className="switch-auth">Vous avez déjà un compte?
              <Link to='/login'><span className="link-redirect-auth"> Connectez-vous</span></Link>
            </div>
          </Form>
        </div> 
        </motion.div>                
      </PageContainer>   
  )
}


export default Signup;