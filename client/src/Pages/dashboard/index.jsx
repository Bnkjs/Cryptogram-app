import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import dashboard from "../../Actions/dashboard";
import { PageContainer } from "../../components/PageContainer";

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
        <PageContainer height="100vh">

          <header>
           <h1> Portfeuille</h1>
          </header>

          <nav>
            <ul className="sidenav">
              <li className="li-sidenav">Acheter</li>
              <li className="li-sidenav">Vendre</li>
              <li className="li-sidenav">Transfert</li>
            </ul>
          </nav>

          <main>
            div
          </main>


          
        </PageContainer>
    </>
  )
}


export const DashboardStore = connect(
  (state) => ({
    state: state.dashboardReducer.dashboardInfos
  })
)(Dashboard)


export default Dashboard;