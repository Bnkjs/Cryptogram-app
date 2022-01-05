import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import dashboard from "../../Actions/dashboard";
import { PageContainer } from "../../components/PageContainer";
import 'Pages/dashboard/style.scss';

import { ActivityStore } from "Pages/activity";
import activity from "Actions/activity";
import { DashLeftAside } from "components/Dashcomponent/DashLeftAside";
import { ContactStore } from "Pages/contact/contact";
import { DashCenterPage } from "components/Dashcomponent/DashCenterComp";

const Dashboard = ({ state, token }) =>{
  
  const [dashState, getDashState] = useState(state)
  const storedUserName = state? state.user.username : null
  const storedContact = state? state.contact : null
  const storedUserInvestment = state? state.investment : null
  const storedUserTransfert = state? state.transfert : null
  const storedUserBalance = state? state.user.balance : null
  const [showActivity, setShowActivity] = useState(false)
  const [showContact, setShowContact] = useState(false)
  console.log(storedContact);

  useEffect(()=>{
    activity(token)
    dashboard(token)
 },[dashState, storedContact])
  
  return(
    <>
        <PageContainer id="container-dashboard" height="100vh">
          <DashLeftAside 
            storedUserName={storedUserName} 
            setShowActivity={setShowActivity}
            setShowContact={setShowContact}
          />
          {!showActivity && !showContact &&
            <DashCenterPage 
              storedContact={storedContact}
              storedUserBalance={storedUserBalance}
              storedUserInvestment={storedUserInvestment}
            />
          }
          {showActivity &&
            <div className="center-content">
              <ActivityStore/>
            </div>  
          }
          {showContact &&
          <div className="center-content">
            <ContactStore token={token}/>
          </div>
          }
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