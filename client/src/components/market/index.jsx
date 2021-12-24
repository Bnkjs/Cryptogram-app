import React from "react";
import { Button } from "../Button";

export const RowMarket =  (props) =>{

  return(<>
    <div className="c-row-container">
      <p className="c-rank">{props.rank}</p>
      <div className="c-img-name-id">
        <div className="img-c">
          <img className="c-img" src={props.image} alt="crypto-monnaie logo"/>
        </div>
        <p className="c-name">{props.name}</p>
        <p className="c-name-id">{props.nameid}</p>
      </div>
      <p className="c-price"> {props.price}</p>
      <p className="c-ev-day-prct">{props.evday_prct}</p>
      <p className="c-ev-day-prc">{props.evday_prc}</p>
      <p className="c-market-cap">{props.marketcap}</p>
      <p className="c-market-cap-prc">{props.market_cap_prc}</p>
      <p className="c-market-cap-prct">{props.market_cap_prct}</p>
      <p className="c-t-volum">{props.total_volum}</p>
     <Button dark className="btn-cta-market">Acheter</Button>
    </div>
   
  </>)
}