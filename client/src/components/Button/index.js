import styled,{ css } from 'styled-components'
import PropTypes from 'prop-types';

export const Button = styled.button`
    
  border-radius: 10px;
  border: transparent;
  padding: 0.5em 1.6em;
  transition: all .1s ease-out;
  cursor: pointer;
  font-size: 1em;
  font-family: 'Raleway', sans-serif;  
  font-weight: 600;
  box-shadow: 0px 2px 15px 4px rgba(0, 0, 0, 0.1);
  width: ${({width}) => width};
    
    ${props => props.gradient && css`
      
      background-image: linear-gradient(91.26deg, #5364fc 30%, #EB76FF 21.74%, #FF56A9 54.03%, #FF9B52 85.28%);
      -webkit-background-clip: text;
      color: transparent;
      padding: ${({padding}) => padding};
      box-shadow: 0px 2px 15px 0.5px rgba(0, 0, 0, 0.1);
      transition: all 100ms ease-out;
      :hover{
        transform: scale(1.1)
      }
  `}

  Button.proptypes = {
    padding: PropTypes.string;
    width: PropTypes.string;
    bg: PropTypes.string;
  }
  ${props => props.dark && css`
    background: #313131;
    color: #fff;
    transition: all .2s ease-out;
    :hover{
     background: #161616;
    }
  `}
  
  ${props => props.primary_xl && css`
    background-color: #436CFF;
    color: #fff;
    padding: 0.7em 6.5em;
    :hover{
     background: #2B59FF;
    }
    cursor:
      url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🚀</text></svg>")
      16 0,
    auto;
};
  `}
  ${props => props.primary_xl_del && css`
    background-color: #FF6155;
    color: #fff;
    padding: 0.7em 6em;
    :hover{
     background: #FF4A3D ;
    }
  `}
  ${props => props.dash_option && css`
    background-color: #e8e8e8 ;
    color: #fff;
    transition: all .2s ease-out;
    box-shadow: none;
    margin:0 1em;
    :hover{
     background-color: ${({bg}) => bg};
     box-shadow: 0px 2px 15px 0.5px rgba(0, 0, 0, 0.1);
     transform: translateX(10px)
    }
  `}
`