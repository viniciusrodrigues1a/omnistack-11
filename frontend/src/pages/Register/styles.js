import styled from 'styled-components';
import { darken } from 'polished';

export const NotifyToastContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto', sans-serif;

  p:first-child {
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #ffffff44;
  }

  p {
    font-size: 1.5em;
    color: #fff;

    span {
      font-size: 1.25em;
      font-weight: bold;
    }
  }

  button {
    border: 1px solid ${darken(0.12, '#e02041')};
  }
`;
