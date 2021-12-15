import React from "react";

export const RowMarket =  (props) =>{

  return(<>
    <div className="c-row-container">
      <p className="c-rank">#: {props.rank}</p>
      <img width={'20px'} src={props.image} alt="crypto-monnaie logo"/>
      <p className="c-name">Nom: {props.name}</p>
      <p className="c-name-id">{props.nameid}</p>
      <p className="c-price">Prix: {props.price}</p>
      <p className="c-ev-day">24%: {props.evday}</p>
      <p className="c-market-cap">Cap marché: {props.marketcap}</p>
      <p className="c-offer-c">offre: {props.offer}</p>
    </div>
    <hr />
  </>)
}