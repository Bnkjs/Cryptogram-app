import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import activity from "../../Actions/activity";

const Activity = ({ state, token }) => {
  const [dashState, getDashState] = useState(state) 
  const currentUserOrder = state? state.order : null
  const currentUserTransfert = state? state.transfert : null
  
  const getOrders = state? currentUserOrder.map((el, index) => {
    return (<>
      <h4 className="order-item" key={index}> n° identifiant de l'achat: </h4>
      <p>{el.order_id}</p>
      <h4 className="order-item" key={index}> Nom de la cryptomonnaie: </h4>
      <p>{el.crypto_name}</p> 
      <p className="order-item" key={index}> Montant: {el.amount_converted_in_coin} {el.crypto_id_name}</p>
      <p className="order-item" key={index}> Acheté le: {el.created_at}</p>
      <hr />
    </>)
  }) : null

  const getTransferts = state? currentUserTransfert.map((el, index) => {
    return (<>
      <h4 className="order-item" key={index}> n° identifiant du transfert: </h4>
      <p>{el.transfert_id}</p>
      <h4 className="order-item" key={index}> Nom de la cryptomonnaie: </h4>
      <p>{el.crypto_name}</p> 
      <p className="order-item" key={index}> crée le: {el.created_at}</p>
    </>)
  }) : null

  useEffect(()=>{
    activity(token)
  },[dashState])

  return(
    <>
        <div>
          <h1>Récente activité</h1>
          <hr />  
           <h3>Achat</h3>
            {currentUserOrder === null?
              <p>vous n'avez pas encore effectué d'achat </p>
              : getOrders
            }
           <hr />
           <h3>Transferts</h3>
           {currentUserTransfert === null?
              <p>vous n'avez pas encore effectué de transfert </p>
              : getTransferts
            }
        </div>
    </>
  )
}

export const ActivityStore = connect(
  (state) => ({
    state: state.activityReducer.activityInfos
  })
)(Activity)
export default Activity