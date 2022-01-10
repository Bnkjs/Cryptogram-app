import React from "react";
import { FcAddressBook } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { Button } from "components/Button";
import { DashLeftAside } from "./DashLeftAside";
export const DashCenterPage = ({storedContact,storedUserBalance, storedUserInvestment}) => {
  return(
    <div className="center-content">
       
        <div className="recap">
          <h1>Tableau de bord</h1>
          <h3 className="balance-h"> ≈ {parseFloat(storedUserBalance).toFixed(2)} €</h3>
          <p className="balance-small"> ({storedUserBalance} €)</p>
          <div className="header-recap">

          </div>
       
        {storedUserInvestment <= 1 ?
          <p>Actif</p> : <p>Actifs</p>}
        {storedUserInvestment}         
        </div>
              
      <aside className="aside-right-dash">dsdfdfdfdssfdfsddfs</aside>
    </div>
  )
}