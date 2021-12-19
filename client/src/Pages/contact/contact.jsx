import React,{useEffect, useState} from "react";
import { connect } from "react-redux";
import { inputStyled } from "../../components/Input/index";
import { addContact, deleteAllContact, deleteContact, getAllContact } from "../../Actions/contact";
import { Input } from "../../components/Input/index";
import { register } from "../../Actions/auth";
import { Button } from "../../components/Button/index";
import { Card } from "../../components/Card";
import Div from "../../components/Div";
import { Marged } from "../../components/Marged";
import { PageContainer } from "../../components/PageContainer";
import { Form } from "../../components/Form";
import img_gradient_contact from '../../assets/FORM_ADD_CONTATC_CARD_GRADIENT.svg'

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
    <PageContainer>
      <Marged top="70px"/>
      <Div gg="40px" display="grid" gtc="repeat(auto-fill, 550px)" justifyContent='center'  id="class">
        <Card className="card-form">
          <img width="500px" height="auto" src={img_gradient_contact} alt="" />
          <div className="h-card">
           <h3 className="h-card-title">Carnet d'adresse</h3>
           <p className="h-card-text">Vous pourrez leur envoyé des crypto-monnaies.</p>
         </div>
        </Card>
        <Div  width="550px" display="flex" justifyContent='center' alignItems='start' flexDirection='column'>
          <h1 className="title-form">Ajouter un contact</h1>
          <Form method="POST" onSubmit={(e)=> addContact(e,token,email,firstname,lastname)}>
            <Input type="text" placeholder="email" name="email" className="email-input" value={email} onChange={(e)=>onChange(e)} required />
            <Marged bottom="20px"/>
            <Input type="text" placeholder="prénom" name="firstname" className="firstname-input" value={firstname} onChange={(e)=>onChange(e)} required  />
            <Marged bottom="20px" />
            <Input type="text" placeholder="nom de famille" name="lastname" className="lastname-input" value={lastname} onChange={(e)=>onChange(e)} required />
            <Marged bottom="20px"/>
            <Button primary_xl>Ajouter</Button>
          </Form>
        </Div>  
      </Div>
    </PageContainer>
  </>)
}



export const ContactStore = connect(
  (state) => ({
    state: state.contactReducer.contactInfos
  })
)(Contact)



export default Contact