import styled from 'styled-components';
import PropTypes from 'prop-types';

export const PageContainer = styled.div`
  height: 100vh;
  width:90%;
  padding-top: 50px;
  margin: 0px auto;
  background: ${({bg})=> bg} ;
`

PageContainer.proptypes = {
  bg: PropTypes.string
}