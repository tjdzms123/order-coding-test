import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  body,
  p {
    margin: 0;
  }

  div {
    box-sizing: border-box;
  }

  .App {
    width: 350px;
    height: 864px;
    min-height: 100vh;
    margin: 0 auto;
    border: 1px solid gray;
  }
`;
