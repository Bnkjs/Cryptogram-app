import { render, screen, fireEvent, getByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { ContactStore } from '../contact';

describe('test Login component', () => {
  

  const signupComponent = (
    <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <ContactStore token/>
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
  )

  // it('should find heading element in component', ()=>{
  //   render(signupComponent)
  //   const headingElement = screen.getByText('Liste des contacts')
  //   expect(headingElement).toBeInTheDocument()
  // })
  
  it('should find btn show modal on component', () => {
    render(signupComponent)
    const btnShowModal = screen.getByRole('button')
    expect(btnShowModal).toBeInTheDocument()
  })










  // it('should include title in component', () => {
  //   render(signupComponent)
  //   const headingElement = screen.getByText(/Liste des contacts/i); // mot passé en prop qui doit être rendu
  //   expect(headingElement).toBeInTheDocument();// s'attend à ce que le mot soit présent dans le component 
  // });

  // it('should find btn add conctact', () => {
  //   render(signupComponent)
  //   const targetBtn = screen.getByRole('button')
  //   expect(targetBtn).toBeInTheDocument()
  // })

  // it('should display Modal when btn is clicked', () => {
  //   render(signupComponent)
  //   const targetBtn = screen.getByRole('button')
  //   fireEvent.click(targetBtn)
  //   const targetModal = screen.getByRole('form')
  //   expect(targetModal).toBeInTheDocument()
  // })

  // it('should find all inputs in Modal', () => {
  //   render(signupComponent)
  //   const targetBtn = screen.getByRole('button')
  //   fireEvent.click(targetBtn)
  //   const targetModal = screen.getByRole('form')
  //   const inputEmail = screen.getByPlaceholderText("email")
  //   const inputFirstName = screen.getByPlaceholderText("prénom")
  //   const inputLastName = screen.getByPlaceholderText("nom de famille")
  //   expect(targetModal).toBeInTheDocument()
  //   expect(inputEmail).toBeInTheDocument()
  //   expect(inputFirstName).toBeInTheDocument()
  //   expect(inputLastName).toBeInTheDocument()
  // })

  // it('should include btn add contact in Modal', () => {
  //   render(signupComponent)
  //   const targetBtn = screen.getByRole('button')
  //   fireEvent.click(targetBtn)
  //   const targetbtnAdd = screen.getByText('Ajouter')
  //   expect(targetbtnAdd).toBeInTheDocument()
  // })
  
})