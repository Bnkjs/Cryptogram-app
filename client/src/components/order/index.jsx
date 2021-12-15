import React from "react";

export const RowOrder =  (props) =>{

  return(<div className="c-row-container key" key={props.key}>
      <h4 className="order-item"> n° identifiant de l'achat: </h4>
      <p>{props.order_id}</p>
      <h4 className="order-item"> Nom de la cryptomonnaie: </h4>
      <p>{props.crypto_name}</p> 
      <p className="order-item"> Montant: {props.amount_converted_in_coin} {props.crypto_id_name}</p>
      <p className="order-item"> Acheté le: {props.created_at}</p>
      <hr />
    </div>
   
  )
}