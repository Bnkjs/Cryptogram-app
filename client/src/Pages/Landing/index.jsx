import React from "react";
import './style.scss'
import { Button } from "components/Button";
import phone from 'assets/phone.png';
import stars_notif from 'assets/stars_notif.png'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import animationFm from "utils/framer";

const Landing = ({ state }) => {
  return(<>
      <div id="landing-page">
        <motion.div
          variants={animationFm()}
          initial={animationFm(0,50).hidden}
          animate={animationFm(1,0).visible}
          transition={{ duration: .4 }}        
        >
          <div className="header-landing">
            <header>
            <h1>Achetez & transferez <br /> des <span className="gradient-crypto">cryptos-monnaies</span> <br /> instantenément.</h1>
            <p>Profitez de 740 crypto-monnaies différentes et <br/> du transfert instantané de votre portefeuille à vos contacts. </p>
            </header>
            <Link to="/signup">
              <Button dark>Commencer</Button>
            </Link>
          </div>
      </motion.div>
        <motion.div
            variants={animationFm()}
            initial={animationFm(0,50).hidden}
            animate={animationFm(1,0).visible}
            transition={{ duration: .4, delay: .4}}        
          >
          <div className="illu">
            <img className="phone-illu" src={phone} alt="phone" />
            <img className="stars-notif-illu" src={stars_notif} alt="phone" />
          </div>
        </motion.div>
      </div>
      
   
  </>)
} 

export default Landing