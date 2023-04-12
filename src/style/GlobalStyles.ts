import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    color: ${(props) => props.theme.colors.black};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
