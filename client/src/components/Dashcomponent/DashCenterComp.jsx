import React,{useState, useEffect} from "react";
import { motion } from "framer-motion";
import animationFm from "utils/framer";
import Board from "components/board";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/react-flicking/dist/flicking-inline.css";
import { Marged } from "components/Marged";
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineSwipe } from "react-icons/md";
import { ActivityStore } from "Pages/activity";
import UserCrypto from "components/UserCrypto";

export const DashCenterPage = ({state,storedCrypto,storedUserTransfert,storedContact,storedUserBalance, storedUserInvestment,storedMarket,userCryptoWallet}) => {
  const [nthElement, setNthElement] = useState(10)
  const marketSliced = storedMarket? storedMarket.slice(0,nthElement) : null
  const getUSercrypto = userCryptoWallet? userCryptoWallet.map((el, index)=>{
    return <div key={index}>
        <UserCrypto
          crypto_name={el.crypto_name}
          total_quantity={el.total_amount_of_converted_coin}
          total_amount_in_user_currency={el.total_amount_of_coin_in_user_currency}
          symbol={el.crypto_id_name}
        />
    </div>
  }) : null
  useEffect(()=>{
  },[storedUserTransfert,storedContact,storedUserBalance,storedUserInvestment,userCryptoWallet])
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
              storedCrypto={userCryptoWallet}
              state={state}
          />
          <div className="crypto-market-vogue">
            <h2>Les cryptos-monnaies les plus populaires <span role="img">🔥🔥</span> </h2>
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
          <div className="user-crypto">
            {userCryptoWallet &&
              userCryptoWallet.length > 0?
              <>
                <h1>Vos cryptos <span role={'img'}>🤩</span></h1>
                <div id="uc-container">
                  {getUSercrypto}
                  </div>
              </> : <h2>Votre portefeuille est vide.. <span role={'img'}>🙊</span> </h2>
            }
          </div>     
          <div className="d-activity-page">
            <ActivityStore/>
          </div>
         
        </div>
  
      </motion.div>
  )
}