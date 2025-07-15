import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden; 
    scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .slick-slide {
    padding: 0 !important;
    margin: 0 !important;
  }

  .slick-track {
    margin: 0 !important;
  }

  .slick-list {
    padding: 0 !important;
    margin: 0 !important;
  }
`;

export default GlobalStyles;
