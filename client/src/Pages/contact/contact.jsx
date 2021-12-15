import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { InputForm } from "../../components/InputForm";
import { Button } from "../../components/Button"
import { addContact, deleteAllContact, deleteContact, getAllContact } from "../../Actions/contact";

const Contact = ({ state, token }) => {
  const [inputs, setInputs] = useState({
    email: "",
    firstname: "",
    lastname: ""
  })
  const { email, firstname, lastname } = inputs;
  const currentUserContact = state? state : null

  const onChange = e => {
    setInputs({...inputs,[e.target.name]: e.target.value})
  }

  const getContact = state? currentUserContact.map((el, index) => {
    return (<>
      <p key={el.id}className="contact-item">{el.email}</p>
      <p key={el.id}className="contact-item">{el.first_name}</p> 
      <p key={el.id} className="contact-item">{el.last_name}</p>
      <h3 onClick={(e)=> deleteContact(e,token,el.email) }>x</h3>
      <hr/>
    </>)
  }) : null

  useEffect(()=>{
    getAllContact(token)
  },[currentUserContact])
  return(<>
    <div>
      <h1>Contact Liste</h1>
        {currentUserContact === null?
              <p>vous n'avez pas de contact dans votre liste </p>
              : getContact
            }
      <hr />
      <p>Ajouter un contact</p>
      <form action="" onSubmit={(e)=> addContact(e,token,email,firstname,lastname)}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <InputForm type="text" placeholder="prénom" name="firstname" className="firstname-input" value={firstname} onChange={(e)=>onChange(e)} />
        <InputForm type="text" placeholder="nom de famille" name="lastname" className="lastname-input" value={lastname} onChange={(e)=>onChange(e)} />
        <Button message="Ajouter" />
      </form>
      <hr />
      <p>Supprimer un contact</p>
      <button onClick={(e) => deleteAllContact(e,token)}>Supprimer All</button>
      {/* <form action="" onSubmit={(e)=> deleteContact(e,token,email)}>
        <InputForm type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} />
        <Button message="Supprimer" />
      </form> */}
    </div>
        
  </>)
}



export const ContactStore = connect(
  (state) => ({
    state: state.contactReducer.contactInfos
  })
)(Contact)



export default Contact