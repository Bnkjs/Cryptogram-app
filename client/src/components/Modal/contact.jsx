import React,{ useState } from "react";
import { motion } from 'framer-motion';
import { addContact} from "../../Actions/contact";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { Marged } from "../../components/Marged";
import { Form } from "../../components/Form";
import { PageContainer } from "../PageContainer";
import { checkContentInput } from "../../utils/checkInput";
import { FiSend, FiUser } from "react-icons/fi";
import animationFm from "utils/framer";
import cubes from 'assets/cubes_gradients_b.svg'
import { FaArrowLeft } from "react-icons/fa";


const Modal = ({ showModal, token }) => {
  
  const [inputs, setInputs] = useState({
    email: "",
    firstname: "",
    lastname: ""
  })
  const { email, firstname, lastname } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  
  const onSubmitForm = (e) => {
    const checkEmail = checkContentInput(email)
    const checkFirstName = checkContentInput(firstname)
    const checkLastName = checkContentInput(lastname)

    if(!checkEmail || !checkFirstName || !checkLastName){
      console.log('input vide');
    } else{
      addContact(
          e,
          token,
          checkEmail,
          checkFirstName,
          checkLastName
        )
     showModal(false)
    }
  }

  return (
    <motion.div
       variants={animationFm()}
       initial={animationFm(0,50).hidden}
       animate={animationFm(1,0).visible}
       transition={{ duration: .4 }}          
    >
      <PageContainer id="form-container">
        <div className="box-form box-form-contact">
         <div className="close-modal" onClick={()=> showModal(false)}>
           <FaArrowLeft/>
         </div>
        <div className="header-form">
         <img className="cubes_form" src={cubes} alt="deux cube avec un dégradé bleu transparent" />
          <div className="text-header-form">
            <h1 className="title-form title-signup"><span className="hr-header hr-signup"></span> Ajoutez un contact</h1>
            <h2>Votre <br/> carnet d'adresse.</h2>
            <p>Une fois ajouté, vous pourrez lui envoyer des crypto-monnaies</p>
          </div>
        </div>
        <Form role={'form'} className="form-contact" method="POST" onSubmit={(e)=> onSubmitForm(e)}> 
            <div className="input-form-icn">            
              <Input role={'textbox'} type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} required />
              <FiSend className="input-icn"/>
            </div>
            <Marged bottom="20px"/>
            <div className="input-form-icn">
             <Input role={'textbox'} type="text" placeholder="prénom" name="firstname" className="firstname-input input" value={firstname} onChange={(e)=>onChange(e)} required  />
             <FiUser className="input-icn"/>
            </div>
            <Marged bottom="20px" />
            <div className="input-form-icn">
              <Input role={'textbox'} type="text" placeholder="nom de famille" name="lastname" className="lastname-input input" value={lastname} onChange={(e)=>onChange(e)} required />
              <FiUser className="input-icn"/>
            </div>
            <Marged bottom="20px"/>
            <Button width='100%' className="btn-form" primary_xl>Ajouter</Button>
            <Marged bottom="10px"/>
          </Form>
        </div>                
      </PageContainer>
    </motion.div>
  )
}
    

export default Modal;