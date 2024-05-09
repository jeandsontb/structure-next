'use client';

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  // Para ver mais fontes
  // https://gwfh.mranftl.com/fonts/ 
  //https://fontshub.pro/font/gotham-download 
  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/Gotham-Light.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/Gotham-Medium.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/Gotham-Book.woff2') format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: 'Gotham';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/Gotham-Bold.woff2') format('woff2');
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }




  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.fontPrimary};
      font-size: ${theme.font.sizes.xsmall};
      background-color: ${theme.colors.musgoBrand};
      color: ${theme.colors.gray400};
    }
  `}

  /* CSS PARA A TRANSIÇÃO DO MODAL */
  .modal-enter {
    opacity: 0;
    margin-top: 40rem;
  }
  .modal-enter-active {
    opacity: 1;
    margin-top: 0;
    transition: all 500ms;
  }
  .modal-exit {
    opacity: 1;
    margin-top: 0;
  }
  .modal-exit-active {
    opacity: 0;
    margin-top: 30rem;
    transition: all 500ms;
  }
`;

export default GlobalStyles;
