import { createGlobalStyle } from 'styled-components';

export const sizes = {
  pagePaddingX: '16px',
  pagePaddingY: '16px',
  maxPageWidth: '1500px',
};

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  /* For Firefox */
  input[type='number'] {
      -moz-appearance:textfield;
  }
  /* Webkit browsers like Safari and Chrome */
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }
`;

export default GlobalStyle;
