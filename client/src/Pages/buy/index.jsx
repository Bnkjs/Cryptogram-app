import axios from "axios";
import React, { useEffect, useState } from "react";
import coins from "../../services/crypto.service"
import { v4 as uuidv4 } from 'uuid';

const BuyCrypto = () => {
  

  const [getCoins, setGetCoins] = useState([])

  const displayAllCoins = getCoins.map((el,index)=>{
    return (<>
      <p key={uuidv4()}>Crypto: {el.name} {el.symbol}</p>
      <img width={'20px'} key={uuidv4()} src={el.image} alt="crypto symbole image"/>
      <p key={uuidv4()}>prix actuel: {el.current_price} €</p>
      <p key={uuidv4()}> Changement sur 24h: {el.price_change_24h}</p>
      <hr />
    </>)
  })
console.log(getCoins);
  useEffect(()=>{
    coins().then(res => setGetCoins(res.data))
  }, [])

    return(
      <>
        <h1>Buy Crypto</h1>
        {displayAllCoins}
      </>
    )
  }

export default BuyCrypto