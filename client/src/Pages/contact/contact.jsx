import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import {getAllContact } from "../../Actions/contact";
import { PageContainer } from "../../components/PageContainer";
import Modal from "../../components/Modal/contact";
import RowContact from "../../components/Contact";
import { v4 as uuidv4 } from "uuid";

const Contact = ({ state, token }) => {
 
  const currentUserContact = state? state : null
  const currentUserContactLength = state? state.length : null
  
  const [showModal, setShowModal] = useState(false)

  const displayContact = state? currentUserContact.map((el,index) => {
    return(
    <div key={uuidv4()}>
      <RowContact 
        id={index + 1}
        email={el.email} 
        firstname={el.first_name} 
        lastname={el.last_name} 
        c_wallet={el.wallet_adress}
        token={token}
        />
      </div>)
  }) : null


  useEffect(()=>{
    getAllContact(token)
  },[showModal,currentUserContactLength,])

  return(<>
    {showModal &&
      <div className="modal-wrap" id="up">
        <Modal showModal={setShowModal} token={token}/>
        <div className="overlay"onClick={()=> setShowModal(false)}> 
        </div>
      </div>
    }
    <PageContainer id="contact-container">
     <h1>Liste des contacts</h1>
     <div id="col-info">
        <p className="c-id">#</p>
        <p className="c-email">email</p>
        <p className="c-firstname">Prénom</p>
        <p className="c-lastname">N. famille</p>
        <p className="c-id-wallet">N° de portefeuille</p>
        <div className="c-delete">Supprimer</div>
      </div>
      <div className="hr"></div>
      {currentUserContactLength === null ?
        <h3>Vous n'avez aucun contact enregistré pour le moment</h3>
        :  displayContact 
      }
      <a href="#up">
        <button 
          className="add-c" 
          onClick={()=> setShowModal(!showModal)}
          
          >
            +
        </button> 
      </a>
    </PageContainer>
  </>)
}



export const ContactStore = connect(
  (state) => ({
    state: state.contactReducer.contactInfos
  })
)(Contact)



export default Contact