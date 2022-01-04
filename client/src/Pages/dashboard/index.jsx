import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import dashboard from "../../Actions/dashboard";
import { PageContainer } from "../../components/PageContainer";
import 'Pages/dashboard/style.scss';
import { Link } from "react-router-dom";
import {  } from "react-icons/cg";
import { FaEthereum } from "react-icons/fa";
import { RiMoneyEuroBoxLine,RiExchangeBoxLine } from "react-icons/ri";
import { FiZap } from "react-icons/fi";
import  cube_gradient from 'assets/cube_gradient.svg';
import { FcAddressBook } from "react-icons/fc";
import { FcMoneyTransfer } from "react-icons/fc";
 import { FcCurrencyExchange } from "react-icons/fc";
import { Button } from "components/Button";
import { ActivityStore } from "Pages/activity";
import activity from "Actions/activity";

const Dashboard = ({ state, token }) =>{
  
  const [dashState, getDashState] = useState(state)
  const storedUserEmail = state? state.user.email : null
  const storedUserName = state? state.user.username : null
  const storedContact = state? state.contact : null
  const storedUserInvestment = state? state.investment : null
  const storedUserTransfert = state? state.transfert : null
  const storedUserBalance = state? state.user.balance : null
  const [showActivity, setShowActivity] = useState(false)

  useEffect(()=>{
    activity(token)
    dashboard(token)
 },[dashState])
  
  return(
    <>
        <PageContainer id="container-dashboard" height="100vh">
          <div className="left-content">
            <div className="h-left-content">
              <p>Bonjour {storedUserName}</p>
             <img className="cube-gradient" src={cube_gradient} alt="cube blanc" />
            </div>
            <aside className="aside-left-content">
              <nav className="nav-dashboard">
                <ul className="ul-sidenav ">
                    <li className="li-sidenav" onClick={()=> setShowActivity(true)}>
                      <div className="li-sidenav-icon">
                        <FiZap className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Activité</p>
                    </li>
                  <Link to="/buy_crypto">
                      <li className="li-sidenav">
                        <div className="li-sidenav-icon">
                          <RiMoneyEuroBoxLine className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Acheter</p>
                      </li>
                    </Link>
                    <Link to="/transfert_crypto">
                      <li className="li-sidenav">
                        <div className="li-sidenav-icon">
                          <RiExchangeBoxLine className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Transfert</p>
                      </li>
                    </Link>
                    <Link to="/market">
                      <li className="li-sidenav">
                        <div className="li-sidenav-icon">
                          <FaEthereum className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Crypto</p>
                      </li>
                    </Link>
                </ul>
              </nav>
            </aside>
          </div>

          {showActivity?
            <div className="center-content">
              <ActivityStore/>
            </div>
            : 
            <div className="center-content">

            <div className="div-recap">
                <header className="h-center-content">
                  <div className="balance-row">
                     <div className="h-b-row" >
                      <p className="text-h">Solde total</p>
                      <FcMoneyTransfer className="img-h"/>
                     </div>
                    <h3 className="balance-h">{storedUserBalance} €</h3>
                  </div>
                  <div className="btn-cta">
                    <Button gradient>Acheter</Button>
                    <Button dark>Transferer</Button>
                  </div>
                </header>

                <div className="row-recap">
                  <div className="invest-r card-r">
                    <div className="h-b-row">
                      {storedUserInvestment <= 1 ?
                        <p>Actif</p> : <p>Actifs</p>
                      }
                      <FcCurrencyExchange className="img-h"/>
                    </div>
                    <h3 className="stored-v">{storedUserInvestment}</h3>
                  </div>
                  <div className="contact-r card-r">
                    <div className="h-b-row">
                      {storedContact <= 1 ?
                        <p>Contact</p> : <p>Contacts</p>
                      }
                      <FcAddressBook className="img-h"/>
                    </div>
                    <h3 className="stored-v">{storedContact}</h3>
                  </div>
                </div>
                <div className="row-recap"></div>
              </div>
              <div className="div-market">
              <h2>Marché crypto-monnaies</h2>
            </div>


          <div className="right-content">
            <aside>
             <h1>recap</h1>
             <div className="div-recap-aside">
               <div className="recap-row"></div>
               <div className="recap-row"></div>
               <div className="recap-row"></div>
             </div>
            </aside>  
          </div>  
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