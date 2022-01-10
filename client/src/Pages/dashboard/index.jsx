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
import TransfertModal from "components/Modal/transfert";
import { getAllContact } from "Actions/contact";
import { useSelector } from "react-redux";
import { getMarket, getUserCoins } from "Actions/crypto";
import BuyCrypto from "components/Modal/buy";
import { navDisable } from "utils/navUtils";

const Dashboard = ({ state, token }) =>{
  
  const [dashState, getDashState] = useState(state)
  const storedUserName = state? state.user.username : null
  const storedContact = state? state.contact : null
  const storedUserInvestment = state? state.investment : null
  const storedUserTransfert = state? state.transfert : null
  const storedUserBalance = state? state.user.balance : null
  const [showActivity, setShowActivity] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showTransfert, setShowTransfert] = useState(false)
  const [showBuyCrypto, setShowBuyCrypto] = useState(false)

  const storedContactDatas = useSelector(state => state.contactReducer.contactInfos)
  const storedCrypto = useSelector(state => state.cryptoReducer.userCoins)
  const storedMarket = useSelector(state => state.cryptoReducer.coinsMarket)
  const showModalTransfert = (boolean) => {
    setShowTransfert(boolean)
  }
  const showModalBuyCrypto = (boolean) => {
    setShowBuyCrypto(boolean)
  }
  const pathname = window.location.pathname //returns the current url minus the domain name

  useEffect(()=>{
    navDisable(pathname)
    activity(token)
    getUserCoins(token)
    getAllContact(token)
    getMarket()
    dashboard(token)
 },[dashState, storedContact])
  
  return(
    <>
        <PageContainer id="container-dashboard" height="100vh">
          <DashLeftAside 
            storedUserName={storedUserName} 
            setShowActivity={setShowActivity}
            setShowContact={setShowContact}
            setShowTransfert={setShowTransfert}
            setShowBuyCrypto={setShowBuyCrypto}
          />
          {!showActivity && !showContact && !! !showTransfert && !showBuyCrypto &&
            <DashCenterPage 
              storedContact={storedContact}
              storedUserBalance={storedUserBalance}
              storedUserInvestment={storedUserInvestment}
            />
          }
          {showActivity &&
            <div className="center-content" id="app">
              <ActivityStore/>
            </div>  
          }
          {showContact &&
          <div className="center-content" id="app">
            <ContactStore token={token}/>
          </div>
          }
          {showTransfert &&
          <div className="center-content" id="app">
            <TransfertModal 
              showModalTransfert={showModalTransfert} 
              storedContactDatas={storedContactDatas}
              storedCrypto={storedCrypto} 
              token={token}/>
          </div>
          }
          {showBuyCrypto &&
          <div className="center-content" id="app">
            <BuyCrypto 
              showModalBuyCrypto={showModalBuyCrypto} 
              storedMarket={storedMarket}
              token={token}/>
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