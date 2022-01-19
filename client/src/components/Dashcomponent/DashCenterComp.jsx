import React,{useState, useEffect} from "react";
import { motion } from "framer-motion";
import animationFm from "utils/framer";
import Board from "components/board";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
// Or, if you have to support IE9
import "@egjs/react-flicking/dist/flicking-inline.css";
import { useSelector } from "react-redux";
import { Marged } from "components/Marged";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineSwipe } from "react-icons/md";
import { ActivityStore } from "Pages/activity";
import { getAllContact } from "Actions/contact";

export const DashCenterPage = ({state,token,storedCrypto,storedUserTransfert,storedContact,storedUserBalance, storedUserInvestment}) => {
  const [nthElement, setNthElement] = useState(10)
  const storedMarket = useSelector(state => state.cryptoReducer.coinsMarket)
  const marketSliced = storedMarket? storedMarket.slice(0,nthElement) : null
  useEffect(()=>{
  },[storedUserTransfert,storedContact,storedUserBalance,storedUserInvestment])
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
          <div className="crypto-market-vogue">
            <h2>Les cryptos-monnaies les plus populaires 🔥🔥 </h2>
            <Flicking
                align="prev"
                circular={true}
            >
                {storedMarket? marketSliced.map((el,index)=>{
                    return(
                        <div className="wrap-crypto" key={index}>
                          <h4 className="crypto-name">
                          <span><FaEthereum/></span> {el.name}
                          </h4>
                          <Marged bottom='2px'/>
                          <p className="crypto-id">{el.symbol.toUpperCase()}</p>
                          <Marged bottom='5px'/>
                          <p className="crypto-price">{el.current_price} €</p>
                          <Marged bottom='10px'/>
                          {el.price_change_percentage_24h < 0?
                          <p className="crypto-rate-down">{el.price_change_percentage_24h} %<span><FiTrendingDown/></span></p>
                          :
                          <p className="crypto-rate-up">{el.price_change_percentage_24h} % <span><FiTrendingUp/></span></p>
                        }
                      </div>)
                  }) : null
                }
            </Flicking>
          </div>
          <div className="c-arrows">
              <MdOutlineSwipe className="swipe"/>
          </div>
          
          <div className="d-activity-page">
            <ActivityStore/>
          </div>
        </div>
  
      </motion.div>
  )
}