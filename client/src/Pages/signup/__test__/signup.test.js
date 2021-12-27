import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';

import Signup from '../index'

describe('test signup component', () => {

  it('should include title in component', () => {
    render(
      <Provider store={store}>
        <React.StrictMode>
          <Signup/>
        </React.StrictMode>
     </Provider>); // rend l'élément qui va être testé
    const headingElement = screen.getByText(/Créez votre compte/i); // mot passé en prop qui doit être rendu
    expect(headingElement).toBeInTheDocument();// s'attend à ce que le mot soit présent dans le component 
  });
})