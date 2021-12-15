import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../Actions/auth";
import "../Navbar/style.css"
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
              <Link to="/dashboard"><p>dashboard</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/profil"><p>Profil</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/contact"><p>Contact</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/activity"><p>Activity</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/buy_crypto"><p>buy-crypto</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/transfert_crypto"><p>transfert-crypto</p></Link>
            </li>
            <li className="li-nav">
              <button onClick={()=>logout()}>Se déconnecter</button>
              </li>
          </ul>
        }
        {!userLogged && 
          <ul id="nav-ul">
            <li className="li-nav">
            <Link to="/signup"><p>S'inscrire</p></Link>
            </li>
            <li className="li-nav">
              <Link to="/login"><p>Se connecter</p></Link>
            </li>
          </ul>
        }
      </nav>
    </>
  )
}

export default Navbar