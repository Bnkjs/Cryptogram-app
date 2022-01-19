import React,{useEffect, useState} from "react";
import ShowDetail from "components/ShowDetail";
import { FiLogIn } from "react-icons/fi";

export const RowOrder =  (props) =>{
  const [showDetail, setShowDetail] = useState(false)
  
  useEffect(()=>{
  },[showDetail])

  return(
    <div id="r-o-container">
      <div className="c-row-container key" key={props.key} onClick={()=> setShowDetail(!showDetail)}>
        <div className="o-t-order"><FiLogIn/></div>
        <p className="o-name">{props.crypto_name}</p>
        <p className="o-date">{props.created_at}</p>
        <p className="o-total">{props.amount_in_user_currency} €</p>
        <p className="o-id">{props.order_id}</p>     
      </div>
      <div className="toggle-s-d">
        {showDetail &&
          <ShowDetail spanContactOrderId='Id Achat' type="achat" total={props.amount_in_user_currency} date={props.created_at} transactionId={props.order_id} amount={props.amount_converted_in_coin}/>
        }
      </div>
  </div>)
}