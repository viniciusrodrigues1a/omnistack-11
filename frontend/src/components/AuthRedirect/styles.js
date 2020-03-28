import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  color: #41414d;
  font-size: 1.125em;
  font-weight: 500;
  text-decoration: none;
  transition: opacity 0.2s;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    opacity: 0.8;
  }
`;
