import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Actions/auth";
import { Button } from "../Button/index"
import "../Navbar/style.scss"
import { FiLogOut, FiUser, FiZap } from "react-icons/fi";
import logo from '../../assets/logo.svg'
import { motion, AnimatePresence } from 'framer-motion';
import { BiWallet } from "react-icons/bi";


const Navbar = ({ setAuth, state }) =>{

  const userLogged = useSelector(state => state.authReducer.isLoggedIn)
  const [showDropDown,setShowDropDown] = useState(false)

  const initial = {
    visible: { opacity: 1, y: -10},
    hidden: { opacity: 0, y: 10 },
  }
  const submitLogout = () => {
    setShowDropDown(!showDropDown)
    logout()
  } 

  useEffect(()=>{
    setAuth(userLogged)
  },[userLogged])

  return(
    <>
        {userLogged ? 
        <nav id="navbar">
          <ul className="nav-ul">
            <li className="li-nav">
              <Link to="/">
                <div className="l-logo">
                 <p>€ryptogram</p>
                   <img className="l-img" src={logo} alt="pyramide verte" />   
                </div>
              </Link>
            </li>
             <li className="li-nav">
              <Link to="/market"><p className="li-p">Marché</p></Link>
            </li>
            <li className="li-nav">
             <div className="right-nav">
               <Link to="/activity">
                 <FiZap className="li-p li-icon" />
                </Link>
                <Link to="/dashboard">
                  <Button className="btn-wallet" dark>
                      <p className="text-wallet">Portefeuille</p>
                      <div className="icon-wallet">
                        <BiWallet/>
                      </div>
                  </Button>
                </Link> 
              <div 
                className="profil-circle" 
                onClick={()=> setShowDropDown(!showDropDown)}>
                  {state.username.toUpperCase()[0]}
              </div>
             </div>
            </li>
              {showDropDown &&
                <AnimatePresence>
                  <motion.div
                    className="motion-div"
                    variants={initial}
                    initial={initial}
                    animate={showDropDown? "visible" : "hidden"}
                    transition={{ duration: .2 }}
                    exit="hidden"
                  >
                  <div 
                    className="menu-dropdown"
                    onMouseLeave={()=> setShowDropDown(false)}
                    >
                    <div className="d-menu">
                      <li 
                        className="li-d-menu"
                        onClick={()=> setShowDropDown(!showDropDown)}
                        >
                          <div className="fi-i">
                            <FiUser/>
                          </div>
                            <Link to="/profil">
                              <p className="d-text">Profil</p>
                            </Link>
                        </li>
                        <div className="hr"></div>
                      <li 
                        className="li-d-menu"
                        onClick={()=> submitLogout()}
                        >
                        <div className="fi-i" >
                          <FiLogOut />
                        </div>
                        <p className="d-text">Se déconnecter</p>
                      </li>
                    </div>
                    <div className="d-menu"></div>
                  </div>
                </motion.div>
              </AnimatePresence>
              }
          </ul>
         </nav>
        : 
          <nav id="navbar">
            <ul className="nav-ul">
              <li className="li-logo">
                <Link className="nav-logo" to="/">
                    <div className="l-logo">
                    <p>€ryptogram</p>
                    <div className="l-img">
                      <img src={logo} alt="pyramide verte" />
                    </div>
                    </div>
                  </Link>
              </li>
              <div className="market-wrap">
                <li className="li-nav">
                  <Link to="/market"><p className="li-p">Marché</p></Link>
                </li>
              </div>
              <div className="auth-wrap">
                <li className="li-nav">
                  <Link to="/login"><p className="li-p">Se connecter</p></Link>
                </li>
                <li className="li-nav">
                  <Link to="/signup">
                    <Button gradient className="btn-cta-nav" padding="0.8em 2em">S'inscrire</Button>
                  </Link>
                </li>
              </div>
            </ul>
          </nav>
          
        }
      
    </>
  )
}

export const NavbarRes = () => {

  const [showNavRes,setShowNavRes] = useState(false)
  const userLogged = useSelector(state => state.authReducer.isLoggedIn)

  return(<>
      <nav id="navbar-res">
        <ul className="nav-ul">
          <li className="li-nav">
            <Link className="" to="/">
              <div className="l-logo">
                <p>€ryptogram</p>
              <div className="l-img">
                <img src={logo} alt="pyramide verte" />
              </div>
              </div>
            </Link>
          </li>
          <li className="li-nav" onClick={()=> setShowNavRes(!showNavRes)}>
            <div className="h-menu">
              <div className="hr-menu"></div>
              <div className="hr-menu"></div>
            </div>
          </li>
        </ul>
      </nav>
      {showNavRes && 
        <main>
          {userLogged? 
            <div className="p-menu">
              <div className="p-close" onClick={()=> setShowNavRes(false)}>
                <div className="li-close">+</div>
              </div>
              <ul className="ul-menu-res">
                <Link to="/profil" onClick={()=> setShowNavRes(false)}>
                  <li className="li-menu-res">Mon profil</li>
                </Link>
                <Link to="/market" onClick={()=> setShowNavRes(false)}>
                <li className="li-menu-res">Cours <br/> crypto-monnaies</li>
                </Link>
                <Link to="/dashboard" onClick={()=> setShowNavRes(false)}>
                  <li className="li-menu-res">Portefeuille</li>
                </Link>
              </ul>
           </div>
          : 
          <div className="p-menu">
            <ul className="ul-menu-res">
              <Link to="/signup">
                <li className="li-menu-res" onClick={()=> setShowNavRes(false)}>S'inscrire</li>
              </Link>
              <Link to="/login">
               <li className="li-menu-res" onClick={()=> setShowNavRes(false)}>Se connecter</li>
              </Link>
              <Link to="/market">
               <li className="li-menu-res" onClick={()=> setShowNavRes(false)}>Crypto-monnaies</li>
              </Link>
            </ul>
          </div>
          }
          
        </main>
      }
  </>)
}


export const NavbarStore = connect(
  (state) => ({
    state: state.authReducer.currentUserInfo
  })
)(Navbar)

export const NavBarResStore = connect(
  (state) => ({
    state: state.authReducer.currentUserInfo
  })
)(NavbarRes)

export default Navbar