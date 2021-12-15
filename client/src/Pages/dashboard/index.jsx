import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import dashboard from "../../Actions/dashboard";

const Dashboard = ({ state, token }) =>{
  
  const [dashState, getDashState] = useState(state)
  const currentUserEmail = state? state.user.email : null
  const currentUserName = state? state.user.username : null
  const currentContact = state? state.contact : null
  const currentUserInvestment = state? state.investment : null
  const currentUserTransfert = state? state.transfert : null

 useEffect(()=>{
  dashboard(token)
 },[dashState])
  
  return(
    <>
        <div>
          <h1>Dashboard</h1>
           <h2>{currentUserEmail}</h2>
           <p>{currentUserName}</p>
           <p>vous avez {currentContact} contact</p>
           <hr />
           <h3>Achat</h3>
            {currentUserInvestment === null?
              <p>vous n'avez pas encore effectué d'achat </p>
              :  <p>vous avez {currentUserInvestment} investissements </p> 
            }
           <hr />
           <h3>Transferts</h3>
           {currentUserTransfert === null?
              <p>vous n'avez pas encore effectué de transfert </p>
              :  <p> vous avez effécuté {currentUserTransfert} transferts  </p>
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