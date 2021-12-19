import styled,{ css } from 'styled-components'

export const Input = styled.input`
  
  max-width: 500px;
  width:100% ;
  border: 0.5px solid #E1E1E2;
  padding: 1em 0.8em ;
  border-radius: 8px;
  box-sizing: border-box;
  position: relative;
  outline: none;
  font-family: 'Montserrat light', sans-serif;
  font-size: 1.01em;
  &:focus{
    box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.1);

  }
`
