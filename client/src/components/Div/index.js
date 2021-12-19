import styled from 'styled-components';
import PropTypes from 'prop-types';

const Div = styled.div`
  width: ${({ width }) => width};
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
  grid-template-columns: ${({ gtc }) => gtc};
  grid-template-rows: ${({ gtr }) => gtr};
  grid-gap: ${({ gg }) => gg};
`;

Div.defaultProps = {
  alignItems: 'normal',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  justifyContent: 'normal',
};

Div.propTypes = {
  width: PropTypes.string,
  alignItems: PropTypes.string,
  flexDirection: PropTypes.string,
  flexWrap: PropTypes.string,
  justifyContent: PropTypes.string,
  display: PropTypes.string,
  gtc: PropTypes.string,
  gtr: PropTypes.string,
  gg: PropTypes.string
};

export default Div;
