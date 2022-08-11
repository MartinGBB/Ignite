import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => `${props.theme.background}`};
    color: #fff;
    height: 100vh;
  }

  body, input-security, textarea, button {
    font-family: 'Roboto Mono', monospace, sans serif;
    font-weight: 400;
    font-size: 1rem;
  }
`;