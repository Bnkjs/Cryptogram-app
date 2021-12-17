import styled,{ css } from 'styled-components'

export const Button = styled.button`

    
  border-radius: 50px;
  border: transparent;
  padding: 0.5em 1.5em;
  transition: all .1s ease-out;
  cursor:pointer;
  font-size: 1em;
  font-weight: 600;
  box-shadow: 0px 2px 15px 4px rgba(0, 0, 0, 0.1);
    
    
    ${props => props.gradient && css`
      background: #ffff;
      background-image: linear-gradient(91.26deg, #8A94EC 30%, #EF96FF 50%, #FF56A9 54.03%, #FFAA6C 60.28%);
      -webkit-background-clip: text;
      color: transparent;
  `}

  ${props => props.black && css`
    background: #313131;
    color: #fff;
    :hover{
     background: #161616;
    }
  `}
  
  ${props => props.primary_xl && css`
    background-color: #436CFF;
    color: #fff;
    width:auto;
    padding: 0.7em 6em;
    :hover{
     background: #2B59FF;
    }
  `}
`