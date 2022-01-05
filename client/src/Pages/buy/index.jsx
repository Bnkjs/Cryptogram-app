import React, { useState } from "react";
import TransfertModal from "../../components/Modal/transfert";

const BuyCrypto = ({ token }) => {
  const [showModal, setShowModal] = useState(false)

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