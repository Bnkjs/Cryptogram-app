import React,{useState} from "react";
import 'components/Dashcomponent/style.scss';
import { FaEthereum } from "react-icons/fa";
import {RiFileUserLine } from "react-icons/ri";
import { FiLogOut, FiUser, FiZap, FiPackage } from "react-icons/fi";
import { MdHomeMax } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";
import logo from 'assets/logo.svg'
import { Button } from "components/Button";
import { Marged } from "components/Marged";
import { logout } from "Actions/auth";
import { Link } from "react-router-dom";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { motion } from "framer-motion";
import animationFm from "utils/framer";

export const handleLogout = () => {
  logout()
  window.location.reload()
}
export const DashLeftAside = ({storedUserName, setShowActivity, setShowContact, setShowTransfert, setShowBuyCrypto, setShowMarket, setShowProfil}) => {

  const backToHomeDash = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowMarket(false)
    setShowProfil(false)
  }
  const setActivity = () => {
    setShowActivity(true)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowMarket(false)
    setShowProfil(false)
  }
  const setContact = () => {
    setShowActivity(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowContact(true)
    setShowMarket(false)
    setShowProfil(false)
  } 
  const setTransfert = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowBuyCrypto(false)
    setShowTransfert(true)
    setShowMarket(false)
    setShowProfil(false)
  }
  const setBuyCrypto = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(true)
    setShowMarket(false)
    setShowProfil(false)
  }
  const setMarket = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowMarket(true)
    setShowProfil(false)
  }
  const setProfil = () => {
    setShowActivity(false)
    setShowContact(false)
    setShowTransfert(false)
    setShowBuyCrypto(false)
    setShowMarket(false)
    setShowProfil(true)
  }

  
  
  return(
      <div id="container-dashboard" height="100vh">
          <div className="left-content" >
            <aside className="aside-left-content">
              <div className="h-left-content">
              <img className="logo" src={logo} alt="cube blanc"  onClick={()=> backToHomeDash()}/>
              </div>
              <nav className="nav-dashboard">
                <ul className="ul-sidenav">
                  <a href="#container-dashboard">
                    <li className="li-sidenav" onClick={()=> backToHomeDash()}>
                      <div className="li-sidenav-icon">
                        <MdHomeMax className="li-icon-img"/>
                      </div>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setMarket()}>
                      <div className="li-sidenav-icon">
                        <HiOutlineChartSquareBar className="li-icon-img"/>
                      </div>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setBuyCrypto()}>
                      <div className="li-sidenav-icon">
                        <FaEthereum className="li-icon-img"/>
                      </div>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setContact()}>
                        <div className="li-sidenav-icon">
                          <RiFileUserLine className="li-icon-img"/>
                        </div>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setTransfert()}>
                      <div className="li-sidenav-icon">
                        <BiTransferAlt className="li-icon-img"/>
                      </div>
                      </li> 
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setActivity()}>
                      <div className="li-sidenav-icon">
                        <FiZap className="li-icon-img"/>
                      </div>
                           </li>
                  </a>
                </ul>
                <div className="box-signout-profil" onClick={()=> setProfil()}>
                      <div className="link-profil">
                        <div>
                          <Button dash_option bg='#3e52fe'>
                            <FiUser/>
                          </Button>
                        </div>
                      </div>
                      <Marged bottom='10px'/>
                      <a href="#app">
                        <Button dash_option bg='#161616' onClick={()=> handleLogout()}>
                          <FiLogOut/>
                        </Button>
                      </a>
                    </div>
              </nav>
            </aside>
          </div>
          <Navres
            backToHomeDash={backToHomeDash}
            setBuyCrypto={setBuyCrypto}
            setContact={setContact}
            setTransfert={setTransfert}
            setActivity={setActivity}
            handleLogout={handleLogout}
            setProfil={setProfil}
            setMarket={setMarket}
          />
        </div>
  )
}

export const Navres = ({backToHomeDash, setBuyCrypto, setContact, setActivity, setTransfert, handleLogout, setProfil, setMarket}) => {
  
  const [showDropDown,setShowDropDown] = useState(false)
  
  return(
    <div id="aside-container">

              {showDropDown &&           
                <div className="dropdown-res" onClick={()=> setShowDropDown(!showDropDown)}>
                   <a href="#app">
                    <li className="li-sidenav" onClick={()=> setMarket()}>
                      <div className="li-sidenav-icon">
                        <HiOutlineChartSquareBar className="li-icon-img"/>
                      </div>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setBuyCrypto()}>
                      <div className="li-sidenav-icon">
                        <FaEthereum className="li-icon-img"/>
                      </div>
                    </li>
                  </a>
                  <a href="#app">
                    <li className="li-sidenav" onClick={()=> setTransfert()}>
                      <div className="li-sidenav-icon">
                        <BiTransferAlt className="li-icon-img"/>
                      </div>
                      </li> 
                  </a>
                  <a href="#app">
                   <li className="li-sidenav" onClick={()=> setActivity()}>
                      <div className="li-sidenav-icon">
                      <FiZap className="li-icon-img"/>
                      </div>
                   </li>
                </a>
                </div>
              }
          <a href="#container-dashboard">
            <li className="li-sidenav" onClick={()=> backToHomeDash()}>
              <div className="li-sidenav-icon">
                <MdHomeMax className="li-icon-img"/>
              </div>
            </li>
          </a>
          <a href="#">
            <li className="li-sidenav" onClick={()=> setShowDropDown(!showDropDown)}>
              <div className="li-sidenav-icon">
                <FiPackage className="li-icon-img"/>
              </div>
            </li>
          </a>
                     
          <a href="#app">
            <li className="li-sidenav" onClick={()=> setProfil()}>
                <div className="li-sidenav-icon">
                    <FiUser className="li-icon-img"/>
                </div>
            </li>
          </a>
          
          <a href="#app">
            <li className="li-sidenav" onClick={()=> handleLogout()}>
                <div className="li-sidenav-icon">
                    <FiLogOut className="li-icon-img"/>
                </div>
            </li>
          </a>
    </div>
  )
}