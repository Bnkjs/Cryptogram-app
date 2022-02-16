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
import { getMarket, getUserCoins } from "Actions/crypto";
import BuyCrypto from "components/Modal/buy";
import { navDisable } from "utils/navUtils";
import Market from "Pages/market";
import { ProfilStore } from "Pages/profil";

const Dashboard = ({ state, token, contact, userCryptoOrdered, userCryptoTransfered, storedMarket, userCryptoWallet }) =>{
  const storedUserName = state? state.user.username : null
  const storedContact = contact? contact : null
  const storedUserInvestment = userCryptoWallet? userCryptoWallet : null
  const storedUserTransfert = state? state.transfert : null
  const storedUserBalance = state? state.user.balance : null
  const [showProfil, setShowProfil] = useState(false)
  const [showMarket, setShowMarket] = useState(false)
  const [showActivity, setShowActivity] = useState(false)
  const [showContact, setShowContact] = useState(false)
  const [showTransfert, setShowTransfert] = useState(false)
  const [showBuyCrypto, setShowBuyCrypto] = useState(false)
  const contactLength = contact ? contact.length : null
  const investmentLength = state? userCryptoOrdered : null
  const transfertLength = state? userCryptoTransfered : null
  

  const showModalTransfert = (boolean) => {
    setShowTransfert(boolean)
  }
  const showModalBuyCrypto = (boolean) => {
    setShowBuyCrypto(boolean)
  }
  useEffect(()=>{
    getMarket()
    const pathname = window.location.pathname //returns the current url minus the domain name
    navDisable(pathname)
    activity(token)
    getUserCoins(token)
    getAllContact(token)
    dashboard(token)
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
            setShowMarket={setShowMarket}
            setShowProfil={setShowProfil}
          />
          {!showActivity && !showContact && !showTransfert && !showBuyCrypto && !showMarket && !showProfil &&
            <DashCenterPage 
              storedContact={storedContact}
              storedUserBalance={storedUserBalance}
              storedUserInvestment={storedUserInvestment}
              storedUserTransfert={storedUserTransfert}
              storedCrypto={storedUserInvestment}
              storedMarket={storedMarket}
              userCryptoWallet={userCryptoWallet}
              state={state}
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
              storedMarket={storedMarket}
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
          {showMarket && 
            <div className="center-content" id="app">
              <Market
                storedMarket={storedMarket}
                showModalBuyCrypto={showModalBuyCrypto}
                setShowMarket={setShowMarket}
              />
            </div>
          }
          {showProfil && 
            <div className="center-content" id="app">
              <ProfilStore token={token}/>
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
    userCryptoOrdered: state.cryptoReducer.coinOrdered,
    userCryptoTransfered: state.cryptoReducer.coinTransfered,
    userCryptoWallet: state.cryptoReducer.userCoins,
    storedMarket: state.cryptoReducer.coinsMarket
  })
)(Dashboard)


export default Dashboard;