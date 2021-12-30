import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getAllContact } from "../../Actions/contact";
import { getUserCoins } from "../../Actions/crypto";
import dashboard from "../../Actions/dashboard";
import TransfertModal from "../../components/Modal/transfert";

const Transfert = ({ state, token }) => {
  const [showModal, setShowModal] = useState(false)
  const currentUserCrypto = state? state : null
  const currentUserContact = useSelector(state => state.contactReducer)

  useEffect(()=>{
    getAllContact(token)
    getUserCoins(token)
  },[showModal])
  

    return(
      <>
       <div className="modal-wrap" id="up">
        <TransfertModal state={state}contact={currentUserContact.contactInfos} token={token} />
        <div className="overlay"onClick={()=> setShowModal(false)}> 
        </div>
      </div>
      </>
    )
  }


export const TransfertStore = connect(
  (state) => ({
    state: state.cryptoReducer.userCoins
  })
)(Transfert)

export default Transfert
