import React,{useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout }from "Actions/auth";
import { Button } from "components/Button/index"
import "../Navbar/style.scss"
import logo from '../../assets/logo.svg'
import { BiWallet } from "react-icons/bi";
import NavDropdown from "components/dropdown";
import { FiZap } from "react-icons/fi";


const Navbar = ({ setAuth, state }) =>{

  const userLogged = useSelector(state => state.authReducer.isLoggedIn)
  const [showDropDown,setShowDropDown] = useState(true)

  const isVisible = (boolean) => {
    setShowDropDown(boolean)
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
                <NavDropdown dropdown={setShowDropDown}/>
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