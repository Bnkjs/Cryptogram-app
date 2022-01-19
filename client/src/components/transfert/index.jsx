import ShowDetail from "components/ShowDetail";
import React,{ useState, useEffect } from "react";
import { TiArrowSync } from "react-icons/ti";

export const RowTransfert =  (props) =>{
  const [showTransfertDetail, setShowTrasnfertDetail] = useState(false)

  useEffect(()=>{
  },[showTransfertDetail])
  
  return(
    <div id="r-o-container">
      <div className="c-row-container key" key={props.key} onClick={()=> setShowTrasnfertDetail(!showTransfertDetail)}>
        <div className="o-t-transfert">
          <TiArrowSync/>
        </div>
        <p className="o-name">{props.crypto_name}</p>
        <p className="o-date">{props.created_at}</p>
        <p className="o-total">{props.amount_in_user_currency} €</p>
        <p className="o-id">{props.transfert_id}</p>
      </div>
        <div className="toggle-s-d">
        {showTransfertDetail &&
          <ShowDetail spanContactContactWallet="adress wallet" total={props.amount_in_user_currency} date={props.created_at} transactionId={props.transfert_id} amount={props.amount_converted_in_coin}/>
        }
      </div>
    </div>
  )
}