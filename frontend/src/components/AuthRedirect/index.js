import React from 'react';

import { StyledLink } from './styles';

export default function AuthRedirect({ children, to }) {
  return <StyledLink to={to}>{children}</StyledLink>;
}
