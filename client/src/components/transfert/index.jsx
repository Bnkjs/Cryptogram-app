import React from "react";

export const RowTransfert =  (props) =>{

  return(
    <div className="c-row-container key" key={props.key}>
      <p className="o-type o-t-transfert">Transfert</p>
      <p className="o-name">{props.crypto_name}</p>
      <p className="o-date">{props.created_at}</p>
      <p className="o-total">{props.amount_in_user_currency} €</p>
      <p className="o-id">{props.transfert_id}</p>
    </div>
  )
}