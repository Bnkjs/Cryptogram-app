import React,{ useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { Input } from "components/Input/index";
import { Button } from "components/Button/index";
import { Marged } from "components/Marged";
import { Form }from "components/Form";
import { PageContainer } from "../PageContainer";
import animationFm from "utils/framer";
import { buyCrypto } from "Actions/crypto";
import { FaArrowLeft } from "react-icons/fa";
import buy_svg from 'assets/buy.svg'
import ValidAction from "./validaction";


const Modal = ({ showModalBuyCrypto, storedMarket, token }) => {
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [inputs, setInputs] = useState({
    amount: "" 
  })
  const { amount } = inputs;
  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }
  const onChangeSelectCrypto = e => {
    setSelectedCrypto(e.target.value)
  }
  const [showValidModal, setShowValidModal] = useState(false)
  const coinCurrentPrice = storedMarket? storedMarket.filter(el => {
        if(el.id === selectedCrypto){
          return el
        }
  }) : null
  const amountConvertedInCoin = selectedCrypto? amount : null

  const onSubmitForm = (e) => {
    e.preventDefault()
    buyCrypto(selectedCrypto, amountConvertedInCoin, token)
    showModalBuyCrypto(false) 
  }
  const validAction = (e) =>{
    e.preventDefault()
    setShowValidModal(!showValidModal)
  } 

  useEffect(()=>{
  },[amount])
  
  return (
        <motion.div
          variants={animationFm()}
          initial={animationFm(0,50).hidden}
          animate={animationFm(1,0).visible}
          transition={{ duration: .4 }}          
        >
         {showValidModal && amount !== "" && 
          <ValidAction
          onSubmitForm = {onSubmitForm}
          exitValidModal={setShowValidModal}
          title={"Confirmer l'achat"} 
          crypto={selectedCrypto}
          amount={amount}
          amountInCoin ={amount / coinCurrentPrice[0].current_price}
          text={`Vous êtes sur le point d'acheter ${parseFloat(amount / coinCurrentPrice[0].current_price).toFixed(8)} ${selectedCrypto}`}/>
          }
        <PageContainer id="form-container">
            <div className="box-form form-transfert" id='app'>
              <div className="close-modal" onClick={()=> showModalBuyCrypto(false)}>
                <FaArrowLeft/>
              </div>
              <div className="header-form">
              <img className="cubes_form" src={buy_svg} alt="logo crypto-monnaie de l'ethereum de couleur dégradé bleue au dessus d'un cube blanc" />
                <div className="text-header-form">
                  <h1 className="title-form title-signup"><span className="hr-header hr-signup"></span> Effectuez achat </h1>
                  <h2>Profitez <br/> des meilleurs taux du marché.</h2>
                  <p>C'est simple, rapide et votre portefeuille numerique n'attend que ça!</p>
                </div>
              </div>
            <Form className="form-signup" >
                <label>Quelle crypto-monnaie voulez-vous acheter?
                  <select className="select-input" onChange={(e)=> onChangeSelectCrypto(e)}>
                    <option defaultValue="grapefruit">Selectionner une crypto-monnaie</option>
                    {storedMarket? storedMarket.map((info,index) => {
                      return <option 
                      key={index} 
                      value={info.id}>
                            {info.id.toUpperCase() + '-' + info.symbol.toUpperCase()}
                      </option>
                    }) : null }  
                  </select>   
                </label>
                <Marged bottom="20px"/>
                <label>Pour quel Montant?
                  <Input 
                    bg='#F4F6F8' 
                    type="number" 
                    name="amount" 
                    placeholder="Indiquer le montant en € 🇪🇺"
                    onChange={(e)=> onChange(e)}
                    value={amount}
                    autoComplete="off"
                    required={true}
                    />
                </label>
                <Marged bottom="20px"/>
                <div className="amount-converted-wrap">
                  {selectedCrypto ?
                  <div className="row-converted">      
                    <div className="a-c-box">
                          <p>
                            <span className="market-price">
                              1 {coinCurrentPrice[0].symbol.toUpperCase()} = {coinCurrentPrice[0].current_price} € 🇪🇺
                            </span>
                          </p>
                      <p>Recevez</p> 
                        <p className="amount-result" id='selected'>
                          {amount / coinCurrentPrice[0].current_price} 
                          <span className="a-c-result">
                            {coinCurrentPrice[0].symbol.toUpperCase()} 
                            <img src={coinCurrentPrice[0].image} alt="" />
                          </span>
                        </p> 
                    </div>
                  </div>
                  :
                  null
                }
                </div>
                <Marged bottom="20px"/>
                <a href="#re-up">
                  <Button 
                    width="100%" 
                    primary_xl
                    onClick={(e)=> validAction(e) }
                    >
                    Acheter
                  </Button> 
                </a>  
            </Form>
            </div>                
          </PageContainer>
    </motion.div>  
  )
}
    

export default Modal;