import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMarket } from "../../Actions/crypto";
import { RowMarket } from "../../components/market";
import { PageContainer } from "../../components/PageContainer";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../../components/Button";

const Market = ({ state }) => {
  const [showMarket, setShowMarket] = useState(false)
  const storeMarket = state? state : null
 
  const getDatasMarketAll = state? storeMarket.map((el,index)=>{
    return (
      <Link key={uuidv4()}  className="link-redirect-buy" to='/buy_crypto'>
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
        />
      </Link>
    )
  }) : null
  
  const getDatasMarketFirstTen = state? storeMarket.map((el)=>{
    if(el.market_cap_rank === 1 || el.market_cap_rank <= 10){
      return (
        <Link key={uuidv4()}  className="link-redirect-buy" to='/buy_crypto'>
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
          />
        </Link>
      )
    }
  }) : null

  useEffect(()=>{
      getMarket()
  },[showMarket])
 
  return(<>
    <PageContainer>
      <h1>Tendance du marché</h1>
      <div id="col-info-crypto">
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
      {!showMarket?
        getDatasMarketFirstTen : getDatasMarketAll
      }
      <div className="c-more-w">
        <Button 
        black 
        className="c-more"
        onClick={()=> setShowMarket(!showMarket)}
        >
          Voir plus
        </Button>
      </div>
    </PageContainer>
  </>)
}


export const MarketStore = connect(
  (state) => ({
    state: state.cryptoReducer.cryptoInfos
  })
)(Market)

export default Market