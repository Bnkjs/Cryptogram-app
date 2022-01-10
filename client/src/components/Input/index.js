import styled from 'styled-components'
import PropTypes from 'prop-types';

export const Input = styled.input`
  width:100% ;
  padding: 1.2em 1em;
  border: none;
  border-radius: 8px;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  transition: all .08s ease-in ;
  background-color: ${({ bg }) => bg };
  &:focus{
    box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.1);
    border: 2px solid #2B59FF ;
  }
`

Input.propTypes = {
  bg: PropTypes.string,
}
