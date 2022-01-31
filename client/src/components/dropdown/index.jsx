import React, {useState} from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FiLogOut, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";
import { logout }from "Actions/auth";
import animationFm from "utils/framer";

const NavDropdown = ({ dropdown }) => {

  const submitLogout = () => {
    dropdown(!dropdown)
    logout()
  } 

  return(
      <AnimatePresence>
        <motion.div
          className="motion-div"
          variants={animationFm().initial}
          initial={animationFm().initial}
          animate={dropdown? "visible" : "hidden"}
          transition={{ duration: .2 }}
          exit="hidden"
        >
          <div 
            className="menu-dropdown"
            onMouseLeave={()=> dropdown(false)}
          >         
            <div className="d-menu">
                <li 
                  className="li-d-menu"
                  onClick={()=> dropdown(!dropdown)}
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
  )
}


export default NavDropdown