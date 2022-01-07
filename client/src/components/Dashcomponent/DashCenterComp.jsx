import React from "react";
import { FcAddressBook } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
import { FcCurrencyExchange } from "react-icons/fc";
import { Button } from "components/Button";
export const DashCenterPage = ({storedContact,storedUserBalance, storedUserInvestment}) => {
  return(
    <div className="center-content">

            <div className="div-recap">
                <header className="h-center-content">
                  <div className="balance-row">
                     <div className="h-b-row" >
                      <p className="text-h">Solde total</p>
                      <FcMoneyTransfer className="img-h"/>
                     </div>
                    <h3 className="balance-h"> ≈ {parseFloat(storedUserBalance).toFixed(2)} €</h3>
                    <p className="balance-small"> ({storedUserBalance} €)</p>
                  </div>
                  <div className="btn-cta">
                    <Button gradient>Acheter</Button>
                    <Button dark>Transferer</Button>
                  </div>
                </header>

                <div className="row-recap">
                  <div className="invest-r card-r">
                    <div className="h-b-row">
                      {storedUserInvestment <= 1 ?
                        <p>Actif</p> : <p>Actifs</p>
                      }
                      <FcCurrencyExchange className="img-h"/>
                    </div>
                    <h3 className="stored-v">{storedUserInvestment}</h3>
                  </div>
                  <div className="contact-r card-r">
                    <div className="h-b-row">
                      {storedContact <= 1 ?
                        <p>Contact</p> : <p>Contacts</p>
                      }
                      <FcAddressBook className="img-h"/>
                    </div>
                    <h3 className="stored-v">{storedContact}</h3>
                  </div>
                </div>
                <div className="row-recap"></div>
              </div>
            </div>
  )
}