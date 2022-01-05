import React,{ useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { addContact} from "../../Actions/contact";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { Marged } from "../../components/Marged";
import { Form } from "../../components/Form";
import { PageContainer } from "../PageContainer";
import { checkContentInput } from "../../utils/checkInput";
const initial = {
  visible: { opacity: 1, y: -50},
  hidden: { opacity: 0, y: 50 },
}

const Modal = ({ showModal, token }) => {
  const [existModal,setExistModal ] = useState(false)
  
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
      <PageContainer className="div-add-contact">
        <AnimatePresence>
        <motion.div
          variants={initial}
          initial={initial}
          animate={!existModal? "visible" : "hidden"}
          transition={{ duration: .2 }}          
          exit="hidden"
        >
        <div className="modal-box">
          <div className="close-add-c" onClick={()=> showModal(false)}></div>
          <h1 className="title-form">Ajouter un contact</h1>
            <Form role={'form'} className="form-contact" method="POST" onSubmit={(e)=> onSubmitForm(e)}>
              <Input role={'textbox'} type="text" placeholder="email" name="email" className="email-input input" value={email} onChange={(e)=>onChange(e)} required />
              <Marged bottom="20px"/>
              <Input role={'textbox'} type="text" placeholder="prénom" name="firstname" className="firstname-input input" value={firstname} onChange={(e)=>onChange(e)} required  />
              <Marged bottom="20px" />
              <Input role={'textbox'} type="text" placeholder="nom de famille" name="lastname" className="lastname-input input" value={lastname} onChange={(e)=>onChange(e)} required />
              <Marged bottom="20px"/>
              <Button role={'button'} width="100%" primary_xl>Ajouter</Button>  
            </Form>          
        </div>
             
        </motion.div>
      </AnimatePresence>
    </PageContainer> 
)}
    

export default Modal;