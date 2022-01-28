import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import dashboard from "Actions/dashboard";
import { PageContainer } from "components/PageContainer";
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

const Dashboard = ({ state, token, contact,crypto, userCryptoWallet, userCryptoTransfered }) =>{
  const storedUserName = state? state.user.username : null
  const storedContact = contact? contact : null
  const storedUserInvestment = crypto? crypto : null
  const storedUserTransfert = state? state.transfert : null
  const storedUserBalance = state? state.user.balance : null
  const [showActivity, setShowActivity] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showTransfert, setShowTransfert] = useState(false)
  const [showBuyCrypto, setShowBuyCrypto] = useState(false)
  const contactLength = contact ? contact.length : null
  const investmentLength = state? userCryptoWallet : null
  const transfertLength = state? userCryptoTransfered : null
  const storedMarket = useSelector(state => state.cryptoReducer.coinsMarket)
  
  const showModalTransfert = (boolean) => {
    setShowTransfert(boolean)
  }
  const showModalBuyCrypto = (boolean) => {
    setShowBuyCrypto(boolean)
  }
  useEffect(()=>{
    const pathname = window.location.pathname //returns the current url minus the domain name
    navDisable(pathname)
    activity(token)
    getUserCoins(token)
    getAllContact(token)
    getMarket()
    dashboard(token)
    console.log('salut');
 },[contactLength, investmentLength,transfertLength])
  
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
              storedUserTransfert={storedUserTransfert}
              storedCrypto={storedUserInvestment}
              state={state}
              token={token}
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
              storedContact={storedContact}
              storedCrypto={storedUserInvestment} 
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
    state: state.dashboardReducer.dashboardInfos,
    contact: state.contactReducer.contactInfos,
    userCryptoWallet: state.cryptoReducer.coinOrdered,
    userCryptoTransfered: state.cryptoReducer.coinTransfered,
    crypto: state.cryptoReducer.userCoins
  })
)(Dashboard)


export default Dashboard;