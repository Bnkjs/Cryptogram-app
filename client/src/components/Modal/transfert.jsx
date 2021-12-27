import React,{useEffect, useState} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/index";
import { Marged } from "../../components/Marged";
import { Form } from "../../components/Form";
import { PageContainer } from "../PageContainer";
import { checkContentInput } from "../../utils/checkInput";
import { myNotyf } from "../notification/noyf";
import { v4 as uuidv4 } from "uuid";
import Select from 'react-select';
import { select } from "../../utils/select";

const initial = {
  visible: { opacity: 1, y: -50},
  hidden: { opacity: 0, y: 50 },
}

const TransfertModal = ({ activitie, contact, token }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const currentUserTransfert = activitie? activitie : null
  const currentUserContact = contact? contact : null 
  const [inputs, setInputs] = useState({
    message: "" 
  })
  const { message } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const onSubmitForm = (e) => {
    const checkDescription = checkContentInput(message)
    if(!checkDescription ){
      myNotyf.error("Le champs ne peut pas être vide")
    } else{
      e.preventDefault()
      myNotyf.success('yes')
    }
  }
  const defaultSelect = select("account","Mon compte")
  const getContact = contact? contact.map( el => {
    const options = {
      value: el.first_name + ' ' + el.last_name.toUpperCase(), 
      label: el.first_name + ' ' + el.last_name.toUpperCase() }
    return options
  }) : null
  console.log(activitie);
  return (
      <PageContainer className="div-add-contact">
        <AnimatePresence>
        <motion.div
          variants={initial}
          initial={initial}
          animate={"visible"}
          transition={{ duration: .2 }}          
          exit="hidden"
        >
        <div className="modal-box">
          <h1 className="title-form">Effectuer un transfert</h1>
            <Form method="POST" onSubmit={(e)=> onSubmitForm(e)}>
              <p>De</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={defaultSelect}
              />
              <p>À</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                placeholder="Choisissez le contact"
                options={getContact}
                openMenuOnClick={()=> setSelectedOption(selectedOption)}
              />
              <Marged bottom="20px"/>
              <p>Crypto-monnaie</p>
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                placeholder="Choisissez le contact"
                options={getContact}
                openMenuOnClick={()=> setSelectedOption(selectedOption)}
              />
              <Marged bottom="20px"/>
              <p>Message du transfert</p>
              <Input type="text" placeholder="Joyeux Anniversaire 🎉🎉"  name="message" className="message-input" value={message} onChange={(e)=>onChange(e)} required />
              <Marged bottom="20px"/>
              <Button width="100%" primary_xl>Effectuer le transfert</Button>  
            </Form>          
        </div>          
        </motion.div>
      </AnimatePresence>
    </PageContainer> 
)}
    

export default TransfertModal;