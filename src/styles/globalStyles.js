import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-decoration: none;
  }

  body {
    background: #000000;
    font-family: 'Roboto', sans-serif;
    color: #fff;
  }

  `

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  img {
    max-width: 100%;
    display: block;
  }

  body {
    overflow-x: hidden; /* evita scroll horizontal no celular */
  }
`;