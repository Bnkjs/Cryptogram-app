import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import TransfertModal from "../../components/Modal/transfert";

const BuyCrypto = ({ token }) => {
  const [showModal, setShowModal] = useState(false)

  // useEffect(()=>{
    
  // }, [])

    return(
      <>
       <div className="modal-wrap" id="up">
        <TransfertModal showModal={setShowModal} token={token}/>
        <div className="overlay"onClick={()=> setShowModal(false)}> 
        </div>
      </div>
        
        
      </>
    )
  }

export default BuyCrypto