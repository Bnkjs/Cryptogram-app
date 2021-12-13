import React,{useEffect, useState} from "react";
import { connect } from "react-redux";

const Dashboard = ({ state }) =>{

  const currentUserEmail = state? state.user.email : null
  const currentUserName = state? state.user.username : null
  const currentUserOrder = state? state.order : null
  const currentUserTransfert = state? state.transfert : null
  const orderLength = state? currentUserOrder.length : null
  const transfertLength = state? currentUserTransfert.length : null
  
   
  return(
    <>
        <div>
          <h1>Dashboard</h1>
           <h2>{currentUserEmail}</h2>
           <p>{currentUserName}</p>
           <hr />
           <h3>Achat</h3>
            {currentUserOrder === null?
              <p>vous n'avez pas encore effectué d'achat </p>
              :  <p>vous avez éffectué {orderLength} achats </p> 
            }
           <hr />
           <h3>Transferts</h3>
           {currentUserTransfert === null?
              <p>vous n'avez pas encore effectué de transfert </p>
              :  <p> vous avez effécuté {transfertLength} transferts  </p>
            }
        </div>
    </>
  )
}


export const DashboardStore = connect(
  (state) => ({
    state: state.dashboardReducer.dashboardInfos
  })
)(Dashboard)


export default Dashboard;