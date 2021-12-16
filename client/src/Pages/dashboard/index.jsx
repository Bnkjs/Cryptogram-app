import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import dashboard from "../../Actions/dashboard";

const Dashboard = ({ state, token }) =>{
  
  const [dashState, getDashState] = useState(state)
  const storedUserEmail = state? state.user.email : null
  const storedUserName = state? state.user.username : null
  const storedContact = state? state.contact : null
  const storedUserInvestment = state? state.investment : null
  const storedUserTransfert = state? state.transfert : null
  const storedUserBalance = state? state.user.balance : null

  useEffect(()=>{
  dashboard(token)
 },[dashState])
  
  return(
    <>
        <div>
          <h1>Dashboard</h1>
           <h2>{storedUserEmail}</h2>
           <p>{storedUserName}</p>
           <p>vous avez {storedContact} contact</p>
           <p>votre solde est de: {storedUserBalance} €</p>
           <hr />
           <h3>Achat</h3>
            {storedUserInvestment === null?
              <p>vous n'avez pas encore effectué d'achat </p>
              : storedUserInvestment.length > 1?  
               <p>vous avez {storedUserInvestment} investissements </p> 
               : <p>vous avez {storedUserInvestment} investissement </p>
            }
           <hr />
           <h3>Transferts</h3>
           {storedUserTransfert === null?
              <p>vous n'avez pas encore effectué de transfert </p>
              : storedUserTransfert.length > 1? 
              <p> vous avez effécuté {storedUserTransfert} transferts  </p>
              :  <p> vous avez effécuté {storedUserTransfert} transfert  </p>
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