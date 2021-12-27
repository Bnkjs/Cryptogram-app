import React from "react";

export const RowOrder =  (props) =>{

  return(
    <div className="c-row-container key" key={props.key}>
      <p className="o-rank">{props.rank}</p>
      <p className="o-type o-t-order">ACHATS</p>
      <p className="o-name">{props.crypto_name}</p>
      <p className="o-amount"> {props.amount_converted_in_coin}</p>
      <p className="o-total">{props.amount_in_user_currency} €</p>
      <p className="o-id">{props.order_id}</p>
      <p className="o-date">{props.created_at}</p>
    </div>
   
  )
}