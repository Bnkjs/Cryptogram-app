import React from "react";
import { FcAddressBook } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { Button } from "components/Button";
import { DashLeftAside } from "./DashLeftAside";
import { motion } from "framer-motion";
import animationFm from "utils/framer";
import Board from "components/board";
import Market from "Pages/market";
import { ActivityStore } from "Pages/activity";
import { MarketStore } from "Pages/market";

export const DashCenterPage = ({state,storedCrypto,storedUserTransfert,storedContact,storedUserBalance, storedUserInvestment}) => {
  
  return(
      <motion.div
        variants={animationFm()}
        initial={animationFm(0,50).hidden}
        animate={animationFm(1,0).visible}
        transition={{ duration: .4 }}
        className="center-content"         
      >
        <div className="c-h-wrap"> 
          <h1>Tableau de bord</h1>
          <Board 
              storedUserInvestment={storedUserInvestment}
              storedContact={storedContact}
              storedUserTransfert={storedUserTransfert}
              storedUserBalance={storedUserBalance}
              storedCrypto={storedCrypto}
              state={state}
          />

        </div>

           
          
      </motion.div>
  )
}