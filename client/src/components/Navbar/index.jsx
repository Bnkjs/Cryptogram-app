import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Actions/auth";
import { Button } from "../Button/index"
import "../Navbar/style.css"
import { FiZap } from "react-icons/fi";


const Navbar = ({ setAuth }) =>{

  const userLogged = useSelector(state => state.authReducer.isLoggedIn)

  useEffect(()=>{
    setAuth(userLogged)
  },[userLogged])

  return(
    <>
      <nav id="navbar">
        {userLogged && 
          <ul id="nav-ul">
            <li className="li-nav">
              <Link to="/">
                <div className="l-header"></div>
              </Link>
            </li>
             <li className="li-nav">
              <Link to="/market"><p className="li-p">Crypto-monnaies</p></Link>
            </li>
             <li className="li-nav">
              <Link to="/dashboard"><p className="li-p">dashboard</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/profil"><p className="li-p">Profil</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/contact"><p className="li-p">Contact</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/activity"><FiZap className="li-p li-icon" /></Link>
            </li>
           
            <li className="li-nav">
              <button onClick={()=>logout()}>Se déconnecter</button>
              </li>
          </ul>
        }
        {!userLogged && 
          <ul id="nav-ul">
            <li className="li-logo">
              <Link to="/">
                <div className="l-header"></div>
              </Link>
            </li>
            <div className="market-wrap">
              <li className="li-nav">
                <Link to="/market"><p className="li-p">Crypto-monnaies</p></Link>
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
        }
      </nav>
    </>
  )
}

export default Navbar