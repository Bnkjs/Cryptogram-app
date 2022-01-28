import React from "react";

const Board = ({state,storedUserInvestment, storedUserTransfert, storedContact,storedUserBalance, storedCrypto}) =>{
  
  return(<>
      <div className="recap">
          <div className="circle-balance">
              <h3>{parseFloat(storedUserBalance).toFixed(2)} €</h3>
               <p>
                  {storedCrypto? storedCrypto.map((crypto,index) => 
                    {if(index === 0)
                      {
                        return crypto.crypto_name
                      }}) : null }
               </p>
            </div> 
        <div className="header-recap">
          <h4>{state? state.user.username : null}</h4>
          <div className="col-header">
            <div className="col-recap"> 
              <h4>{storedUserInvestment === null? 0 : storedUserInvestment.length}</h4>         
              <p>
                {storedUserInvestment <= 1 ?
                'Crypto' : 'Cryptos'
                }
                </p>
            </div>
            <div className="col-recap">
              <h4>{storedUserTransfert}</h4>
              <p>{storedUserTransfert <= 1 ?
                "Transfert" : "Transferts"
                }
              </p>
            </div>
            <div className="col-recap">
              <h4> 
                {
                storedContact === null? 0 : storedContact.length
                }
              </h4>
              <p>{storedContact <= 1 ?
                "Contact" : "Contacts"
                  }
              </p>
            </div>                 
          </div>
        </div>         
      </div>
    </>
  )
}

export default Board