import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Marged = styled.div`
  margin-top: ${({ top }) => top };
  margin-bottom: ${({ bottom }) => bottom };
  margin-left: ${({ left }) => left };
  margin-right: ${({ right }) => right };
`

Marged.propTypes = {
  top: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  right: PropTypes.string,
};