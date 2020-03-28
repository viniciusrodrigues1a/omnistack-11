import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 87.5%;
    font-weight: 400;
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased;
  }

  input,
  button,
  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 112.5%;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }
`;

export default globalStyles;
