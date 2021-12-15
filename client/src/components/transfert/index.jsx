import React from "react";

export const RowTransfert =  (props) =>{

  return(<div className="c-row-container" key={props.key}>
     <h4 className="order-item"> n° identifiant du transfert: </h4>
      <p>{props.transfert_id}</p>
      <h4 className="order-item"> Nom de la cryptomonnaie: </h4>
      <p>{props.crypto_name}</p> 
      <p className="order-item"> crée le: {props.created_at}</p>
      <hr />
    </div>
   
  )
}