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
import cubes from 'assets/cube_gradient_blue.svg'
import './style.scss';
import { HiOutlineMail } from "react-icons/hi";
import { BiLockAlt } from "react-icons/bi";
import { FiFeather } from "react-icons/fi";

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
  const initial = {
    visible: { opacity: 1, y: 50},
    hidden: { opacity: 0, y: 50 },
  }
  useEffect(()=>{
   setAuth(userLogged)
  },[userLogged])
  
  
  return(
  
    <motion.div
       variants={initial}
       initial={"visible"}
       transition={{ duration: 3 }}          
    >
      <PageContainer id="signup-container">
        <div className="box-form-auth">
        <div className="header-form-auth">
         <img className="cubes_form" src={cubes} alt="deux cube avec un dégradé bleu transparent" />
          <div className="text-header-form-auth">
            <h1 className="title-form">Créez votre compte</h1>
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
              <HiOutlineMail className="form-icn"/>
            </div>
            <Marged bottom="20px"/>
            <div className="input-form-icn">
             <Input role={'textbox'} type="password" placeholder="mot de passe" name="password" className="mdp-input" value={password} password={password} onChange={(e)=>onChange(e)} required  />
             <BiLockAlt className="form-icn"/>
            </div>
            <Marged bottom="20px" />
            <div className="input-form-icn">
              <Input role={'textbox'} type="text" placeholder="nom d'utilisateur" name="username" className="username-input" value={username} onChange={(e)=>onChange(e)} required />
              <FiFeather className="form-icn"/>
            </div>
            <Marged bottom="20px"/>
            <Button primary_xl>Créer son compte</Button>
            <p className="n-login-signup">Vous n’avez pas encore de compte?
              <Link to='/login'><span className="link-redirect"> Connectez-vous</span></Link>
            </p>
          </Form>
        </div>                
      </PageContainer>
    </motion.div>
    
        
  )
}


export default Signup;