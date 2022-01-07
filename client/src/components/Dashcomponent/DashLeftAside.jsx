import React from "react";
import 'components/Dashcomponent/style.scss';
import { FaEthereum } from "react-icons/fa";
import {RiFileUserLine } from "react-icons/ri";
import { FiZap } from "react-icons/fi";
import  cube_gradient from 'assets/cube_gradient.svg';
import { MdHomeMax } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";

export const DashLeftAside = ({storedUserName, setShowActivity, setShowContact, setShowTransfert, setShowBuyCrypto}) => {
  
  const backToHomeDash = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
  }
  const setActivity = () => {
    setShowActivity(true)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
  }
  const setContact = () => {
    setShowActivity(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowContact(true)
  } 
  const setTransfert = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowBuyCrypto(false)
    setShowTransfert(true)
  }
  const setBuyCrypto = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(true)
  }
  
  return(
      <div id="container-dashboard" height="100vh">
          <div className="left-content">
            <div className="h-left-content">
              <p>Bonjour {storedUserName}</p>
             <img className="cube-gradient" src={cube_gradient} alt="cube blanc" />
            </div>
            <aside className="aside-left-content">
              <nav className="nav-dashboard">
                <ul className="ul-sidenav ">
                    <li className="li-sidenav" onClick={()=> backToHomeDash()}>
                      <div className="li-sidenav-icon">
                        <MdHomeMax className="li-icon-img"/>
                      </div>
                        <p className="text-sidenave">Portfeuille</p>
                    </li>
                    <li className="li-sidenav" onClick={()=> setActivity()}>
                      <div className="li-sidenav-icon">
                        <FiZap className="li-icon-img"/>
                      </div>
                      <p className="text-sidenave">Activité</p>
                    </li>
                      <li className="li-sidenav" onClick={()=> setContact()}>
                        <div className="li-sidenav-icon">
                          <RiFileUserLine className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Contact</p>
                      </li>
                      <li className="li-sidenav" onClick={()=> setBuyCrypto()}>
                        <div className="li-sidenav-icon">
                          <FaEthereum className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Crypto</p>
                      </li>
                      <li className="li-sidenav" onClick={()=> setTransfert()}>
                        <div className="li-sidenav-icon">
                          <BiTransferAlt className="li-icon-img"/>
                        </div>
                        <p className="text-sidenave">Transfert</p>
                      </li> 
                </ul>
              </nav>
            </aside>
          </div>
        </div>
  )
}