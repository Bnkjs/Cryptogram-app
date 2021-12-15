import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { getMarket } from "../../Actions/crypto";
import { RowMarket } from "../../components/market";

const Market = ({ state }) => {
  const [market, setMArket] = useState(false)
  const storeMarket = state? state : null

  const getDatasMarket = state? storeMarket.map((el,index)=>{
    return (
      <RowMarket
        key={el.id} 
        rank={el.market_cap_rank}
        image={el.image}
        name={el.name}
        nameId={el.symbol}
        price={el.current_price}
        evday={el.price_change_percentage_24h}
        marketcap={el.market_cap}
        offer={el.total_volume}
      />
    )
  }) : null

  useEffect(()=>{
    const cryptoTracker = setInterval(() => {
      getMarket()
      setMArket(()=> !market)
    },5000)
    return () => clearInterval(cryptoTracker)
  },[market])
 
  return(<>
    <h1>Market</h1>
    {getDatasMarket}
  </>)
}


export const MarketStore = connect(
  (state) => ({
    state: state.cryptoReducer.cryptoInfos
  })
)(Market)

export default Market