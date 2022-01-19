import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { deleteContact }from "Actions/contact";

const RowContact = (props) => {

  const submitDelete = (e,token,email) => {
    deleteContact(e,token,email)
  }
  return (<>
      <div className="r-contact">
         <p className="c-item r-id">{props.id}</p>
        <p className="c-item r-email">{props.email}</p>
        <p className="c-item r-firstname">{props.firstname}</p> 
        <p className="c-item r-lastname">{props.lastname}</p>
        <p className="c-item r-wallet">{props.c_wallet}</p>
        <FiTrash2 className="c-trash" onClick={(e)=> submitDelete(e,props.token,props.email) }>x</FiTrash2>
      </div>
  </>)
}

export default RowContact