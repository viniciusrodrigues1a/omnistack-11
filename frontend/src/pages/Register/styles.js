import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  padding: 6rem;
  background: #f0f0f5;
  box-shadow: 0 0 6.25rem rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
`;

export const Section = styled.div`
  width: 100%;
  max-width: 23.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 2em;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
    color: #737380;
    line-height: 1.5rem;
  }
`;

export const Form = styled.div`
  width: 100%;
  max-width: 28.125rem;

  input {
    margin-top: 0.5rem;
  }

  div {
    display: flex;

    input:nth-child(2) {
      width: 5rem;
      margin-left: 0.5rem;
    }
  }
`;
