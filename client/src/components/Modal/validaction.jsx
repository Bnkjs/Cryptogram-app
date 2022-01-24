import { Button } from "components/Button";
import { motion } from "framer-motion";
import React, {useState} from "react";
import { BiWallet } from "react-icons/bi";
import animationFm from "utils/framer";

const ValidAction =  ({title, text, crypto ,amount,amountInCoin,exitValidModal, onSubmitForm}) => {

  const exitModal = (boolean) => {
    exitValidModal(boolean)
  }
  return(<>
       
          <div id="modal-valid">
            <div className="overlay"></div>
            <motion.div
              variants={animationFm()}
              initial={animationFm(0,50).hidden}
              animate={animationFm(1,0).visible}
              transition={{ duration: .4 }}
              className="modal-valid"
              id="re-up"        
            >
           
              <div className="header-modal">
                <h1>{title}</h1>
                <h2>Achat {crypto}</h2>
                </div>
                <div className="icn-payment-infos">
                  <div className="wrap-content">
                    <div className="col-info">
                      <div className="col-icon">
                        <BiWallet className="icon"/>
                      </div>
                      <div className="col-action">
                        <p>Dépensez</p>
                        <p>{amount}€</p>
                      </div>
                    </div>
                    <div className="col-info">
                      <div className="col-icon">
                        <BiWallet className="icon"/>
                      </div>
                      <div className="col-action">
                        <p>Recevez</p>
                        <p>{parseFloat(amountInCoin).toFixed(5)} {crypto}</p>
                      </div>
                    </div>
                    <div className="col-info">
                      <div className="col-icon">
                        <BiWallet className="icon"/>
                      </div>
                      <div className="col-action">
                        <p>Paiement</p>
                        <p>CB</p>
                      </div>
                    </div>
                  
                </div>
              </div>
              <div className="content">
                  <p>{text}</p>
              </div>
              <div className="recap-order">
                <div className="r-crypto">
                  <p>{parseFloat(amountInCoin).toFixed(8)}</p>
                  <p>{crypto}</p>
                </div>
                <div className="hr"></div>
                <div className="r-service-pay">
                  <div className="r-fee">
                    <p>Frais de d'achat</p>
                    <p> Gratuit <span role='img'>😎</span></p>
                  </div>
                  <div className="r-pay">
                    <p>Total</p>
                    <p>{amount}€</p>
                  </div>
                </div>
              </div>
              <div className="btn-actions">
                <Button dark onClick={()=> exitModal(false)}>Revenir</Button>
                <a href="#app">
                 <Button gradient onClick={(e)=> onSubmitForm(e)}>
                   Confirmer l'achat
                </Button>
                </a>
              </div>
            </motion.div> 
          </div> 
  </>)
}
export default ValidAction