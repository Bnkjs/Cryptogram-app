import styled,{ css } from 'styled-components'

export const Input = styled.input`
  width:100% ;
  padding: 1em 0.8em;
  border: none;
  border-radius: 8px;
  position: relative;
  outline: none;
  font-family: 'Montserrat light', sans-serif;
  font-size: 1.01em;
  background: #F4F5F6;
  &:focus{
    box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.1);
    border: 2px solid #2B59FF ;
  }
  ${props => props.border_b && css`
      border: none;
      border-radius: 0 ;
      border-bottom: 1px solid #E1E1E2;
      margin: 0 0 2em 0;
      padding: 0;
      font-size: 1.5em;
      text-align: center;
      &:focus{
        box-shadow: none;
      }
  `}
`
