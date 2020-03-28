import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

export default function AuthRedirect({ children, to }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}

AuthRedirect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  to: PropTypes.string.isRequired,
};

AuthRedirect.defaultProps = {
  children: null,
};
