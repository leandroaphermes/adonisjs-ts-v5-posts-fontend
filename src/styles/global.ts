import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before,
    &::after {
      box-sizing: inherit;
    }

    ${({ theme }) => css`
      transition: color ${theme.transition.slow},
        background-color ${theme.transition.slow},
        box-shadow ${theme.transition.slow};
    `}
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      font-family: ${theme.font.family};
    }

    body,
    #__next {
      height: 100%;
    }

    body {
      background-color: ${theme.colors.bodyBg};
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.text};
    }
  `}

`;

export default GlobalStyles;
