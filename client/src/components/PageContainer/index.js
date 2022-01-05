import styled from 'styled-components';
import PropTypes from 'prop-types';

export const PageContainer = styled.div`
  height: ${({height})=> height};
  width:90%;
  
  margin: 0px auto;
  background: ${({bg})=> bg} ;
  position: relative;
`

PageContainer.proptypes = {
  bg: PropTypes.string,
  height: PropTypes.string
}