import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink, StyledButton } from './styles';

const AuthRedirect = {
  Link: ({ children, to }) => {
    return <StyledLink to={to}>{children}</StyledLink>;
  },
  Button: props => {
    const { children } = props;
    return <StyledButton {...props}>{children}</StyledButton>;
  },
};

export default AuthRedirect;

const validatedChildren = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
]);

AuthRedirect.Link.propTypes = {
  children: validatedChildren,
  to: PropTypes.string.isRequired,
};

AuthRedirect.Link.defaultProps = {
  children: null,
};

AuthRedirect.Button.propTypes = {
  children: validatedChildren,
};

AuthRedirect.Button.defaultProps = {
  children: null,
};
