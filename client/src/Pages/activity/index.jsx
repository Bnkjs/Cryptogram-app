import React, { useEffect,useState } from "react";
import { connect } from "react-redux";
import activity from "Actions/activity";
import { RowOrder } from "components/order";
import { RowTransfert } from "components/transfert";
import { PageContainer } from "components/PageContainer";
import { v4 as uuidv4 } from "uuid";
import './style.scss';
import binoculars from 'assets/binoculars.svg';
import animationFm from "utils/framer";
import { motion } from "framer-motion";

const Activity = ({ state, token }) => {
  const [dashState, getDashState] = useState(state) 
  const currentUserOrder = state? state.order : null
  const currentUserTransfert = state? state.transfert : null
  const currentUserTransfertLength = state? state.transfert.length : null
  const currentUserOrderLength = state? state.order.length : null

  const getOrders = state? currentUserOrder.map((el, index) => {

    return (
      <div key={uuidv4()}>
        <RowOrder
          key={el.id}
          order_id={el.order_id}
          crypto_name={el.crypto_name}
          amount_in_user_currency={el.amount_in_user_currency}
          amount_converted_in_coin={el.amount_converted_in_coin}
          created_at={el.created_at}
        />
      </div>  
    )
  }) : null

  const getTransferts = state? currentUserTransfert.map((el, index) => {
    return (
      <div key={uuidv4()}>
        <RowTransfert
          key={el.id}
          amount_converted_in_coin={el.amount_converted_in_coin}
          amount_in_user_currency={el.amount_in_user_currency}
          transfert_id={el.transfert_id}
          crypto_name={el.crypto_name}
          created_at={el.created_at}
        />
      </div>
      )
  }) : null

  const getActivity = () => activity(token)
  useEffect(()=>{
    getActivity()
  },[])

  return(
      <motion.div
        variants={animationFm()}
        initial={animationFm(0,50).hidden}
        animate={animationFm(1,0).visible}
        transition={{ duration: .4 }}        
      >
        
        <PageContainer id="activity-container">
          <div className="activity-wrap">
            <h1>Récente activité</h1>
            <div id="col-info-activity">
              <p className="a-type">Type</p>
              <p className="a-date">Date achat</p>
              <p className="a-total">Montant</p>
              <p className="a-id">Ref achat</p>
            </div>
            <div className="hr"></div>
              {currentUserOrderLength === 0 || currentUserOrderLength === null?
                 null
                : getOrders.reverse()
              }
            {currentUserTransfertLength === 0 || currentUserTransfertLength === null?
                null
                : getTransferts.reverse()
              }
              {(currentUserOrderLength === 0 || currentUserOrderLength === null) && (currentUserTransfertLength === 0 || currentUserTransfertLength === null )?
                <motion.div
                  variants={animationFm()}
                  initial={animationFm(0,50).hidden}
                  animate={animationFm(1,0).visible}
                  transition={{ duration: .7, delay: .25 }}          
                  >
                  <div className="door-activity">
                    <h3>Vous n'avez pas encore d'activité...</h3>
                      <div className="illu">
                        <div className="stars-ac" alt="" />
                        <img className="bino-ac" src={binoculars} alt="" />
                      </div>
                  </div> 
               </motion.div>: null
              } 
          </div>   
        </PageContainer>  
    </motion.div>
  )
}

export const ActivityStore = connect(
  (state) => ({
    state: state.activityReducer.activityInfos
  })
)(Activity)
export default Activity