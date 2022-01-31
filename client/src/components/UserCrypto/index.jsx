import React from "react";
import './style.scss'
import { BiCoin } from "react-icons/bi";

const UserCrypto = (props) => {

  return(
      <div className="uc-card">
        <div className="coin-icn">
          <BiCoin/>
        </div>
        <p className="uc-name">{props.crypto_name}</p>
        <p className="uc-quantity">{props.total_quantity} <span>{props.symbol}</span></p>
        <p className="uc-total">{props.total_amount_in_user_currency} €</p>
      </div>
  )
}



export default UserCrypto