import React,{ useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../../components/Button/index";
import { Marged } from "../../components/Marged";
import { Form } from "../../components/Form";
import { PageContainer } from "../PageContainer";
import Select from 'react-select';
import { select } from "../../utils/select";
import { getMappedContact, getMappedCrypto } from "../../utils/map";
import { Input } from "../../components/Input/index";
import { makeTransfert } from "../../Actions/crypto";

const initial = {
  visible: { opacity: 1, y: -50},
  hidden: { opacity: 0, y: 50 },
}

const TransfertModal = ({ state, contact, token }) => {
  const [selectedOptionContact, setSelectedOptionContact] = useState(null);
  const [selectedOptionCrypto, setSelectedOptionCrypto] = useState(null);
  const selectedContactValue = selectedOptionContact ? selectedOptionContact.value : null 
  const selectedCryptoValue = selectedOptionCrypto ? selectedOptionCrypto.value.toLowerCase() : null
  const [inputs, setInputs] = useState({
    message: "",
    amount: "" 
  })
  const { message, amount } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const onSubmitForm = (e) => {
    if(selectedOptionContact && selectedOptionCrypto && message && amount ){
      e.preventDefault()
      makeTransfert(parseInt(selectedContactValue), selectedCryptoValue, message, parseInt(amount), token)
      setSelectedOptionContact("")
      setSelectedOptionCrypto("")
      setInputs({
        message: "",
        amount: "" 
      })
        
    } else{
      e.preventDefault()
    }
  }
  const defaultSelect = select("account","Mon portefeuillfe")
  const getContact = getMappedContact(contact)
  const getCrypto = getMappedCrypto(state)
  
  return (
      <PageContainer className="div-add-transfert">
        <AnimatePresence>
        <motion.div
          variants={initial}
          initial={initial}
          animate={"visible"}
          transition={{ duration: .2 }}          
          exit="hidden"
        >
        <div className="modal-box-transfert">
        <div className="close-add-c"></div>
          <div id="m-header">
            <h1 className="m-header-title">Transférez vos crypto-monnaies en 1 click!</h1>
            <p className="m-header-text">Il faut moins d'une minute pour remplir ce formulaire nécessaire au transfert</p>
          </div>
            <Form method="POST" onSubmit={(e)=> onSubmitForm(e)}>
              <div className="m-form-wrap">
                <div className="m-content-wrap">
                  <p>De</p>
                  <Select
                    defaultValue={selectedOptionContact}
                    placeholder="Choisissez le portefeuille"
                    onChange={setSelectedOptionContact}
                    options={defaultSelect}
                  />
                </div>
                <div className="m-content-wrap">
                  <p>À</p>
                  <Select
                    defaultValue={selectedOptionContact}
                    onChange={setSelectedOptionContact}
                    placeholder="Choisissez le contact"
                    options={getContact}
                    openMenuOnClick={()=> setSelectedOptionContact(selectedOptionContact)}
                  />
                </div>
              </div>
              <Marged bottom="20px"/>

              <div className="m-form-wrap">
                <div className="m-content-wrap">
                  <p>Crypto-monnaie</p>
                  <Select
                    defaultValue={selectedOptionCrypto}
                    onChange={setSelectedOptionCrypto}
                    placeholder="Choisissez la crypto-monnaie"
                    options={getCrypto}
                    openMenuOnClick={()=> setSelectedOptionCrypto(selectedOptionCrypto)}
                  />
                </div>
                <div className="m-content-wrap">
                  <p>Message du transfert</p>
                  <textarea type="text" placeholder="Joyeux Anniversaire 🎉🎉"  name="message" className="message-input" value={message} onChange={(e)=>onChange(e)} required />
                </div>
              </div>
              <div className="m-content-input">
                <span className="m-content-input-text">Montant du transfert</span>
                <Input 
                  className="m-amount-input" 
                  border_b type="number"
                  name="amount" 
                  value={amount} 
                  placeholder="Montant"
                  onChange={(e)=>onChange(e)} required
               />
              </div>
              <Button width="100%" primary_xl>Effectuer le transfert</Button>  
            </Form>          
        </div>          
        </motion.div>
      </AnimatePresence>
    </PageContainer> 
)}
    

export default TransfertModal;