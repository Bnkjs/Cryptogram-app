import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { getMarket } from "Actions/crypto";
import { v4 as uuidv4 } from "uuid";
import RowMarket  from "components/Rowmarket";
import { Button } from "components/Button";
import animationFm from "utils/framer";
import { motion } from 'framer-motion';

const Market = ({ storedMarket,showModalBuyCrypto, setShowMarket }) => {
  const [nthElement, setNthElement] = useState(5)
  const storeMarket = storedMarket? storedMarket : null
 
  const marketSliced = storedMarket? storeMarket.slice(0,nthElement) : null

  const getDatasMarketAll = storedMarket? marketSliced.map((el,index)=>{
    return (
      <div key={uuidv4()}  className="link-redirect-buy">
          <RowMarket
          rank={el.market_cap_rank}
          image={el.image}
          name={el.name}
          nameid={el.symbol.toUpperCase()}
          price={el.current_price}
          evday_prct={el.price_change_percentage_24h.toFixed(4)}
          evday_prc={ el.price_change_24h.toFixed(4)}
          marketcap={el.market_cap}
          market_cap_prc={el.market_cap_change_24h}
          market_cap_prct={el.market_cap_change_percentage_24h}
          total_volum={el.total_volume}
          showModalBuyCrypto={showModalBuyCrypto}
          setShowMarket={setShowMarket}
        />
      </div>
    )
  }) : null
  

  useEffect(()=>{
      getMarket()
  },[nthElement])
 
  return(<>
      
      <motion.div
        variants={animationFm()}
        initial={animationFm(0,50).hidden}
        animate={animationFm(1,0).visible}
        transition={{ duration: .4}}          
        >
    <div className="landing-market-content">
      <header>
        <div className="header-text-market">
          <h1>Les prix des <br /> crypto-monnaies</h1>
          <p>La capitalisation boursière globale du marché crypto est de €2.09T</p>
        </div>
      </header>
      <h1>Tendance du marché</h1>
      <div id="col-info">
        <p className="col-i rank">#</p>
        <p className="col-i name">Nom</p>
        <p className="col-i price">Prix</p>
        <p className="col-i daypct">P.24h %</p>
        <p className="col-i dayprc">P.24 €</p>
        <p className="col-i market-t">Cap. Marché</p>
        <p className="col-i market-prc">Cap. Marché(24h)</p>
        <p className="col-i market-prct">Cap. Marché(24 %)</p>
        <p className="col-i volum">T. volume</p>
      </div>
      <div className="hr"></div>
         <div className="market-result">
         {getDatasMarketAll}
         </div>
      <div className="c-more-w">
        {nthElement !== 100?
         <Button 
         dark 
         className="c-more"
         onClick={()=> setNthElement(nthElement + 20)}
         >
           Voir plus
         </Button> : null
        }
      </div>
    </div>
    </motion.div>
  </>)
}


export const MarketStore = connect(
  (state) => ({
    state: state.cryptoReducer.coinsMarket
  })
)(Market)

export default Market