import styled, { css } from 'styled-components';

const styles = css`
  width: 100%;
  height: 3.75rem;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 1.5rem;
`;

export const StyledInput = styled.input`
  ${styles}
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  min-height: 8.75rem;
  line-height: 1.5rem;
  padding: 1rem 1.5rem;
  resize: vertical;
`;

export const StyledForm = styled.form`
  width: 100%;
  max-width: 28.125rem;

  input,
  textarea {
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
