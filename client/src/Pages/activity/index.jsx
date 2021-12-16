import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import { RowOrder } from "../../components/order";
import { RowTransfert } from "../../components/transfert";

const Activity = ({ state, token }) => {
  const [dashState, getDashState] = useState(state) 
  const currentUserOrder = state? state.order : null
  const currentUserTransfert = state? state.transfert : null
  
  const getOrders = state? currentUserOrder.map((el, index) => {
    return (
      <RowOrder
        key={el.id}
        order_id={el.order_id}
        crypto_name={el.crypto_name}
        amount_converted_in_coin={el.amount_converted_in_coin}
        created_at={el.created_at}
      />
    )
  }) : null

  const getTransferts = state? currentUserTransfert.map((el, index) => {
    return (<>
      <RowTransfert
        transfert_id={el.transfert_id}
        crypto_name={el.crypto_name}
        created_at={el.created_at}
      />
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