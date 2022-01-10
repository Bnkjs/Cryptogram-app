import React,{ useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "../../components/Button/index";
import { Marged } from "../../components/Marged";
import { Form } from "../../components/Form";
import { PageContainer } from "../PageContainer";
import { makeTransfert } from "../../Actions/crypto";
import './style.scss'
import 'Pages/signup/style.scss'
import animationFm from "utils/framer";
import { FaArrowLeft } from "react-icons/fa";
import transfert_svg from 'assets/transfert.svg'

const TransfertModal = ({ state, token, showModalTransfert, storedContactDatas, storedCrypto }) => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const selectedCryptoValue = selectedCrypto ? selectedCrypto.toLowerCase() : null
  const [inputs, setInputs] = useState({
    message: "",
    amount: "" 
  })
  const { message, amount } = inputs;
  
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const onChangeSelectContact = e => {
    setSelectedContact(e.target.value)
  }
  const onChangeSelectCrypto = e => {
    setSelectedCrypto(e.target.value)
  }
  const onSubmitForm = (e) => {
    if(selectedContact && selectedCrypto && message && amount ){
      e.preventDefault()
      makeTransfert(parseInt(selectedContact), selectedCryptoValue, message, parseInt(amount), token)
      setSelectedContact("")
      setSelectedCrypto("")
      setInputs({
        message: "",
        amount: "" 
      })    
    } else{
      e.preventDefault()
    }
  }

  useEffect(()=>{
  },[storedContactDatas])

  return (<>
         <motion.div
       variants={animationFm()}
       initial={animationFm(0,50).hidden}
       animate={animationFm(1,0).visible}
       transition={{ duration: .4 }}          
    >
      <PageContainer id="form-container">
        <div className="box-form form-transfert">
          <div className="close-modal" onClick={()=> showModalTransfert(false)}>
            <FaArrowLeft/>
          </div>
          <div className="header-form">
          <img className="cubes_form" src={transfert_svg} alt="deux flèches de sens opposées avec un dégr&dé bleue au dessus d'un cube blanc" />
            <div className="text-header-form">
              <h1 className="title-form title-signup"><span className="hr-header hr-signup"></span> Effectuez un transfert</h1>
              <h2>À vos contacts <br/> partout dans le monde.</h2>
              <p>Vos crypto-monnaies transférées à vos contacts en quelques cliques!</p>
            </div>
          </div>
        <Form className="form-signup" method="POST" onSubmit={(e)=> onSubmitForm(e)}>
          <label>De quel compte?
              <select className="select-input">
                <option defaultValue="#" disabled={false}>Mon compte</option>
              </select>   
            </label>
            <Marged bottom="20px"/>
            <label>Quelle crypto-monnaie voulez-vous envoyer?
              <select className="select-input" onChange={(e)=> onChangeSelectCrypto(e)}>
                <option defaultValue={null} >Selectionner une crypto-monnaie</option>
                {storedCrypto? storedCrypto.map((info,index) => {
                  return <option 
                  key={index} 
                  value={info.crypto_name}>
                        {info.crypto_name + ' ' +  info.crypto_id_name}
                  </option>
                }) : null }  
              </select>   
            </label>
            <Marged bottom="20px"/>
            <label>Qui est le destinataire?
              <select className="select-input" onChange={(e)=> onChangeSelectContact(e)}>
                <option defaultValue="grapefruit">Selectionner un contact</option>
                {storedContactDatas? storedContactDatas.map((info,index) => {
                  return <option 
                  key={index} 
                  value={info.contact_id}>
                        {info.first_name + ' ' + info.last_name}
                  </option>
                }) : null }  
              </select>   
            </label>
            <Marged bottom="20px"/>
            <label>Pour quel montant?
              <input 
                bg='#F4F6F8' 
                type="number" 
                name="amount"
                className="select-input"
                placeholder="Indiquez un montant en euro €"
                onChange={(e)=> onChange(e)}
                autoComplete="off"
                value={amount}
                />
            </label> 
            <Marged bottom="20px"/>
            <label>Quel est votre message?
              <textarea 
                className="input-message" 
                type="text" 
                name="message" 
                placeholder="Cadeau d'anniversaire 🎉🎉.."
                onChange={(e)=> onChange(e)}
                value={message}
              />
            </label>
            <Marged bottom="20px"/>
            <Button width="100%" primary_xl>Effectuer le transfert</Button>   
        </Form>
        </div>                
      </PageContainer>
    </motion.div>  
     </>
    )
}
    

export default TransfertModal;